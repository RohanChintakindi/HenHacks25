import os
from flask import Flask, render_template, jsonify
from flask_cors import CORS
from retell import Retell
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

client = Retell(
    api_key= os.getenv("RETELL_API_KEY"),
)


def make_call_fire():
    phone_call_response = client.call.create_phone_call(
        from_number="+14157774444",
        to_number="+12137774445",
    )
    
def make_call_medical():
    phone_call_response = client.call.create_phone_call(
        from_number="+14157774444",
        to_number="+12137774445",
    )
    return jsonify({'summary':phone_call_response.summary})

def make_call_traffic_accident():
    phone_call_response = client.call.create_phone_call(
        from_number="+14157774444",
        to_number="+12137774445",
    )

if __name__ == "__main__":
    app.run(debug=True)