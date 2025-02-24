"""
Module Dcstring: This file manages interactions
between frontend and backend
"""
from flask import Flask, jsonify, request
from flask_cors import CORS
from postgres_connector import PostgresConnector
from os import environ

dbname = environ.get("DB_NAME")
user = environ.get("DB_USER")
password = environ.get("DB_PASSWORD")
host = environ.get("DB_HOST")
db_port = environ.get("DB_PORT")
frontend_port = environ.get("FRONTEND_PORT")

app = Flask(__name__)
CORS(app, origins=[f"http://localhost:{frontend_port}", f"http://127.0.0.1:{frontend_port}", '*'])

connector = PostgresConnector(dbname = dbname, user=user, password=password, host=host, port=db_port)


# return all dynamical systems
@app.route('/get_all_systems', methods=['POST', 'GET'])
def data1():
    data = connector.get_all_systems()
    return jsonify(data)

@app.route('/get_all_families', methods=['POST', 'GET'])
def data6():
    data = connector.get_all_families()
    return jsonify(data)

# expects json with attribute 'label' and value as the label of the system
@app.route('/get_system', methods=['POST', 'GET'])
def data2():
    target = request.get_json()
    data = connector.get_system(target['id'])
    return jsonify(data)


# expects json with attribute 'labels' and value as list of labels
@app.route('/get_selected_systems', methods=['POST', 'GET'])
def data3():
    target = request.get_json()
    data = connector.get_selected_systems(target['labels'])
    return jsonify(data)


# expects json describing filters, returns the systems that satisfy filters
# example call json data that would return systems with degree of 2 and 3,
# dimension = 4: {'degree': [2,3], 'N': [4]}
@app.route('/get_filtered_systems', methods=['POST', 'GET'])
def data4():
    filters = request.get_json()
    results, stats = connector.get_filtered_systems(filters)
    data = {
        'results': results,
        'statistics': stats
    }
    return jsonify(data)


# expects json describing filters, returns stats on the systems that
# satisfy those filters in an array
@app.route('/get_statistics', methods=['POST', 'GET'])
def data5():
    filters = request.get_json()
    data = connector.get_statistics(filters)
    return jsonify(data)


@app.route('/get_family', methods=['POST'])
def get_family():
    target = request.get_json()
    data = connector.get_family(target['id'])
    return jsonify(data)

if __name__ == '__main__':
    app.run()
