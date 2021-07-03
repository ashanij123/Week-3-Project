// import { Link } from "react-router-dom"
// import Stars from "../Stars/Stars"
// import { formatRating, formatDate } from "../../utils/format"
import "./Post.css"

export default function Post({ exercise, user }) {
//   const userOwnsPost = user?.username && exercise?.user_id === user?.username

  return (
    <div className="Post">
      <div className="ExerciseCard">
        <div className="header1">
          <p className="name">{exercise.name}</p>
        </div>
        <div className="stats">
          <div className="stat">
            <p>Duration</p>
            <span>{exercise.duration}</span>
          </div>
          <div className="stat">
            <p>Intensity</p>
            <span>{exercise.intensity}</span>
          </div>
        </div>
        <div className="meta">
          <p className="category">{exercise.category}</p>
        </div>
      </div>
    </div>
  )
}