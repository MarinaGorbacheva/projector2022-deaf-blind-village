from flask import current_app as app, jsonify
from .data_processing import PreprocessedData


@app.route("/")
@app.route("/index")
def index():
    return "OK"


@app.route("/persons", methods=["GET"])
def get_persons():
    print(jsonify(PreprocessedData.PERSONS))
    return jsonify(PreprocessedData.PERSONS)
