const jwt = require("jsonwebtoken")
const { SECRET_KEY } = require("../config")
const { validateFields } = require("./validate")

const generateToken = (data) => jwt.sign(data, SECRET_KEY)

const createUserJwt = (creds) => {
  validateFields({ required: ["email"], obj: creds, location: "token generation" })

  const payload = {
    email: creds.email,
    id: creds.id,
    isAdmin: creds.isAdmin || false,
  }

  console.log("payload", payload)
  return generateToken(payload)
}

const validateToken = (token) => {
  try {
    const decoded = jwt.verify(token, SECRET_KEY)
    return decoded
  } catch (err) {
    return {}
  }
}

module.exports = {
  generateToken,
  validateToken,
  createUserJwt,
}