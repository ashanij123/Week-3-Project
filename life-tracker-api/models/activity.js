  
const db = require('../db')
const { BadRequestError, UnauthorizedError } = require('../utils/errors')
const { validateFields } = require('../utils/validate')

const bcrypt = require("bcrypt")
const { BCRYPT_WORK_FACTOR } = require("../config")

class Activity {
  /** Fetch total exercise time */
  static async listTotalExerciseTime({ user }) {
    if (!user) {
      throw new UnauthorizedError(`No user logged in.`)
    }

    const results = await db.query(`
      SELECT SUM(duration) as "totalTime"
      FROM exercise
      WHERE user_id = (
        SELECT id FROM users WHERE username = $1
      );
    `, [user.username]
    )
    return results.rows[0]
  }

  /** Fetch a list of all exercises of an user */
  static async listExercises({ user }) {
    if (!user) {
      throw new UnauthorizedError(`No user logged in.`)
    }

    const results = await db.query(`
      SELECT id, user_id AS "userId", name, category, duration, intensity, date
      FROM exercise
      WHERE user_id = (
        SELECT id FROM users WHERE username = $1
      );
    `, [user.username]
    )
    return results.rows
  }

  /** Create an exercise into exercises table */
  static async createExercise({ exercise, user }) {
    const { name, duration, intensity } = exercise;
      try {
        validateFields({
          required: ["name", "duration", "intensity"],
          obj: exercise,
          location: "exercise create",
        });
      } catch (err) {
        throw err;
      }
      const result = await db.query(
        `
          INSERT INTO exercise (name, duration, intensity, user_id)
          VALUES ($1, $2, $3, $4)
          RETURNING id, name, duration, intensity, user_id;
          `,
        [name, duration, intensity, user.id]
      );
      return result.rows[0];
    }}

    const results = await db.query( 
        `
      INSERT INTO exercise (user_id, name, category, duration, intensity)
      VALUES ((SELECT id FROM users WHERE username = $1), $2, $3, $4, $5)
      RETURNING id,
                user_id AS "userId",
                name, 
                category,
                duration,
                intensity,
                date;
      `,
      [
        user.username,
        exercise.name,
        exercise.category,
        exercise.duration,
        exercise.intensity
      ]
    )
    return results.rows[0]
    
  
  module.exports = Activity
