import { useState, useEffect } from 'react'
import { getAnalytics } from '../services/api'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function Analytics() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAnalytics()
        setData(response.data)
      } catch (error) {
        console.error("Failed to fetch analytics data:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) {
    return <div className="p-6 text-center text-on-surface">Loading Analytics...</div>
  }

  const chartData = data?.voltageHistory?.map((v, i) => ({
    name: `T-${data.voltageHistory.length - i}`,
    voltage: v,
    moisture: data.moistureHistory[i],
    temperature: data.temperatureHistory[i],
    risk: data.riskHistory[i]
  })) || []

  return (
    <div id="analytics" className="page-content active">
        {/* TopAppBar */}
        <div className="bg-white border-b border-outline-variant px-6 py-4 flex items-center justify-between sticky top-0 z-40">
            <h2 className="font-headline-md text-headline-md text-primary">Analytics</h2>
            <button className="p-2 hover:bg-surface-container-low rounded transition-colors">
                <span className="material-symbols-outlined text-on-surface">notifications</span>
            </button>
        </div>
        <div className="flex-1 p-6 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Voltage Chart */}
                <div className="bg-white border border-outline-variant rounded-lg p-6">
                    <h3 className="font-headline-md text-headline-md text-primary mb-4">Voltage History</h3>
                    <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={chartData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="voltage" stroke="#006c48" activeDot={{ r: 8 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Moisture Chart */}
                <div className="bg-white border border-outline-variant rounded-lg p-6">
                    <h3 className="font-headline-md text-headline-md text-primary mb-4">Moisture History</h3>
                    <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={chartData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="moisture" stroke="#2e7d32" activeDot={{ r: 8 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Temperature Chart */}
                <div className="bg-white border border-outline-variant rounded-lg p-6">
                    <h3 className="font-headline-md text-headline-md text-primary mb-4">Temperature History</h3>
                    <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={chartData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="temperature" stroke="#c62828" activeDot={{ r: 8 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                
                {/* Risk History */}
                <div className="bg-white border border-outline-variant rounded-lg p-6 flex flex-col justify-center">
                    <h3 className="font-headline-md text-headline-md text-primary mb-4">Recent Risk Assessments</h3>
                    <div className="flex gap-2 flex-wrap">
                        {data?.riskHistory?.map((risk, idx) => (
                            <span key={idx} className={`px-4 py-2 rounded font-bold ${risk === 'High' ? 'bg-error text-white' : risk === 'Moderate' ? 'bg-secondary text-white' : 'bg-surface-container-high text-on-surface'}`}>
                                T-{data.riskHistory.length - idx}: {risk}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
