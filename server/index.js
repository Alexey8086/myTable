const express = require('express')
const cors = require('cors')
const config = require('./config')
const router = require('./routes')

const PORT = config.port || 5000

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api', router)

const init = async () => {
  try {
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
  } catch (e) {
    console.error('INIT APPLICATION ERROR:', e)
  }
}

init ()