from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database.db import get_db
from app.models.sensor import MethaneRiskSchema, IrrigationRecommendationSchema, FieldHealthSchema
from app.services.ml_service import (
    predict_methane_risk,
    recommend_irrigation,
    calculate_field_health
)

router = APIRouter(prefix="/api", tags=["predictions"])

@router.get("/predict/methane", response_model=MethaneRiskSchema)
def get_methane_prediction(db: Session = Depends(get_db)):
    """Predict methane risk based on current sensor data"""
    from app.models.sensor import SensorDataDB
    
    latest = db.query(SensorDataDB).order_by(SensorDataDB.id.desc()).first()
    
    if not latest:
        # Default values for demo
        soil_bioelectric = 35.0
        soil_moisture = 72.0
        temperature = 25.5
        water_level = 12.0
    else:
        soil_bioelectric = latest.soil_bioelectric
        soil_moisture = latest.soil_moisture
        temperature = latest.soil_temperature
        water_level = latest.water_level or 10.0
    
    prediction = predict_methane_risk(soil_bioelectric, soil_moisture, temperature, water_level)
    return prediction

@router.get("/recommend/irrigation", response_model=IrrigationRecommendationSchema)
def get_irrigation_recommendation(db: Session = Depends(get_db)):
    """Get irrigation recommendation"""
    from app.models.sensor import SensorDataDB
    
    latest = db.query(SensorDataDB).order_by(SensorDataDB.id.desc()).first()
    
    if not latest:
        soil_bioelectric = 35.0
        soil_moisture = 72.0
        temperature = 25.5
        water_level = 12.0
    else:
        soil_bioelectric = latest.soil_bioelectric
        soil_moisture = latest.soil_moisture
        temperature = latest.soil_temperature
        water_level = latest.water_level or 10.0
    
    methane_pred = predict_methane_risk(soil_bioelectric, soil_moisture, temperature, water_level)
    recommendation = recommend_irrigation(methane_pred["risk_level"], soil_moisture)
    return recommendation

@router.get("/field/health", response_model=FieldHealthSchema)
def get_field_health(db: Session = Depends(get_db)):
    """Get overall field health assessment"""
    from app.models.sensor import SensorDataDB
    
    latest = db.query(SensorDataDB).order_by(SensorDataDB.id.desc()).first()
    
    if not latest:
        soil_bioelectric = 35.0
        soil_moisture = 72.0
        temperature = 25.5
        water_level = 12.0
    else:
        soil_bioelectric = latest.soil_bioelectric
        soil_moisture = latest.soil_moisture
        temperature = latest.soil_temperature
        water_level = latest.water_level or 10.0
    
    health = calculate_field_health(soil_bioelectric, soil_moisture, temperature, water_level)
    return health
