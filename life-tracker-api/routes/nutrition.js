const express = require("express")
const User = require("../models/user")
const { createUserJwt } = require("../utils/tokens")
const security = require("../middleware/security")
const router = express.Router()

router.get("/", security.requireAuthenticatedUser, async (req, res, next) => {
    try {
      //list of Exercise postings
      const exercise = await Exercise.listPosts()
      return res.status(200).json({ exercise })
    } catch (err) {
      next(err)
    }
  })

module.exports = router