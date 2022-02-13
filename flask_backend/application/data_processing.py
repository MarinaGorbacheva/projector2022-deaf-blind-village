from .models import (
    Person, persons_schema, DisabilityInformation, disability_info_schema
)
from sqlalchemy import null
import pandas as pd
import numpy as np


class PreprocessedData:
    PERSONS = persons_schema.dump(Person.query.filter(Person.subject != null()))
    DISABILITIES = disability_info_schema.dump(
        DisabilityInformation.query.outerjoin(Person, Person.id == DisabilityInformation.person_id).all()
    )

    @classmethod
    def map_statistics(cls):
        df = pd.DataFrame.from_records(cls.PERSONS)
        df["kid"] = df["age"] < 18
        table_1 = df.groupby(["subject"], as_index=True).agg({"age": np.mean, "id": "count", "kid": np.sum})
        table_2 = df.groupby(["subject", "gender"], as_index=False).agg({"id": "count"})
        females = table_2[table_2["gender"] == "Женский"] \
            .rename(columns={"id": "females"}).set_index('subject')["females"]
        males = table_2[table_2["gender"] == "Мужской"] \
            .rename(columns={"id": "males"}).set_index('subject')["males"]
        map_statistics = pd.concat([table_1, females, males], axis=1) \
            .fillna(0) \
            .astype({"females": np.uint8, "males": np.uint8}) \
            .round({"age": 2}) \
            .rename(columns={"age": "mean_age", "kid": "kids", "id": "entries"}) \
            .reset_index()
        return map_statistics.to_json(orient="records")

    @classmethod
    def etiology_statistics(cls):
        df = pd.DataFrame.from_records(cls.DISABILITIES)
        df["birth_year"] = pd.to_datetime(df["persons.birthdate"], dayfirst=True).dt.year
        df["hearing_loss_etiology_categorical"] = df["hearing_loss_etiology"] \
            .str.replace(r"приобретенная.+", "приобретенная", regex=True)
        table = df[["hearing_loss_etiology_categorical", "sight_loss_etiology", "birth_year"]] \
            .dropna() \
            .astype({"birth_year": np.uint16})
        return table.to_json(orient="records")
