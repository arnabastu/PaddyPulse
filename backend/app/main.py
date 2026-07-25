from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database.db import init_db
from app.routes import sensor, predictions, dashboard, sensors, analytics, ai, carbon, settings

app = FastAPI(title="PaddyPulse API")

# Initialize database
init_db()

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routes
app.include_router(sensor.router)
app.include_router(predictions.router)
app.include_router(dashboard.router)
app.include_router(sensors.router)
app.include_router(analytics.router)
app.include_router(ai.router)
app.include_router(carbon.router)
app.include_router(settings.router)


@app.get("/")
def root():
    return {"message": "PaddyPulse API is running"}

@app.get("/health")
def health():
    return {"status": "ok"}
