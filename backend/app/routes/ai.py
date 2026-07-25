from fastapi import APIRouter

router = APIRouter(prefix="/api", tags=["ai"])

@router.get("/ai-insights")
def get_ai_insights():
    return {
        "prediction": "High",
        "confidence": 91,
        "featureImportance": {
            "voltage": 0.45,
            "moisture": 0.38,
            "temperature": 0.17
        },
        "recommendation": "Initiate Alternate Wetting and Drying"
    }
