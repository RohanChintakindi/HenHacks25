from retell import Retell
from dotenv import load_dotenv
import os
from flask import jsonify
import time
load_dotenv()

client = Retell(
    api_key= "key_a6f7fa2020538de0f18a31f394c7"
)

def make_call_fire(num: str):
    phone_call_response = client.call.create_phone_call(
        from_number="+14128661637",
        to_number="+1" + num,
    )
    return phone_call_response.call_id
    
def make_call_medical(num: str):
    phone_call_response = client.call.create_phone_call(
        from_number="+18775707119",
        to_number="+1" + num,
    )
    return phone_call_response.call_id
    

def make_call_traffic(num: str):
    phone_call_response = client.call.create_phone_call(
        from_number="+15072090684",
        to_number="+1" + num,
    )
    return phone_call_response.call_id