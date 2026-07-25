import { useState, useEffect } from 'react'
import { getSensorData } from '../services/api'

export const useSensorData = (interval = 5000) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getSensorData()
        setData(response.data)
        setError(null)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
    const timer = setInterval(fetchData, interval)
    return () => clearInterval(timer)
  }, [interval])

  return { data, loading, error }
}
