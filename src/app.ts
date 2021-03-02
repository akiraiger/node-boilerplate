import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'

import swaggerUi from 'swagger-ui-express'
import swaggerSpec from './swagger/swagger'

import routes from './routes'

const app = express()

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
)

const corsOptions = {
  origin: ['http://localhost:3000'],
  optionsSuccessStatus: 200,
}

app.use(cors(corsOptions))
app.use(helmet())

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
})

app.use(limiter)

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
app.use('/api', routes)

export default app
