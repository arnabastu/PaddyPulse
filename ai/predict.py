"""
AI Prediction Module for PaddyPulse
Handles methane risk prediction and irrigation recommendations
"""

import numpy as np

class MethanePredictor:
    def __init__(self):
        self.risk_labels = ["Low", "Moderate", "High"]
    
    def predict(self, soil_bioelectric, soil_moisture, temperature, water_level):
        """Predict methane risk using heuristic model"""
        risk_score = 0
        
        # High moisture + high water = more methane
        if soil_moisture > 75 and water_level > 15:
            risk_score += 40
        elif soil_moisture > 70:
            risk_score += 20
        
        # Temperature effects
        if 26 <= temperature <= 30:
            risk_score += 30  # Optimal for methane generation
        elif temperature > 30:
            risk_score += 10
        
        # Low bioelectric activity = anaerobic conditions
        if soil_bioelectric < 30:
            risk_score += 20
        
        # Determine risk level
        if risk_score > 60:
            risk_idx = 2  # High
        elif risk_score > 30:
            risk_idx = 1  # Moderate
        else:
            risk_idx = 0  # Low
        
        confidence = min(50 + abs(risk_score - 30) * 0.5, 95)
        
        return {
            "risk_level": self.risk_labels[risk_idx],
            "confidence": round(confidence, 1),
            "risk_index": risk_idx
        }

if __name__ == "__main__":
    predictor = MethanePredictor()
    result = predictor.predict(35, 72, 25.5, 12)
    print(f"Methane Risk Prediction: {result}")
