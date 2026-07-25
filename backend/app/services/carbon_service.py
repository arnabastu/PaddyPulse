"""
PaddyPulse - Carbon Credit Calculation Engine
Estimates carbon credits based on field metrics and practices
"""

class CarbonCreditCalculator:
    """Calculate carbon credits earned through sustainable practices"""
    
    # Constants (per season, per hectare)
    METHANE_REDUCTION_RATE = 0.8  # tons CO2e per unit risk reduction
    WATER_SAVINGS_VALUE = 0.0001  # tons CO2e per liter saved
    AWD_BONUS = 2.5  # additional tons CO2e if AWD practiced
    
    def __init__(self, field_area_hectares=1.0):
        self.area = field_area_hectares
    
    def calculate_methane_credits(self, health_score, methane_risk_contribution):
        """Calculate credits from methane reduction"""
        # Higher health score and lower methane contribution = more credits
        risk_reduction = 100 - methane_risk_contribution
        credits = (risk_reduction / 100) * self.METHANE_REDUCTION_RATE * self.area
        return round(credits, 2)
    
    def calculate_water_credits(self, water_efficiency_score, water_usage_liters):
        """Calculate credits from water conservation"""
        # Optimal water usage is 60-80% of available
        savings = max(0, water_usage_liters * (1 - water_efficiency_score / 100))
        credits = savings * self.WATER_SAVINGS_VALUE * self.area
        return round(credits, 2)
    
    def calculate_awd_bonus(self, is_awd_practiced=True):
        """Bonus credits for practicing Alternate Wetting and Drying"""
        if is_awd_practiced:
            return round(self.AWD_BONUS * self.area, 2)
        return 0.0
    
    def total_credits(self, health_score, methane_risk_contribution, 
                     water_usage_liters=5000, is_awd_practiced=False):
        """Calculate total carbon credits"""
        methane_credits = self.calculate_methane_credits(health_score, methane_risk_contribution)
        water_credits = self.calculate_water_credits(100 - methane_risk_contribution, water_usage_liters)
        awd_bonus = self.calculate_awd_bonus(is_awd_practiced)
        
        return {
            "methane_credits": methane_credits,
            "water_credits": water_credits,
            "awd_bonus": awd_bonus,
            "total_credits": round(methane_credits + water_credits + awd_bonus, 2)
        }

# Example usage
if __name__ == "__main__":
    calc = CarbonCreditCalculator(field_area_hectares=2.0)
    credits = calc.total_credits(
        health_score=75,
        methane_risk_contribution=25,
        water_usage_liters=8000,
        is_awd_practiced=True
    )
    print(f"Total Credits Earned: {credits['total_credits']}")
