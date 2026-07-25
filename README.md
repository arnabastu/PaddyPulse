# PaddyPulse - AI-Powered Smart Rice Farming Platform

An intelligent agricultural platform designed to help rice farmers monitor field conditions, predict methane emissions, optimize irrigation, and unlock opportunities in carbon credit programs.

## 🚀 Quick Start

### Backend Setup
```bash
cd backend
python -m venv venv
.\venv\Scripts\activate  # On Windows
pip install -r requirements.txt
python -m uvicorn app.main:app --reload
```
Backend runs on `http://127.0.0.1:8000`

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
Frontend runs on `http://localhost:5173`

## 📋 Project Structure

```
PaddyPulse/
├── frontend/           # React + Vite application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components (Dashboard, Monitoring, etc)
│   │   ├── services/      # API client & axios config
│   │   ├── hooks/         # Custom React hooks
│   │   └── App.jsx
│   └── package.json
│
├── backend/            # FastAPI server
│   ├── app/
│   │   ├── routes/        # API endpoints
│   │   ├── services/      # Business logic & ML
│   │   ├── models/        # SQLAlchemy models & Pydantic schemas
│   │   ├── database/      # DB config
│   │   └── main.py
│   └── requirements.txt
│
├── ai/                 # Machine Learning module
│   ├── predict.py      # Methane prediction model
│   └── model.pkl       # Trained model
│
└── Design/            # HTML UI designs
```

## 🌟 Core Features

### 1. Real-Time Field Monitoring
- Soil bioelectric activity
- Soil moisture level
- Soil temperature
- Water level tracking
- Live sensor data updates

### 2. AI-Based Methane Risk Prediction
- Predicts methane generation risk (Low/Moderate/High)
- Confidence scores with explanations
- Contributing factor analysis

### 3. Smart Irrigation Recommendations
- Personalized irrigation actions based on field conditions
- Options: Continue normal, AWD, Delay, Drain
- Methane & water conservation optimization

### 4. Field Health Assessment
- Overall health score (0-100%)
- Soil, water, and environmental metrics
- Easy-to-understand summary

### 5. Historical Analytics
- 30-day trend analysis
- Risk history tracking
- Water usage patterns
- Long-term field performance

### 6. Carbon Credits Tracking
- Estimated carbon credits earned
- Water savings calculation
- Methane prevention metrics
- Sustainability benefits summary

## 🛠️ Tech Stack

**Frontend:**
- React 18.2
- Vite (build tool)
- Tailwind CSS (styling)
- Recharts (data visualization)
- Axios (HTTP client)
- React Router (navigation)

**Backend:**
- FastAPI
- SQLAlchemy (ORM)
- Pydantic (validation)
- Scikit-learn (ML)
- Pandas & NumPy (data processing)
- SQLite (database)

**AI/ML:**
- Random Forest Classifier (methane prediction)
- Feature engineering for agricultural data

## 📡 API Endpoints

```
POST   /api/sensor/data              - Submit sensor readings
GET    /api/sensor/current           - Get latest sensor data
GET    /api/sensor/history           - Get historical data
GET    /api/predict/methane          - Get methane risk prediction
GET    /api/recommend/irrigation     - Get irrigation recommendation
GET    /api/field/health             - Get field health score
GET    /api/carbon/credits           - Get carbon credit estimation
GET    /api/analytics/history        - Get analytics data
```

## 🔄 Data Flow

```
ESP32 Sensors
    ↓
POST /sensor/data
    ↓
Backend Database (SQLite)
    ↓
ML Pipeline (Methane Prediction)
    ↓
React Frontend (Real-time Display)
    ↓
Farmer Recommendations
```

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
npm run build
```

### Backend (Heroku/Railway/PythonAnywhere)
```bash
gunicorn -w 4 -b 0.0.0.0:8000 app.main:app
```

## 📱 Hardware Integration (ESP32)

Sensor data from ESP32 is sent to `/api/sensor/data` endpoint:
```json
{
  "soil_bioelectric": 35.0,
  "soil_moisture": 72.0,
  "soil_temperature": 25.5,
  "water_level": 12.0
}
```

## 🤖 Machine Learning Model

The methane prediction model uses:
- Soil bioelectric activity
- Soil moisture percentage
- Temperature
- Water level

Training data is included in the backend to start immediately.

## 📊 Dashboard Pages

1. **Dashboard Home** - Overview with health score, methane risk, irrigation recommendation
2. **Field Monitoring** - Real-time sensor data with live charts
3. **AI Insights** - Methane predictions and contributing factors
4. **Carbon Credits** - Sustainability metrics and credits earned
5. **Analytics** - 30-day trends and historical data
6. **Settings** - Farm configuration and preferences

## 🎯 Future Enhancements

- [ ] Multi-field support
- [ ] Mobile app (React Native)
- [ ] Advanced predictive models (LSTM)
- [ ] Weather API integration
- [ ] Crop disease detection
- [ ] Yield prediction
- [ ] Real-time alerts via email/SMS
- [ ] Export reports to PDF

## 📄 License

MIT License - Feel free to use and modify

## 👨‍💻 Development

Built with ❤️ for sustainable agriculture and climate action.

Questions? Check the documentation in the `Design/` folder for UI details.
