#  PaddyPulse

> **AI-Powered Smart Rice Farming Platform for Methane Monitoring, Sustainable Irrigation, and Carbon Credit Estimation**

PaddyPulse is an intelligent climate-tech platform designed to help rice farmers monitor field conditions, predict methane-prone situations, optimize irrigation practices, and estimate potential carbon credits. The platform combines environmental monitoring, AI-powered analytics, and sustainability insights into a single dashboard to promote climate-smart agriculture.

---

##  Overview

Rice cultivation is one of the largest contributors to agricultural methane emissions due to prolonged flooded field conditions. Farmers often lack affordable tools to monitor field health, optimize irrigation, and quantify the environmental impact of sustainable practices.

PaddyPulse addresses this challenge by providing:

-  Real-time field monitoring
-  AI-powered methane risk prediction
-  Smart irrigation recommendations
-  Historical field analytics
-  Carbon credit estimation
-  Sustainability insights

The platform transforms raw environmental data into actionable recommendations that help farmers improve productivity while reducing greenhouse gas emissions.

---

#  Features

##  Dashboard

A centralized overview of the field's current condition.

### Includes

- Field Health Score
- Live Sensor Readings
- Methane Risk Indicator
- AI Recommendations
- System Status
- Recent Alerts

---

##  Field Monitoring

Monitor the real-time condition of the field.

### Includes

- Soil Bioelectric Voltage
- Soil Moisture
- Soil Temperature
- Water Level (Optional)
- Device Status
- Sensor Connectivity

---

##  AI Insights

Understand why the AI made its prediction.

### Includes

- Methane Risk Prediction
- Confidence Score
- Feature Importance
- Environmental Analysis
- Irrigation Recommendation

---

##  Analytics

Analyze historical trends.

### Includes

- Voltage History
- Moisture Trends
- Temperature Trends
- Methane Risk Timeline
- Field Health Progress

---

##  Carbon Credits

Estimate the environmental and economic benefits.

### Includes

- Estimated Methane Reduction
- CO₂e Reduction
- Estimated Carbon Credits
- Estimated Farmer Earnings

> **Note:** Carbon credit values shown in the MVP are simulated estimates intended for demonstration purposes.

---

##  Settings

Manage platform preferences.

### Includes

- Field Information
- Refresh Interval
- Device Status
- System Information

---

#  Key Capabilities

- Real-time environmental monitoring
- AI-powered methane risk assessment
- Sustainable irrigation recommendations
- Historical field analytics
- Carbon impact estimation
- Decision support for climate-smart farming

---

#  System Architecture

```text
ESP32 + Sensors
        │
        ▼
 FastAPI Backend
        │
 ┌──────┼────────┐
 │      │        │
AI   Database  Analytics
 │      │        │
 └──────┼────────┘
        ▼
 React Dashboard
```

---

#  Tech Stack

| Category | Technology |
|----------|------------|
| **Frontend** | React.js, Vite, Tailwind CSS |
| **Backend** | FastAPI, Python |
| **AI / ML** | Scikit-learn, Pandas, NumPy |
| **Database** | SQLite |
| **Hardware** | ESP32, Soil Microbial Fuel Cell (SMFC), Soil Moisture Sensor, Temperature Sensor |
| **Visualization** | Recharts / Chart.js |
| **Communication** | REST API, JSON |
| **Version Control** | Git, GitHub |

---

#  Project Structure

```text
PaddyPulse/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── app/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── models/
│   │   ├── database/
│   │   ├── schemas/
│   │   └── main.py
│   └── requirements.txt
│
├── hardware/
│   └── esp32.ino
│
├── ai/
│   ├── model.pkl
│   ├── train.py
│   └── predict.py
│
└── README.md
```

---

#  Workflow

```text
Sensor Data Collection
        │
        ▼
ESP32 acquires field data
        │
        ▼
Backend receives sensor readings
        │
        ▼
Data stored in database
        │
        ▼
AI predicts methane risk
        │
        ▼
Carbon impact estimated
        │
        ▼
REST APIs serve processed data
        │
        ▼
Dashboard displays live insights
```

---

#  API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/sensor-data` | Receive sensor readings |
| GET | `/dashboard` | Dashboard summary |
| GET | `/field-monitoring` | Live field monitoring data |
| GET | `/ai-insights` | AI prediction details |
| GET | `/analytics` | Historical trends |
| GET | `/carbon-credits` | Carbon impact estimation |
| GET | `/settings` | User settings |

---

#  Project Goals

- Reduce methane emissions from rice cultivation
- Optimize irrigation practices
- Improve decision-making through AI
- Promote climate-smart agriculture
- Enable carbon credit awareness
- Support sustainable farming

---

#  Development Status

| Module | Status |
|----------|:------:|
| React Frontend | ✅ Completed |
| Responsive UI | ✅ Completed |
| FastAPI Backend | ✅ Completed |
| API Endpoints | ✅ Completed |
| Database Models | ✅ Completed |
| AI Services | ✅ Initial Implementation |
| Carbon Estimation | ✅ Initial Implementation |
| Frontend ↔ Backend Integration | 🚧 In Progress |
| Database Integration | 🚧 In Progress |
| ESP32 Integration | ⏳ Planned |
| Live AI Predictions | ⏳ Planned |
| Testing & Deployment | ⏳ Planned |

---

#  Future Enhancements

- Live IoT sensor integration
- Advanced AI prediction models
- Satellite-based field verification
- Multi-field management
- Mobile application
- User authentication
- Cloud deployment
- Automated carbon credit verification
- Multi-language support
- Government and FPO integration

---

#  Team

**Project:** PaddyPulse

**Tagline:**
> *Empowering Sustainable Rice Farming through AI, Smart Monitoring, and Climate Intelligence.*

---

##  License

This project is developed for educational, research, and hackathon purposes.

---

##  Support

If you found this project interesting, consider giving it a ⭐ on GitHub!
