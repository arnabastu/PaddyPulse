import { useState, useEffect } from 'react'
import { getAiInsights } from '../services/api'

export default function AIInsight() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAiInsights()
        setData(response.data)
      } catch (error) {
        console.error("Failed to fetch AI insights:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) {
    return <div className="p-6 text-center text-on-surface">Loading AI Insights...</div>
  }

  return (
    <div id="ai-insights" className="page-content active">
        {/* TopAppBar */}
        <div className="bg-white border-b border-outline-variant px-6 py-4 flex items-center justify-between sticky top-0 z-40">
            <h2 className="font-headline-md text-headline-md text-primary">AI Insights</h2>
            <button className="p-2 hover:bg-surface-container-low rounded transition-colors">
                <span className="material-symbols-outlined text-on-surface">notifications</span>
            </button>
        </div>
        <div className="flex-1 p-6">
            {/* Main Grid */}
            <div className="grid md:grid-cols-12 gap-6 mb-8">
                {/* Section 1: Key Metrics */}
                <div className="md:col-span-8">
                    <div className="bg-white border border-outline-variant p-6 rounded-xl shadow-sm">
                        <h3 className="font-headline-md text-headline-md text-primary mb-6">Real-time Sensor Analysis</h3>
                        <div className="grid grid-cols-3 gap-4">
                            {/* Soil Moisture */}
                            <div className="p-4 rounded-lg bg-surface-container-low border border-outline-variant/30 flex flex-col items-center text-center">
                                <span className="material-symbols-outlined text-primary mb-2">humidity_mid</span>
                                <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Soil Moisture</span>
                                <div className="flex items-center gap-1 mt-2 text-on-secondary-container">
                                    <span className="font-headline-md text-headline-md text-primary">High</span>
                                </div>
                            </div>
                            {/* Voltage */}
                            <div className="p-4 rounded-lg bg-surface-container-low border border-outline-variant/30 flex flex-col items-center text-center">
                                <span className="material-symbols-outlined text-primary mb-2">bolt</span>
                                <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Voltage</span>
                                <div className="flex items-center gap-1 mt-2 text-error">
                                    <span className="font-headline-md text-headline-md">Critical</span>
                                </div>
                            </div>
                            {/* Temperature */}
                            <div className="p-4 rounded-lg bg-surface-container-low border border-outline-variant/30 flex flex-col items-center text-center">
                                <span className="material-symbols-outlined text-primary mb-2">thermostat</span>
                                <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Temperature</span>
                                <div className="flex items-center gap-1 mt-2 text-on-secondary-container">
                                    <span className="font-headline-md text-headline-md text-primary">Normal</span>
                                </div>
                            </div>
                        </div>
                        <div className={`mt-8 p-4 ${data?.prediction === 'High' ? 'bg-error-container text-on-error-container border-error' : 'bg-primary-container text-on-primary-container border-secondary'} rounded-lg border-l-4 flex gap-4`}>
                            <span className="material-symbols-outlined shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>info</span>
                            <div>
                                <p className="font-label-md text-label-md mb-1">AI Deduction Result: {data?.prediction || 'Unknown'} Methane Risk</p>
                                <p className="font-body-md text-body-md">Action Recommended: <span className="font-bold">{data?.recommendation || 'None'}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Section 2: Confidence Gauge */}
                <div className="md:col-span-4">
                    <div className="bg-white border border-outline-variant p-8 rounded-xl shadow-sm flex flex-col items-center justify-center h-full text-center">
                        <h3 className="font-label-md text-label-md text-on-surface-variant mb-6 uppercase tracking-widest">Prediction Confidence</h3>
                        <div className="relative w-48 h-48 flex items-center justify-center mb-6">
                            <svg className="w-full h-full transform -rotate-90">
                                <circle className="text-surface-container-highest" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeWidth="8"></circle>
                                <circle className="text-secondary" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeDasharray="553" strokeDashoffset="44" strokeLinecap="round" strokeWidth="12"></circle>
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className="font-display-lg text-display-lg text-primary">{data?.confidence || 0}%</span>
                                <span className="font-label-md text-label-md text-on-secondary-container">Optimal Fit</span>
                            </div>
                        </div>
                        <p className="font-body-md text-body-md text-on-surface-variant px-4">Model performance exceeds established benchmarks for terrestrial methane detection.</p>
                    </div>
                </div>
            </div>
            {/* Section 3: Feature Attribution */}
            <div className="bg-white border border-outline-variant p-6 rounded-xl shadow-sm mb-8">
                <h3 className="font-headline-md text-headline-md text-primary mb-6">Model Feature Attribution (Why?)</h3>
                <div className="space-y-4">
                    {/* Factor 1 */}
                    <div className="flex items-center gap-6 p-4 hover:bg-surface-container-low transition-colors rounded-lg border border-transparent hover:border-outline-variant">
                        <span className="font-display-lg text-display-lg text-primary/10 w-12 text-center">01</span>
                        <div className="flex-1">
                            <div className="flex justify-between items-end mb-2">
                                <span className="font-label-md text-label-md text-primary">Voltage (Bioelectric Potential)</span>
                                <span className="font-data-mono text-data-mono text-secondary">Impact ({data?.featureImportance?.voltage ? Math.round(data.featureImportance.voltage * 100) : 0}%)</span>
                            </div>
                            <div className="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
                                <div className="h-full bg-secondary rounded-full" style={{ width: `${data?.featureImportance?.voltage ? Math.round(data.featureImportance.voltage * 100) : 0}%` }}></div>
                            </div>
                        </div>
                        <span className="material-symbols-outlined text-error">trending_up</span>
                    </div>
                    {/* Factor 2 */}
                    <div className="flex items-center gap-6 p-4 hover:bg-surface-container-low transition-colors rounded-lg border border-transparent hover:border-outline-variant">
                        <span className="font-display-lg text-display-lg text-primary/10 w-12 text-center">02</span>
                        <div className="flex-1">
                            <div className="flex justify-between items-end mb-2">
                                <span className="font-label-md text-label-md text-primary">Soil Moisture Concentration</span>
                                <span className="font-data-mono text-data-mono text-secondary">Impact ({data?.featureImportance?.moisture ? Math.round(data.featureImportance.moisture * 100) : 0}%)</span>
                            </div>
                            <div className="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
                                <div className="h-full bg-secondary rounded-full" style={{ width: `${data?.featureImportance?.moisture ? Math.round(data.featureImportance.moisture * 100) : 0}%` }}></div>
                            </div>
                        </div>
                        <span className="material-symbols-outlined text-error">trending_up</span>
                    </div>
                    {/* Factor 3 */}
                    <div className="flex items-center gap-6 p-4 hover:bg-surface-container-low transition-colors rounded-lg border border-transparent hover:border-outline-variant">
                        <span className="font-display-lg text-display-lg text-primary/10 w-12 text-center">03</span>
                        <div className="flex-1">
                            <div className="flex justify-between items-end mb-2">
                                <span className="font-label-md text-label-md text-primary">Ambient Temperature</span>
                                <span className="font-data-mono text-data-mono text-on-surface-variant">Impact ({data?.featureImportance?.temperature ? Math.round(data.featureImportance.temperature * 100) : 0}%)</span>
                            </div>
                            <div className="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
                                <div className="h-full bg-outline-variant rounded-full" style={{ width: `${data?.featureImportance?.temperature ? Math.round(data.featureImportance.temperature * 100) : 0}%` }}></div>
                            </div>
                        </div>
                        <span className="material-symbols-outlined text-on-secondary-container">horizontal_rule</span>
                    </div>
                </div>
            </div>
            {/* Visualization Section */}
            <div className="bg-primary text-white p-8 rounded-xl relative overflow-hidden min-h-[300px] flex items-center">
                <div className="md:w-1/2 relative z-10">
                    <h3 className="font-headline-lg text-headline-lg mb-4">Scientific Field Context</h3>
                    <p className="font-body-lg text-body-lg text-primary-fixed-dim mb-6">Visualizing real-time anaerobic fermentation risk across sub-surface rice paddies. Our AI model maps sensor drift directly to methane flux rates.</p>
                    <button className="bg-secondary-container text-on-secondary-container px-6 py-3 rounded-lg font-label-md text-label-md hover:bg-white transition-colors active:scale-95">View Detailed Heatmap</button>
                </div>
                <div className="absolute right-0 top-0 h-full w-full md:w-1/2 opacity-30 pointer-events-none md:opacity-100">
                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC9sFjL8PRQ7pHCzwzD0mI9L86asgNeCQEisLexraUVp_lcsUuwxkZ5euDhq5TheXPoHXa_ZWTeZ8wJGhv3a_m9RcED29dQYjTM9zJxZLa2SdI1quEobOk82NFmIB4E3RKpysnjiDs1_HlYlrqNQjuxmn4RuW2g3zo7p74CkTakxAfSL367bJzG0X4JIaOZ4su_g00jS6fCKazuPI8mFg9PIoRM37VsNzrFMNcQqXUPxVJzRGKUptx7yfDX9HCW7aOQ7gLL6iA0NcjP')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                </div>
            </div>
        </div>
    </div>
  )
}
