@echo off
REM PaddyPulse Development Setup Script for Windows

echo.
echo 🌾 PaddyPulse Setup
echo ====================

REM Backend setup
echo Setting up Backend...
cd backend
python -m venv venv
call venv\Scripts\activate
pip install -r requirements.txt
cd ..

REM Frontend setup
echo Setting up Frontend...
cd frontend
call npm install
cd ..

echo.
echo ✅ Setup complete!
echo.
echo To start development:
echo Backend:  cd backend ^&^& venv\Scripts\activate ^&^& python -m uvicorn app.main:app --reload
echo Frontend: cd frontend ^&^& npm run dev
pause
