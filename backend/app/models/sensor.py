from sqlalchemy import Column, Integer, Float, DateTime, String
from sqlalchemy.sql import func
from app.database.db import Base
from pydantic import BaseModel

class SensorDataDB(Base):
    __tablename__ = "sensor_data"
    
    id = Column(Integer, primary_key=True, index=True)
    soil_bioelectric = Column(Float)
    soil_moisture = Column(Float)
    soil_temperature = Column(Float)
    water_level = Column(Float, nullable=True)
    timestamp = Column(DateTime(timezone=True), server_default=func.now())

class SensorDataSchema(BaseModel):
    soil_bioelectric: float
    soil_moisture: float
    soil_temperature: float
    water_level: float = None

class MethaneRiskSchema(BaseModel):
    risk_level: str
    confidence: float
    explanation: str

class IrrigationRecommendationSchema(BaseModel):
    recommendation: str
    reason: str

class FieldHealthSchema(BaseModel):
    score: float
    soil_condition: float
    water_efficiency: float
    environmental_stability: float
    methane_risk_contribution: float
    soil_moisture: float
    temperature: float
