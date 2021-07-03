import { useState } from "react"
// import axios from "axios"
import apiClient from "../../services/apiClient"
// import NotAllowed from "../NotAllowed/NotAllowed"
import "./NewExercise.css"
 
 
export default function NewExercisePost({ user, addExercise }) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [form, setForm] = useState({
    name: "",
    duration: "",
    intensity: "",
    category: ""
  })
 
  const handleOnInputChange = (event) => {
    setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
  }
 
  const handleOnSubmit = async () => {
    setIsLoading(true)
 
    const { data, error } = await apiClient.createNewExercises({ name: form.name, duration: form.duration, intensity: form.intensity, category: form.category })
    if (data) {
      addExercise(data.exercise)
      setForm({ name: "", duration: "", intensity: "", category: "" })
    }
    if (error) {
      setError(error)
    }
 
    setIsLoading(false)
  }
  const renderForm = () => {
    // if (!user?.email) {
    //   return <NotAllowed />
    // }
    return (
      <div className="form">
        <div className="input-field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Type of Exercise"
            value={form.name}
            onChange={handleOnInputChange}
          />
        </div>
 
        <div className="input-field">
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            name="duration"
            placeholder="Duration"
            value={form.duration}
            onChange={handleOnInputChange}
          />
        </div>
 
        <div className="input-field">
          <label htmlFor="intensity">Intensity</label>
          <input
            type="number"
            name="intensity"
            placeholder="Intensity of Exercise"
            value={form.intensity}
            onChange={handleOnInputChange}
          />
        </div>
 
        <div className="input-field">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            name="category"
            placeholder="The category of your exercise"
            value={form.category}
            onChange={handleOnInputChange}
          />
        </div>
 
        <button className="btn" disabled={isLoading} onClick={handleOnSubmit}>
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </div>
    )
  }
 
  return (
    <div className="NewPostForm">
      <div className="card">
        <h2>Create a new post</h2>
 
        {Boolean(error) && <span className="error">{error}</span>}
 
        {renderForm()}
      </div>
    </div>
  )
}
