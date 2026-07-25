from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database.db import get_db
from app.models.sensor import SensorDataDB, SensorDataSchema, FieldHealthSchema
from app.services.ml_service import calculate_field_health

router = APIRouter(prefix="/api/sensor", tags=["sensor"])

@router.post("/data")
def post_sensor_data(data: SensorDataSchema, db: Session = Depends(get_db)):
    """Receive sensor data from ESP32"""
    db_sensor = SensorDataDB(**data.dict())
    db.add(db_sensor)
    db.commit()
    db.refresh(db_sensor)
    return {"id": db_sensor.id, "status": "success"}

@router.get("/current")
def get_current_sensor(db: Session = Depends(get_db)):
    """Get latest sensor reading"""
    latest = db.query(SensorDataDB).order_by(SensorDataDB.id.desc()).first()
    if not latest:
        return {
            "soil_bioelectric": 35.0,
            "soil_moisture": 72.0,
            "soil_temperature": 25.5,
            "water_level": 12.0
        }
    return latest

@router.get("/history")
def get_sensor_history(days: int = 7, db: Session = Depends(get_db)):
    """Get historical sensor data"""
    from datetime import timedelta
    from sqlalchemy import func
    
    query = db.query(SensorDataDB).order_by(SensorDataDB.timestamp.desc()).limit(100)
    return query.all()
