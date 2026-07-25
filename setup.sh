#!/bin/bash

# PaddyPulse Development Setup Script

echo "🌾 PaddyPulse Setup"
echo "===================="

# Backend setup
echo "Setting up Backend..."
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: .\venv\Scripts\activate
pip install -r requirements.txt
cd ..

# Frontend setup
echo "Setting up Frontend..."
cd frontend
npm install
cd ..

echo "✅ Setup complete!"
echo ""
echo "To start development:"
echo "Backend:  cd backend && source venv/bin/activate && python -m uvicorn app.main:app --reload"
echo "Frontend: cd frontend && npm run dev"
