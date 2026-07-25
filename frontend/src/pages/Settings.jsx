import { useState, useEffect } from 'react'
import { getSettings, updateSettings } from '../services/api'

export default function Settings() {
  const [data, setData] = useState({ fieldName: '', refreshInterval: 5, deviceStatus: 'Offline' })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getSettings()
        setData(response.data)
      } catch (error) {
        console.error("Failed to fetch settings:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const handleSave = async () => {
    setSaving(true)
    try {
      await updateSettings(data)
      alert("Settings saved successfully!")
    } catch (error) {
      console.error("Failed to save settings:", error)
      alert("Failed to save settings.")
    } finally {
      setSaving(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setData(prev => ({ ...prev, [name]: value }))
  }

  if (loading) {
    return <div className="p-6 text-center text-on-surface">Loading Settings...</div>
  }

  return (
    <div id="settings" className="page-content active">
        {/* TopAppBar */}
        <div className="bg-white border-b border-outline-variant px-6 py-4 flex items-center justify-between sticky top-0 z-40">
            <h2 className="font-headline-md text-headline-md text-primary">Settings</h2>
            <button className="p-2 hover:bg-surface-container-low rounded transition-colors">
                <span className="material-symbols-outlined text-on-surface">notifications</span>
            </button>
        </div>
        <div className="flex-1 p-6">
            {/* Account Settings */}
            <div className="bg-white border border-outline-variant rounded-lg p-6 card-shadow mb-gutter">
                <h4 className="font-headline-md text-primary mb-6">Account Settings</h4>
                <div className="space-y-4">
                    <div>
                        <label className="block font-label-md text-label-md text-on-surface mb-2">Full Name</label>
                        <input type="text" className="w-full px-4 py-2 border border-outline-variant rounded-lg font-body-md" defaultValue="Rajesh Kumar" />
                    </div>
                    <div>
                        <label className="block font-label-md text-label-md text-on-surface mb-2">Email</label>
                        <input type="email" className="w-full px-4 py-2 border border-outline-variant rounded-lg font-body-md" defaultValue="rajesh@paddyfarmer.com" />
                    </div>
                    <div>
                        <label className="block font-label-md text-label-md text-on-surface mb-2">Phone Number</label>
                        <input type="tel" className="w-full px-4 py-2 border border-outline-variant rounded-lg font-body-md" defaultValue="+91 98765 43210" />
                    </div>
                </div>
            </div>
            {/* Notification Settings */}
            <div className="bg-white border border-outline-variant rounded-lg p-6 card-shadow mb-gutter">
                <h4 className="font-headline-md text-primary mb-6">Notification Preferences</h4>
                <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 hover:bg-surface-container-low rounded transition-colors">
                        <span className="font-label-md text-on-surface">Critical Alerts</span>
                        <input type="checkbox" defaultChecked className="w-5 h-5 rounded" />
                    </div>
                    <div className="flex items-center justify-between p-3 hover:bg-surface-container-low rounded transition-colors">
                        <span className="font-label-md text-on-surface">Daily Summary</span>
                        <input type="checkbox" defaultChecked className="w-5 h-5 rounded" />
                    </div>
                    <div className="flex items-center justify-between p-3 hover:bg-surface-container-low rounded transition-colors">
                        <span className="font-label-md text-on-surface">Weekly Report</span>
                        <input type="checkbox" defaultChecked className="w-5 h-5 rounded" />
                    </div>
                    <div className="flex items-center justify-between p-3 hover:bg-surface-container-low rounded transition-colors">
                        <span className="font-label-md text-on-surface">Marketing Emails</span>
                        <input type="checkbox" className="w-5 h-5 rounded" />
                    </div>
                </div>
            </div>
            {/* Farm Settings */}
            <div className="bg-white border border-outline-variant rounded-lg p-6 card-shadow mb-gutter">
                <h4 className="font-headline-md text-primary mb-6">Farm Configuration</h4>
                <div className="space-y-4">
                    <div>
                        <label className="block font-label-md text-label-md text-on-surface mb-2">Farm Name (Field Name)</label>
                        <input type="text" name="fieldName" value={data.fieldName} onChange={handleChange} className="w-full px-4 py-2 border border-outline-variant rounded-lg font-body-md" />
                    </div>
                    <div>
                        <label className="block font-label-md text-label-md text-on-surface mb-2">Refresh Interval (minutes)</label>
                        <input type="number" name="refreshInterval" value={data.refreshInterval} onChange={handleChange} className="w-full px-4 py-2 border border-outline-variant rounded-lg font-body-md" />
                    </div>
                    <div>
                        <label className="block font-label-md text-label-md text-on-surface mb-2">Device Status</label>
                        <input type="text" disabled value={data.deviceStatus} className="w-full px-4 py-2 border border-outline-variant rounded-lg font-body-md bg-surface-container-low text-on-surface-variant" />
                    </div>
                </div>
            </div>
            {/* Action Buttons */}
            <div className="flex gap-4">
                <button onClick={handleSave} disabled={saving} className="flex-1 bg-secondary-container text-on-secondary-container px-6 py-3 rounded-lg font-label-md hover:bg-secondary transition-colors disabled:opacity-50">
                    {saving ? 'Saving...' : 'Save Changes'}
                </button>
                <button className="flex-1 bg-surface-container text-on-surface px-6 py-3 rounded-lg font-label-md hover:bg-surface-container-high transition-colors">
                    Cancel
                </button>
            </div>
        </div>
    </div>
  )
}
