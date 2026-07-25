import numpy as np

# Simple methane risk prediction (no sklearn dependency)
risk_labels = ["Low", "Moderate", "High"]

def predict_methane_risk(soil_bioelectric, soil_moisture, temperature, water_level):
    """Predict methane risk level"""
    # Simple heuristic-based model
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
    
    # Low bioelectric activity = anaerobic conditions = more methane
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
        "risk_level": risk_labels[risk_idx],
        "confidence": round(confidence, 1),
        "explanation": {
            0: "Field conditions are stable. Low methane generation expected.",
            1: "Moderate conditions detected. Monitor irrigation carefully.",
            2: "High risk detected. Consider AWD irrigation or drainage."
        }[risk_idx]
    }

def recommend_irrigation(methane_risk, soil_moisture):
    """Recommend irrigation action"""
    recommendations = {
        "Low": {
            "action": "Continue normal irrigation",
            "reason": "Field is stable with low methane risk."
        },
        "Moderate": {
            "action": "Initiate Alternate Wetting and Drying (AWD)",
            "reason": "AWD reduces methane while conserving water."
        },
        "High": {
            "action": "Drain excess water" if soil_moisture > 75 else "Maintain current water level",
            "reason": "Reduce waterlogging to minimize methane generation."
        }
    }
    return recommendations.get(methane_risk, recommendations["Low"])

def calculate_field_health(soil_bioelectric, soil_moisture, temperature, water_level):
    """Calculate overall field health score"""
    bioelectric_score = min(soil_bioelectric / 50 * 100, 100)
    moisture_score = 100 if 60 <= soil_moisture <= 80 else max(0, 100 - abs(soil_moisture - 70) * 2)
    temp_score = 100 if 20 <= temperature <= 30 else max(0, 100 - abs(temperature - 25) * 5)
    
    overall_score = (bioelectric_score + moisture_score + temp_score) / 3
    
    return {
        "score": round(overall_score, 1),
        "soil_condition": round(bioelectric_score, 1),
        "water_efficiency": round(moisture_score, 1),
        "environmental_stability": round(temp_score, 1),
        "methane_risk_contribution": 100 - round(overall_score, 1),
        "soil_moisture": soil_moisture,
        "temperature": temperature
    }
