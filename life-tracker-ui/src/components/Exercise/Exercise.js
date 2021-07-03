import Post from "../Post/Post"
import { Link } from "react-router-dom"
// import NewPostForm from "../NewExercise/NewExercise"
import "./Exercise.css"
import NotAllowed from "../NotAllowed/NotAllowed"
// import apiClient from "../../services/apiClient"

export default function Exercise({ user, exercises }){
    if (!user){
        return <NotAllowed />
    }
return (
    <div className="Exercise">
    <div className="exercise">
        <div className="header"><h9>Exercise</h9></div>
        <div className="subheader">Overview</div>
        {/* <div className="notfound"><h8>Nothing here yet.</h8></div> */}
        </div>
        <li className="button">
            <Link to="/exercise/create">Create New Exercise</Link>
          </li>
      <div className="feed">
        {exercises?.map((exercise) => (
        <Post exercise={exercise} key={exercise.id} user={user} />
        ))}
      </div>
    </div>
)}