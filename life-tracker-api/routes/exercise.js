const express = require("express")
const User = require("../models/user")
const { createUserJwt } = require("../utils/tokens")
const security = require("../middleware/security")
const router = express.Router()
const Exercise = require("../models/exercise")


router.post("/create", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    //create a new Exercise posting
    const { user } = res.locals
    const exercise = await Exercise.create({ exercise: req.body, user })
    return res.status(201).json({ exercise })
  } catch (err) {
    next(err)
  }
})
router.get("/", security.requireAuthenticatedUser, async (req, res, next) => {
    try {
      //list of Exercise postings
      const user = res.locals.user
      const exercise = await Exercise.listExercises({ user })
      return res.status(200).json({ exercise })
    } catch (err) {
      next(err)
    }
  })

  router.get('/all', security.requireAuthenticatedUser, async (req, res, next) => {
    try {
      const user = res.locals.user
      const totalTime = await Exercise.listTotalExerciseTime({ user })
      return res.status(201).json( totalTime )
    } catch (err) {
      next(err)
    }
  })

module.exports = router