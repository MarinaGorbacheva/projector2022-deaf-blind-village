from flask import current_app as app, jsonify
from .models import Person, persons_schema

@app.route("/")
@app.route("/index", methods=["GET"])
def index():
    persons = Person.query.all()
    results = persons_schema.dump(persons)
    json = jsonify(results)
    return json




