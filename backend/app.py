from flask import Flask
from emergency_calls import make_call_fire, make_call_medical, make_call_traffic_accident
import json
app = Flask(__name__)


@app.route('/call-fire', methods=['POST'])
def call_fire():
    return make_call_fire()

@app.route('/call-medical', methods=['POST'])
def call_medical():
    return make_call_medical()

@app.route('/call-traffic-accident', methods=['POST'])
def call_traffic_accident():
    return make_call_traffic_accident()

if __name__ == '__main__':
    app.run(debug=True)