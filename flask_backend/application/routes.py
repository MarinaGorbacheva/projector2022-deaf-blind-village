from flask import current_app as app, jsonify
from .data_processing import PreprocessedData

map_statistics = PreprocessedData.map_statistics()


@app.route("/")
@app.route("/index")
def index():
    return "OK"


@app.route("/persons", methods=["GET"])
def get_persons():
    return jsonify(map_statistics)
