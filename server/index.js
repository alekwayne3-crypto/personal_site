import express from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

app.post('/api/contact', (req, res) => {
  const { name, email, phone, service, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address.' })
  }

  console.log('\n--- New Quote Request ---')
  console.log(`Name:    ${name}`)
  console.log(`Email:   ${email}`)
  console.log(`Phone:   ${phone || 'Not provided'}`)
  console.log(`Service: ${service || 'Not specified'}`)
  console.log(`Message: ${message}`)
  console.log('-------------------------\n')

  // In production: send email via nodemailer or similar
  res.json({ success: true, message: "Thank you! We'll be in touch within 24 hours." })
})

app.get('/api/health', (_req, res) => res.json({ status: 'ok' }))

app.listen(PORT, () => {
  console.log(`ShineBright server running on http://localhost:${PORT}`)
})
