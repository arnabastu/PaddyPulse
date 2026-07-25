from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(prefix="/api", tags=["sensors"])

class SensorDataInput(BaseModel):
    voltage: float
    moisture: float
    temperature: float

@router.post("/sensor-data")
def post_sensor_data(data: SensorDataInput):
    return {"status": "success", "message": "Data received successfully"}

@router.get("/field-monitoring")
def get_field_monitoring():
    return {
        "sensorStatus": "Online",
        "deviceStatus": "Connected",
        "voltage": 0.54,
        "moisture": 71,
        "temperature": 30,
        "battery": 93
    }
