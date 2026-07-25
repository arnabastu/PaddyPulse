from fastapi import APIRouter

router = APIRouter(prefix="/api", tags=["settings"])

@router.get("/settings")
def get_settings():
    return {
        "fieldName": "Demo Field",
        "refreshInterval": 5,
        "deviceStatus": "Online"
    }
