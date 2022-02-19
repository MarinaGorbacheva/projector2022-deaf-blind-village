from flask import current_app as app, jsonify
from .data_processing import PreprocessedData

map_statistics = PreprocessedData.map_statistics()
etiology_statistics = PreprocessedData.etiology_statistics()


@app.route("/")
@app.route("/index")
def index():
    return "OK"


@app.route("/persons", methods=["GET"])
def persons():
    return jsonify(map_statistics)


@app.route("/etiology", methods=["GET"])
def etiology():
    return jsonify(etiology_statistics)
