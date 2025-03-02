from flask import Flask, request, jsonify
from flask_cors import CORS
from emergency_calls import make_call_fire, make_call_medical, make_call_traffic
import json
import requests

app = Flask(__name__)
CORS(app)

@app.route('/call-fire', methods=['POST'])
def call_fire():
    data = request.get_json()
    num = data.get("num")
    make_call_fire(num)

@app.route('/call-medical', methods=['POST'])
def call_medical():
    data = request.get_json()
    num = data.get("num")
    make_call_medical(num)

@app.route('/call-traffic', methods=['POST'])
def call_traffic():
    data = request.get_json()
    num = data.get("num")
    make_call_traffic(num)

if __name__ == '__main__':
    app.run(debug=True)