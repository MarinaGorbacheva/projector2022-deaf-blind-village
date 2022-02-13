from flask import current_app as app, jsonify
from .models import Person, persons_schema

persons = persons_schema.dump(Person.query.all())

@app.route("/")
@app.route("/index", methods=["GET"])
def index():
    return jsonify(persons)
