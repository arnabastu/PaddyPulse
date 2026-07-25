from fastapi import APIRouter
import datetime

router = APIRouter(prefix="/api", tags=["analytics"])

@router.get("/analytics")
def get_analytics():
    return {
        "voltageHistory": [0.5, 0.52, 0.54, 0.51, 0.55],
        "moistureHistory": [70, 71, 72, 70, 71],
        "temperatureHistory": [29, 29.5, 30, 30.5, 30],
        "riskHistory": ["Low", "Low", "Moderate", "High", "High"]
    }
