from fastapi import APIRouter
from pydantic import BaseModel
from typing import List, Dict
import datetime

router = APIRouter(prefix="/api", tags=["dashboard"])

@router.get("/dashboard")
def get_dashboard():
    return {
        "fieldHealth": 82,
        "voltage": 0.54,
        "moisture": 71,
        "temperature": 30,
        "methaneRisk": "High",
        "confidence": 91,
        "recommendation": "Initiate Alternate Wetting and Drying",
        "lastUpdated": datetime.datetime.utcnow().isoformat() + "Z"
    }
