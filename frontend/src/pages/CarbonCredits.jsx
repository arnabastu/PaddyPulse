import { useState, useEffect } from 'react'
import { getCarbonCredits } from '../services/api'

export default function CarbonCredits() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCarbonCredits()
        setData(response.data)
      } catch (error) {
        console.error("Failed to fetch carbon credits data:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) {
    return <div className="p-6 text-center text-on-surface">Loading Carbon Data...</div>
  }

  return (
    <div id="carbon-credits" className="page-content active">
        {/* TopAppBar */}
        <div className="bg-white border-b border-outline-variant px-6 py-4 flex items-center justify-between sticky top-0 z-40">
            <h2 className="font-headline-md text-headline-md text-primary">Carbon Credits</h2>
            <button className="p-2 hover:bg-surface-container-low rounded transition-colors">
                <span className="material-symbols-outlined text-on-surface">notifications</span>
            </button>
        </div>
        <div className="flex-1 p-6">
            {/* Summary Header */}
            <div className="bg-primary text-white rounded-xl p-8 mb-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-64 h-64 bg-secondary rounded-full opacity-20 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="relative z-10 text-center md:text-left flex-1">
                    <p className="font-label-md text-primary-fixed-dim uppercase tracking-widest mb-2">Total Verified Reductions</p>
                    <h2 className="font-display-lg text-display-lg mb-2">{data?.co2eSaved || 0} tCO₂e</h2>
                    <p className="font-body-md text-primary-fixed-dim">Methane Saved: {data?.methaneSaved || 0} t</p>
                </div>
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                    <div className="text-center">
                        <p className="font-label-md text-primary-fixed-dim uppercase tracking-widest mb-1">Earned Credits</p>
                        <p className="font-display-md text-display-md">{data?.estimatedCredits || 0}</p>
                    </div>
                    <div className="text-center">
                        <p className="font-label-md text-primary-fixed-dim uppercase tracking-widest mb-1">Est. Income</p>
                        <p className="font-display-md text-display-md">${data?.estimatedIncome || 0}</p>
                    </div>
                    <div className="flex flex-col gap-3 min-w-[150px] ml-4">
                        <button className="w-full bg-secondary-container text-on-secondary-container px-6 py-2 rounded-lg font-label-md hover:bg-white transition-colors">Sell Credits</button>
                    </div>
                </div>
            </div>
            
            {/* Credit Generation Chart Area */}
            <div className="bg-white border border-outline-variant rounded-lg p-6 mb-8 card-shadow">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="font-headline-md text-primary">Credit Generation Over Time</h3>
                    <select className="bg-surface-container border-none rounded-md font-label-md text-on-surface px-4 py-2">
                        <option>2024 Season</option>
                        <option>2023 Season</option>
                    </select>
                </div>
                <div className="h-64 bg-surface-container-lowest border border-outline-variant/50 rounded flex items-center justify-center relative overflow-hidden">
                     {/* Simplified Chart Representation */}
                     <svg className="w-full h-full p-4" preserveAspectRatio="none" viewBox="0 0 1000 200">
                        {/* Grid */}
                        <path d="M0 40 L1000 40 M0 80 L1000 80 M0 120 L1000 120 M0 160 L1000 160" stroke="#ebefed" strokeWidth="1"></path>
                        {/* Area */}
                        <path d="M0 200 L0 180 Q 200 170, 400 120 T 800 60 L1000 40 L1000 200 Z" fill="#c1ecd4" opacity="0.3"></path>
                        {/* Line */}
                        <path d="M0 180 Q 200 170, 400 120 T 800 60 L1000 40" fill="none" stroke="#006c48" strokeWidth="4" strokeLinecap="round"></path>
                    </svg>
                </div>
            </div>

            {/* Ledger Table */}
            <div className="bg-white border border-outline-variant rounded-lg overflow-hidden card-shadow mb-8">
                <div className="px-6 py-4 border-b border-outline-variant bg-surface-container-low">
                    <h3 className="font-headline-md text-primary">Recent Transactions</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-outline-variant">
                                <th className="p-4 font-label-md text-on-surface-variant uppercase text-sm">Date</th>
                                <th className="p-4 font-label-md text-on-surface-variant uppercase text-sm">Type</th>
                                <th className="p-4 font-label-md text-on-surface-variant uppercase text-sm">Amount (tCO₂e)</th>
                                <th className="p-4 font-label-md text-on-surface-variant uppercase text-sm">Status</th>
                            </tr>
                        </thead>
                        <tbody className="font-body-md text-on-surface divide-y divide-outline-variant/50">
                            <tr className="hover:bg-surface-container-lowest transition-colors">
                                <td className="p-4 font-data-mono">2024-05-12</td>
                                <td className="p-4">Verification Audit</td>
                                <td className="p-4 font-data-mono text-secondary">+145.00</td>
                                <td className="p-4"><span className="bg-secondary-container text-on-secondary-container px-2 py-1 rounded text-xs font-bold">VERIFIED</span></td>
                            </tr>
                            <tr className="hover:bg-surface-container-lowest transition-colors">
                                <td className="p-4 font-data-mono">2024-03-28</td>
                                <td className="p-4">Credit Sale (Corp Buyer)</td>
                                <td className="p-4 font-data-mono text-error">-50.00</td>
                                <td className="p-4"><span className="bg-surface-dim text-on-surface px-2 py-1 rounded text-xs font-bold">SETTLED</span></td>
                            </tr>
                            <tr className="hover:bg-surface-container-lowest transition-colors">
                                <td className="p-4 font-data-mono">2024-01-15</td>
                                <td className="p-4">Verification Audit</td>
                                <td className="p-4 font-data-mono text-secondary">+320.50</td>
                                <td className="p-4"><span className="bg-secondary-container text-on-secondary-container px-2 py-1 rounded text-xs font-bold">VERIFIED</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Verification Status */}
            <div className="bg-primary-container text-on-primary-container rounded-lg p-6 border-l-4 border-secondary">
                <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                    <div>
                        <h4 className="font-headline-md mb-2">Verification Status</h4>
                        <p className="font-body-md">All credits have been independently verified and certified by Gold Standard Foundation. The next audit is scheduled for December 15, 2024.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
