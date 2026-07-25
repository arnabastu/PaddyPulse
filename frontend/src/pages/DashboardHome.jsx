import { useState, useEffect } from 'react'
import { getDashboard } from '../services/api'

export default function DashboardHome() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDashboard()
        setData(response.data)
      } catch (error) {
        console.error("Failed to fetch dashboard data:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) {
    return <div className="p-6 text-center text-on-surface">Loading Dashboard...</div>
  }

  return (
    <div id="dashboard" className="page-content active">
      {/* TopAppBar */}
      <div className="bg-white border-b border-outline-variant px-6 py-4 flex items-center justify-between sticky top-0 z-40">
        <h2 className="font-headline-md text-headline-md text-primary">Dashboard</h2>
        <button className="p-2 hover:bg-surface-container-low rounded transition-colors">
          <span className="material-symbols-outlined text-on-surface">notifications</span>
        </button>
      </div>
      <div className="flex-1 p-6 space-y-gutter">
        {/* Key Metric Card */}
        <section className="bg-white border border-outline-variant rounded-lg p-6 card-shadow">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-on-surface-variant font-label-md text-label-md uppercase mb-2">Overall System Health</p>
              <h3 className="font-headline-lg text-headline-lg text-primary">{data?.fieldHealth || 0}%</h3>
              <p className="text-on-surface-variant font-body-md text-body-md mt-1">Last Updated: {data?.lastUpdated ? new Date(data.lastUpdated).toLocaleTimeString() : 'N/A'}</p>
            </div>
            <div className="flex-1 flex items-end gap-1">
              <div className="w-full h-8 bg-secondary/10 rounded-sm relative overflow-hidden">
                <svg className="w-full h-full preserve-3d" viewBox="0 0 100 40">
                  <path d="M0 35 L10 32 L20 38 L30 25 L40 28 L50 15 L60 20 L70 10 L80 15 L90 5 L100 8" fill="none" stroke="#006c48" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
                </svg>
              </div>
            </div>
            <p className="font-data-mono text-primary text-xl mt-2">{data?.voltage || '0.00'} V</p>
          </div>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {/* Sensor Card: Soil Moisture */}
          <div className="bg-white border border-outline-variant rounded-lg flex h-32 overflow-hidden card-shadow group">
            <div className="status-stripe bg-secondary h-full"></div>
            <div className="flex-1 p-6 flex items-center justify-between">
              <div>
                <p className="text-on-surface-variant font-label-md text-label-md uppercase mb-1">Soil Moisture</p>
                <h5 className="font-display-lg text-primary text-[32px]">{data?.moisture || 0}%</h5>
              </div>
              <span className="material-symbols-outlined text-secondary text-[40px] opacity-20 group-hover:opacity-100 transition-opacity">humidity_mid</span>
            </div>
          </div>
          {/* Sensor Card: Temperature */}
          <div className="bg-white border border-outline-variant rounded-lg flex h-32 overflow-hidden card-shadow group">
            <div className="status-stripe bg-secondary h-full"></div>
            <div className="flex-1 p-6 flex items-center justify-between">
              <div>
                <p className="text-on-surface-variant font-label-md text-label-md uppercase mb-1">Temperature</p>
                <h5 className="font-display-lg text-primary text-[32px]">{data?.temperature || 0}°C</h5>
              </div>
              <span className="material-symbols-outlined text-secondary text-[40px] opacity-20 group-hover:opacity-100 transition-opacity">device_thermostat</span>
            </div>
          </div>
          {/* Sensor Card: Methane Risk */}
          <div className="bg-white border border-outline-variant rounded-lg flex h-32 overflow-hidden card-shadow group">
            <div className={`status-stripe ${data?.methaneRisk === 'High' ? 'bg-error' : 'bg-primary'} h-full`}></div>
            <div className="flex-1 p-6 flex items-center justify-between">
              <div>
                <p className="text-on-surface-variant font-label-md text-label-md uppercase mb-1">Methane Risk</p>
                <h5 className={`font-display-lg ${data?.methaneRisk === 'High' ? 'text-error' : 'text-primary'} text-[32px]`}>{data?.methaneRisk || 'Unknown'}</h5>
              </div>
              <span className="material-symbols-outlined text-primary text-[40px] opacity-20 group-hover:opacity-100 transition-opacity">co2</span>
            </div>
          </div>
          {/* Sensor Card: System Voltage */}
          <div className="bg-white border border-outline-variant rounded-lg flex h-32 overflow-hidden card-shadow group">
            <div className="status-stripe bg-secondary h-full"></div>
            <div className="flex-1 p-6 flex items-center justify-between">
              <div>
                <p className="text-on-surface-variant font-label-md text-label-md uppercase mb-1">Voltage</p>
                <h5 className="font-display-lg text-primary text-[32px]">{data?.voltage || 0} V</h5>
              </div>
              <span className="material-symbols-outlined text-secondary text-[40px] opacity-20 group-hover:opacity-100 transition-opacity">bolt</span>
            </div>
          </div>
        </div>
        {/* Asymmetric Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
          {/* Alerts Section */}
          <div className="lg:col-span-1 bg-white border border-outline-variant rounded-lg p-6 card-shadow flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h4 className="font-headline-md text-primary">System Alerts</h4>
              <span className={`material-symbols-outlined ${data?.methaneRisk === 'High' ? 'text-error' : 'text-primary'}`}>notifications_active</span>
            </div>
            <div className="space-y-4 flex-1">
              {data?.methaneRisk === 'High' && (
                <div className="flex gap-4 p-4 rounded-lg bg-error-container/20 border-l-4 border-error">
                  <span className="material-symbols-outlined text-error mt-1">warning</span>
                  <div>
                    <p className="font-label-md text-on-error-container">High Methane Risk</p>
                    <p className="text-on-surface-variant font-body-md text-sm">Confidence: {data?.confidence}%</p>
                  </div>
                </div>
              )}
              {data?.recommendation && (
                <div className="flex gap-4 p-4 rounded-lg bg-secondary-container/10 border-l-4 border-secondary">
                  <span className="material-symbols-outlined text-secondary mt-1">eco</span>
                  <div>
                    <p className="font-label-md text-secondary">AI Recommendation</p>
                    <p className="text-on-surface-variant font-body-md text-sm">{data?.recommendation}</p>
                  </div>
                </div>
              )}
            </div>
            <button className="mt-6 w-full text-center py-2 font-label-md text-primary hover:underline transition-all">View All Alerts</button>
          </div>
          {/* Field Visual Analysis */}
          <div className="lg:col-span-2 bg-white border border-outline-variant rounded-lg overflow-hidden card-shadow relative">
            <div className="absolute top-6 left-6 z-10 flex gap-2">
              <span className="bg-white/90 backdrop-blur-sm border border-outline-variant px-3 py-1 rounded-full font-label-md text-label-md text-primary flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                Live Feed - Sector A
              </span>
            </div>
            <div className="h-full min-h-[400px] bg-surface-variant group">
              <div className="w-full h-full" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCl69X6qa6UkB1wDqGM-D-c_R-4Oz_imI0o-k2J3SWLTxDQsOUUM6MFZm1QomB6fBPrfrsWRCu1_D-w_ndsEK_Ewv0bc2LjE8-hYWsklrrwbIPW4wJs7wjkAg7ZMuQGiKr0OBMLzE511RZiqRDxbnhTrmXH_shzr4I2YiAl-K1uNyrSbYFGWnAtkYEXYisWyjArEsR4oAu20zvoXoRPbu64Wzo0Ul3n4vexOsM-ORrSpdzZivtB9mtDrIv1OiNXQKFJiCWyDIRigKXT')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              {/* UI Overlay on Image */}
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-between">
                <div className="text-white">
                  <p className="font-label-md text-white/80">Satellite Overlay</p>
                  <p className="font-headline-md">Vegetation Index: 0.84 (Optimal)</p>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 bg-white/20 hover:bg-white/30 text-white rounded backdrop-blur-md transition-all">
                    <span className="material-symbols-outlined">zoom_in</span>
                  </button>
                  <button className="p-2 bg-white/20 hover:bg-white/30 text-white rounded backdrop-blur-md transition-all">
                    <span className="material-symbols-outlined">layers</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
