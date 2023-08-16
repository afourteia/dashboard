import express from 'express'
import KPI from '../models/KPI.js'
const router = express.Router()

router.get('/kpis', async (req, res) => {
  try {
    const kpis = await KPI.find()
    res.status(200).json(kpis)
    console.log('🚀 ~ file: kpi.js:9 ~ router.get ~ kpis:', kpis)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

export default router
