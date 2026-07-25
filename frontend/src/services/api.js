import axios from 'axios'

const API_BASE_URL = '/api'

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000
})

// Dashboard
export const getDashboard = () => apiClient.get('/dashboard')

// Field Monitoring
export const getFieldMonitoring = () => apiClient.get('/field-monitoring')

// AI Insights
export const getAiInsights = () => apiClient.get('/ai-insights')

// Analytics
export const getAnalytics = () => apiClient.get('/analytics')

// Carbon Credits
export const getCarbonCredits = () => apiClient.get('/carbon-credits')

// Settings
export const getSettings = () => apiClient.get('/settings')
export const updateSettings = (settings) => apiClient.put('/settings', settings)

// Sensor Data
export const postSensorData = (data) => apiClient.post('/sensor-data', data)
