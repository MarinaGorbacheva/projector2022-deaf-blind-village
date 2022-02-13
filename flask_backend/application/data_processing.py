from .models import Person, persons_schema
from sqlalchemy import null


class PreprocessedData:
    PERSONS = persons_schema.dump(Person.query.filter(Person.subject != null()))
