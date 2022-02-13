from . import DB, MA
from marshmallow import fields
from datetime import date


class Person(DB.Model):
    __tablename__ = 'persons'
    id = DB.Column(DB.Integer, primary_key=True)
    gender = DB.Column(DB.String(15), nullable=True)
    birthdate = DB.Column(DB.Date, nullable=True)
    subject = DB.Column(DB.String(30), nullable=True)
    locality = DB.Column(DB.String(30), nullable=True)
    disability_information = DB.relationship('DisabilityInformation', backref='persons', lazy=True, uselist=False)
    additional_information = DB.relationship('AdditionalInformation', backref='persons', lazy=True, uselist=False)


class DisabilityInformation(DB.Model):
    __tablename__ = 'disability_information'
    person_id = DB.Column(DB.Integer, DB.ForeignKey('persons.id'), nullable=False, primary_key=True)
    disability_group = DB.Column(DB.String(30), nullable=True)
    disability_cause = DB.Column(DB.Text, nullable=True)
    sight_loss_etiology = DB.Column(DB.String(40), nullable=True)
    sight_loss_age = DB.Column(DB.Integer, nullable=True)
    sight_condition = DB.Column(DB.Text, nullable=True)
    sight_loss_cause = DB.Column(DB.Text, nullable=True)
    hearing_loss_etiology = DB.Column(DB.String(40), nullable=True)
    hearing_loss_age = DB.Column(DB.Integer, nullable=True)
    hearing_condition = DB.Column(DB.Text, nullable=True)
    hearing_loss_cause = DB.Column(DB.Text, nullable=True)
    syndrome_awareness = DB.Column(DB.Boolean, nullable=True)
    syndrome = DB.Column(DB.Text, nullable=True)
    other_diseases = DB.Column(DB.Boolean, nullable=True)
    diagnosis = DB.Column(DB.Text, nullable=True)


class AdditionalInformation(DB.Model):
    __tablename__ = 'additional_information'
    person_id = DB.Column(DB.Integer, DB.ForeignKey('persons.id'), nullable=False, primary_key=True)
    recognizable_languages = DB.Column(DB.Text, nullable=True)
    information_perception = DB.Column(DB.Text, nullable=True)
    communication_methods = DB.Column(DB.Text, nullable=True)
    information_sources = DB.Column(DB.Text, nullable=True)
    assistance_necessity = DB.Column(DB.Text, nullable=True)
    street_movement = DB.Column(DB.Text, nullable=True)
    rehabilitation_technologies = DB.Column(DB.Text, nullable=True)
    translator_assistance = DB.Column(DB.String(35), nullable=True)
    education = DB.Column(DB.Text, nullable=True)
    academic_degree = DB.Column(DB.String(20), nullable=True)
    specialization = DB.Column(DB.Text, nullable=True)
    working = DB.Column(DB.Boolean, nullable=True)
    working_willingness = DB.Column(DB.Boolean, nullable=True)
    living_conditions = DB.Column(DB.Text, nullable=True)
    recording_date = DB.Column(DB.Date, nullable=False)


class PersonSchema(MA.SQLAlchemyAutoSchema):
    class Meta:
        model = Person

    gender = MA.auto_field()
    subject = MA.auto_field()
    locality = MA.auto_field()
    birthdate = MA.auto_field()
    age = fields.Method("get_age")

    def get_age(self, obj):
        if obj.birthdate is not None:
            today = date.today()
            born = obj.birthdate
            return today.year - born.year - ((today.month, today.day) < (born.month, born.day))
        return None


persons_schema = PersonSchema(many=True)
