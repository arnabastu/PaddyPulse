import { useState, useEffect } from 'react'
import { getFieldMonitoring } from '../services/api'

export default function FieldMonitoring() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getFieldMonitoring()
        setData(response.data)
      } catch (error) {
        console.error("Failed to fetch field monitoring data:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) {
    return <div className="p-6 text-center text-on-surface">Loading Field Data...</div>
  }

  return (
    <div id="field-monitoring" className="page-content active">
      {/* TopAppBar */}
      <div className="bg-white border-b border-outline-variant px-6 py-4 flex items-center justify-between sticky top-0 z-40">
        <h2 className="font-headline-md text-headline-md text-primary">Field Monitoring</h2>
        <button className="p-2 hover:bg-surface-container-low rounded transition-colors">
          <span className="material-symbols-outlined text-on-surface">notifications</span>
        </button>
      </div>
      <div className="flex-1 p-6">
        {/* Field Selection */}
        <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
          <button className="px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full font-label-md whitespace-nowrap">Field A</button>
          <button className="px-4 py-2 bg-surface-container text-on-surface rounded-full font-label-md whitespace-nowrap">Field B</button>
          <button className="px-4 py-2 bg-surface-container text-on-surface rounded-full font-label-md whitespace-nowrap">Field C</button>
        </div>
        {/* Sensor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter mb-gutter">
          {/* Soil Moisture Card */}
          <div className="relative bg-white border border-outline-variant p-6 rounded-lg transition-all hover:shadow-[0px_4px_12px_rgba(27,67,50,0.06)] overflow-hidden">
            <div className="status-stripe bg-secondary absolute left-0 top-0 h-full w-1"></div>
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-label-md text-on-surface-variant uppercase tracking-wider mb-1">Soil Moisture</p>
                <h3 className="font-headline-lg text-headline-lg text-primary">{data?.moisture || 0}%</h3>
              </div>
              <span className="bg-secondary-container text-on-secondary-container px-2 py-1 rounded text-[12px] font-bold">{data?.sensorStatus?.toUpperCase() || 'UNKNOWN'}</span>
            </div>
            <div className="h-16 w-full mb-6">
              <div className="flex items-end h-full gap-1">
                <div className="flex-1 bg-secondary/20 h-[70%] rounded-t-sm"></div>
                <div className="flex-1 bg-secondary/20 h-[72%] rounded-t-sm"></div>
                <div className="flex-1 bg-secondary/20 h-[71%] rounded-t-sm"></div>
                <div className="flex-1 bg-secondary/20 h-[73%] rounded-t-sm"></div>
                <div className="flex-1 bg-secondary/20 h-[75%] rounded-t-sm"></div>
                <div className="flex-1 bg-secondary/20 h-[72%] rounded-t-sm"></div>
                <div className="flex-1 bg-secondary/20 h-[70%] rounded-t-sm"></div>
                <div className="flex-1 bg-secondary h-[72%] rounded-t-sm"></div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 border-t border-outline-variant pt-4">
              <div>
                <p className="text-[10px] text-outline font-bold uppercase">Min</p>
                <p className="font-data-mono text-data-mono text-primary">65%</p>
              </div>
              <div>
                <p className="text-[10px] text-outline font-bold uppercase">Max</p>
                <p className="font-data-mono text-data-mono text-primary">78%</p>
              </div>
              <div>
                <p className="text-[10px] text-outline font-bold uppercase">Avg</p>
                <p className="font-data-mono text-data-mono text-primary">71.5%</p>
              </div>
            </div>
          </div>
          {/* Temperature Card */}
          <div className="relative bg-white border border-outline-variant p-6 rounded-lg transition-all hover:shadow-[0px_4px_12px_rgba(27,67,50,0.06)] overflow-hidden">
            <div className="status-stripe bg-secondary absolute left-0 top-0 h-full w-1"></div>
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-label-md text-on-surface-variant uppercase tracking-wider mb-1">Temperature</p>
                <h3 className="font-headline-lg text-headline-lg text-primary">{data?.temperature || 0}°C</h3>
              </div>

              <span className="bg-secondary-container text-on-secondary-container px-2 py-1 rounded text-[12px] font-bold">NORMAL</span>
            </div>
            <div className="h-16 w-full mb-6">
              <div className="flex items-end h-full gap-1">
                <div className="flex-1 bg-secondary/20 h-[60%] rounded-t-sm"></div>
                <div className="flex-1 bg-secondary/20 h-[65%] rounded-t-sm"></div>
                <div className="flex-1 bg-secondary/20 h-[70%] rounded-t-sm"></div>
                <div className="flex-1 bg-secondary/20 h-[75%] rounded-t-sm"></div>
                <div className="flex-1 bg-secondary/20 h-[72%] rounded-t-sm"></div>
                <div className="flex-1 bg-secondary/20 h-[68%] rounded-t-sm"></div>
                <div className="flex-1 bg-secondary/20 h-[65%] rounded-t-sm"></div>
                <div className="flex-1 bg-secondary h-[28.5%] rounded-t-sm"></div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 border-t border-outline-variant pt-4">
              <div>
                <p className="text-[10px] text-outline font-bold uppercase">Min</p>
                <p className="font-data-mono text-data-mono text-primary">22°C</p>
              </div>
              <div>
                <p className="text-[10px] text-outline font-bold uppercase">Max</p>
                <p className="font-data-mono text-data-mono text-primary">31°C</p>
              </div>
              <div>
                <p className="text-[10px] text-outline font-bold uppercase">Avg</p>
                <p className="font-data-mono text-data-mono text-primary">27.2°C</p>
              </div>
            </div>
          </div>
          {/* Humidity Card */}
          <div className="relative bg-white border border-outline-variant p-6 rounded-lg transition-all hover:shadow-[0px_4px_12px_rgba(27,67,50,0.06)] overflow-hidden">
            <div className="status-stripe bg-secondary absolute left-0 top-0 h-full w-1"></div>
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-label-md text-on-surface-variant uppercase tracking-wider mb-1">Humidity</p>
                <h3 className="font-headline-lg text-headline-lg text-primary">68.5%</h3>
              </div>
              <span className="bg-secondary-container text-on-secondary-container px-2 py-1 rounded text-[12px] font-bold">OPTIMAL</span>
            </div>
            <div className="h-16 w-full mb-6">
              <div className="flex items-end h-full gap-1">
                <div className="flex-1 bg-secondary/20 h-[68%] rounded-t-sm"></div>
                <div className="flex-1 bg-secondary/20 h-[70%] rounded-t-sm"></div>
                <div className="flex-1 bg-secondary/20 h-[69%] rounded-t-sm"></div>
                <div className="flex-1 bg-secondary/20 h-[71%] rounded-t-sm"></div>
                <div className="flex-1 bg-secondary/20 h-[72%] rounded-t-sm"></div>
                <div className="flex-1 bg-secondary/20 h-[70%] rounded-t-sm"></div>
                <div className="flex-1 bg-secondary/20 h-[69%] rounded-t-sm"></div>
                <div className="flex-1 bg-secondary h-[68.5%] rounded-t-sm"></div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 border-t border-outline-variant pt-4">
              <div>
                <p className="text-[10px] text-outline font-bold uppercase">Min</p>
                <p className="font-data-mono text-data-mono text-primary">62%</p>
              </div>
              <div>
                <p className="text-[10px] text-outline font-bold uppercase">Max</p>
                <p className="font-data-mono text-data-mono text-primary">74%</p>
              </div>
              <div>
                <p className="text-[10px] text-outline font-bold uppercase">Avg</p>
                <p className="font-data-mono text-data-mono text-primary">69.2%</p>
              </div>
            </div>
          </div>
          {/* Voltage Card */}
          <div className="relative bg-white border border-outline-variant p-6 rounded-lg transition-all hover:shadow-[0px_4px_12px_rgba(27,67,50,0.06)] overflow-hidden">
            <div className={`status-stripe ${data?.battery < 20 ? 'bg-error' : 'bg-primary'} absolute left-0 top-0 h-full w-1`}></div>
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-label-md text-on-surface-variant uppercase tracking-wider mb-1">Voltage</p>
                <h3 className="font-headline-lg text-headline-lg text-primary">{data?.voltage || 0}V</h3>
              </div>
              <span className={`${data?.battery < 20 ? 'bg-error-container text-on-error-container' : 'bg-primary-container text-on-primary-container'} px-2 py-1 rounded text-[12px] font-bold`}>{data?.battery || 0}% BATT</span>
            </div>
            <div className="h-16 w-full mb-6">

              <div className="flex items-end h-full gap-1">
                <div className="flex-1 bg-error/20 h-[80%] rounded-t-sm"></div>
                <div className="flex-1 bg-error/20 h-[75%] rounded-t-sm"></div>
                <div className="flex-1 bg-error/20 h-[70%] rounded-t-sm"></div>
                <div className="flex-1 bg-error/20 h-[65%] rounded-t-sm"></div>
                <div className="flex-1 bg-error/20 h-[60%] rounded-t-sm"></div>
                <div className="flex-1 bg-error/20 h-[50%] rounded-t-sm"></div>
                <div className="flex-1 bg-error/20 h-[45%] rounded-t-sm"></div>
                <div className="flex-1 bg-error h-[40%] rounded-t-sm"></div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 border-t border-outline-variant pt-4">
              <div>
                <p className="text-[10px] text-outline font-bold uppercase">Min</p>
                <p className="font-data-mono text-data-mono text-primary">3.1V</p>
              </div>
              <div>
                <p className="text-[10px] text-outline font-bold uppercase">Max</p>
                <p className="font-data-mono text-data-mono text-primary">4.2V</p>
              </div>
              <div>
                <p className="text-[10px] text-outline font-bold uppercase">Avg</p>
                <p className="font-data-mono text-data-mono text-primary">3.8V</p>
              </div>
            </div>
          </div>
          {/* Add Sensor Card */}
          <div className="border-2 border-dashed border-outline-variant rounded-lg p-6 flex flex-col items-center justify-center text-on-surface-variant hover:border-primary/40 hover:bg-surface-container-low transition-all cursor-pointer group">
            <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-primary">add</span>
            </div>
            <p className="font-label-md text-label-md">Add Sensor Node</p>
            <p className="text-[12px] opacity-60">Provision new field hardware</p>
          </div>
        </div>
        {/* Charts Section */}
        <section className="mt-gutter">
          <div className="bg-white border border-outline-variant rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-headline-md text-headline-md font-bold text-primary">Temporal Correlation Analysis</h3>
              <div className="flex gap-2">
                <button className="text-label-md font-label-md text-on-surface-variant hover:text-primary">Export CSV</button>
                <button className="text-label-md font-label-md text-on-surface-variant hover:text-primary">Export PNG</button>
              </div>
            </div>
            <div className="w-full aspect-[21/9] bg-surface-container-lowest border border-outline-variant rounded relative flex items-center justify-center">
              <svg className="w-full h-full p-4" preserveAspectRatio="none" viewBox="0 0 1000 300">
                <path d="M0 50 L1000 50 M0 100 L1000 100 M0 150 L1000 150 M0 200 L1000 200 M0 250 L1000 250" stroke="#D8E3DE" strokeDasharray="4 4" strokeWidth="1"></path>
                <path d="M0 200 Q 100 180, 200 190 T 400 150 T 600 170 T 800 120 T 1000 140" fill="none" stroke="#52B788" strokeWidth="3"></path>
                <path d="M0 100 Q 150 120, 300 110 T 500 140 T 750 100 T 1000 120" fill="none" stroke="#006c48" strokeWidth="2"></path>
                <circle cx="800" cy="120" fill="#1B4332" r="4"></circle>
              </svg>
              <div className="absolute top-4 left-4 flex gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-secondary"></span>
                  <span className="text-[12px] font-bold text-primary uppercase">Soil Moisture (%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-primary"></span>
                  <span className="text-[12px] font-bold text-primary uppercase">Temp (°C)</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
