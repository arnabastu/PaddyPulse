"""
PaddyPulse Initialization Script
Run this to populate demo data and test the system
"""

import sys
sys.path.insert(0, 'backend')

from app.database.db import init_db, SessionLocal
from app.models.sensor import SensorDataDB
from app.services.ml_service import predict_methane_risk, recommend_irrigation, calculate_field_health
import random
from datetime import datetime, timedelta

def populate_demo_data():
    """Generate demo sensor data"""
    print("Initializing database...")
    init_db()
    
    db = SessionLocal()
    
    print("Adding demo sensor data...")
    base_time = datetime.now()
    
    for i in range(10):
        sensor_data = SensorDataDB(
            soil_bioelectric=random.uniform(25, 50),
            soil_moisture=random.uniform(60, 85),
            soil_temperature=random.uniform(22, 30),
            water_level=random.uniform(8, 20),
            timestamp=base_time - timedelta(hours=i)
        )
        db.add(sensor_data)
    
    db.commit()
    print("✅ Demo data added!")
    
    # Test ML services
    print("\nTesting ML Services...")
    soil_bioelectric = 35.0
    soil_moisture = 72.0
    temperature = 25.5
    water_level = 12.0
    
    methane = predict_methane_risk(soil_bioelectric, soil_moisture, temperature, water_level)
    print(f"Methane Risk: {methane}")
    
    irrigation = recommend_irrigation(methane['risk_level'], soil_moisture)
    print(f"Irrigation Recommendation: {irrigation}")
    
    health = calculate_field_health(soil_bioelectric, soil_moisture, temperature, water_level)
    print(f"Field Health Score: {health['score']}%")
    
    print("\n✅ All systems ready!")
    db.close()

if __name__ == "__main__":
    populate_demo_data()
