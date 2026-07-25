from fastapi import APIRouter

router = APIRouter(prefix="/api", tags=["carbon"])

@router.get("/carbon-credits")
def get_carbon_credits():
    return {
        "methaneSaved": 12.4,
        "co2eSaved": 31.6,
        "estimatedCredits": 0.41,
        "estimatedIncome": 11.8
    }
