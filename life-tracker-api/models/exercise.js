const db = require("../db")
const { validateFields } = require("../utils/validate");


class Exercise {
  static async listExercises({ user }) {
    if (!user) {
      throw new UnauthorizedError(`No user logged in.`)
    }

    const results = await db.query(`
      SELECT * FROM exercise
      WHERE user_id = $1
    `, [user.id]
    )
    return results.rows
  }
    static async create({ exercise, user }) {
      const { name, duration, intensity, category } = exercise;
      try {
        validateFields({
          required: ["name", "duration", "intensity", "category"],
          obj: exercise,
          location: "exercise create",
        });
      } catch (err) {
        throw err;
      }
      const result = await db.query(
        `
          INSERT INTO exercise (name, duration, intensity, category, user_id)
          VALUES ($1, $2, $3, $4, $5)
          RETURNING id, name, duration, category, intensity, user_id;
          `,
        [name, duration, intensity, category, user.id]
      );
      return result.rows[0];
    }
    /** Fetch total exercise time */
  static async listTotalExerciseTime({ user }) {
    if (!user) {
      throw new UnauthorizedError(`No user logged in.`)
    }

    const results = await db.query(`
      SELECT SUM(duration) as "totalTime" FROM exercise
      WHERE user_id = $1
    `, [user.id]
    )
    return results.rows[0]
  }
  }
  module.exports = Exercise