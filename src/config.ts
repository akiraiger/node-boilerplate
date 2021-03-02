import dotenv from 'dotenv'

dotenv.config()

const config = {
  env: process.env.ENV,
  port: process.env.PORT,
  secret: process.env.SECRET,
}

export default config
