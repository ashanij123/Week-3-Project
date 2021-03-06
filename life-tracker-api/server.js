const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const { PORT } = require("./config")
const { NotFoundError } = require("./utils/errors")
const authRouter = require('./routes/auth')
const exercise = require('./routes/exercise')
const security = require('./middleware/security')

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan("tiny"))

app.use(security.extractUserFromJwt)
app.use('/auth', authRouter)
app.use('/exercise', exercise)

app.use((req, res, next) => {
  return next(new NotFoundError())
})

app.use((err, req, res, next) => {
  const status = err.status || 500
  const message = err.message

  return res.status(status).json({
    error: { message, status },
  })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})