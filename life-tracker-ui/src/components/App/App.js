import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import axios from "axios"
import apiClient from "../../services/apiClient"
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import Signup from "../Signup/Signup"
import Login from "../Login/Login"
import NotFound from "../NotFound/NotFound"
import Exercise from "../Exercise/Exercise"
import Nutrition from "../Nutrition/Nutrition"
import Sleep from "../Sleep/Sleep"
import Activity from "../Activity/Activity"
import NewExercisePost from "../NewExercise/NewExercise"
import "./App.css"

export default function App() {
  const [user, setUser] = useState(null)
  const [exercises, setExercises] = useState([])
  const [error, setError] = useState(null)
  const [isFetching, setIsFetching] = useState(false)

  const [totalExerciseTime, setTotalExerciseTime] = useState(0)

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await apiClient.fetchUserFromToken()
      if (data) {
        setUser(data.user)
      }
    }

    const token = localStorage.getItem("life_tracker_token")
    if (token) {
      apiClient.setToken(token)
      fetchUser()
    }
  }, [])

  useEffect(() => {
    const fetchExercise = async () => {
      setIsFetching(true)

      const { data, error } = await apiClient.fetchExercises()
      if (data) {
        setExercises(data.exercise)
      }
      if (error) {
        setError(error)
      }

      setIsFetching(false)
    }

    fetchExercise()
  }, [user])

  
  useEffect(() => {
    const fetchExerciseTime = async () => {
      const { data, error } = await apiClient.fetchTotalExerciseTime()
      if (data?.totalTime) {
        setTotalExerciseTime(data.totalTime)
      }
      if (error) {
        setError((e) => ({ ...e, error }))
      }
    }
    fetchExerciseTime()
  }, [exercises, user, isFetching])


  const addExercise = (newExercise) => {
    setExercises((oldExercise) => [...oldExercise, newExercise])
  }

  // const updatePost = ({ postId, postUpdate }) => {
  //   setExercise((oldExercise) => {
  //     return oldExercise.map((post) => {
  //       if (post.id === Number(postId)) {
  //         return { ...post, ...postUpdate }
  //       }

  //       return post
  //     })
  //   })
  // }

  const handleLogout = async () => {
    await apiClient.logoutUser()
    setUser(null)
    setError(null)
  }
 console.log("user", user)
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar user={user} setUser={setUser} handleLogout={handleLogout} />
        <Routes>
          <Route
            path="/"
            element={<Home user={user} error={error} exercises={exercises} addExercise={addExercise} isFetching={isFetching} />}
          />
          <Route path="/login" element={<Login user={user} setUser={setUser} />} />
          <Route path="/register" element={<Signup user={user} setUser={setUser} />} />
          <Route path="/exercise" element={<Exercise user={user} exercises={exercises} />} />
          <Route path="/exercise/create" element={<NewExercisePost user={user} exercises={exercises} addExercise={addExercise} />} />
          <Route path="/nutrition" element={<Nutrition user={user} setUser={setUser} />} />
          <Route path="/sleep" element={<Sleep user={user} setUser={setUser} />} />
          <Route path="/Activity" element={<Activity user={user} setUser={setUser} totalExerciseTime={totalExerciseTime}/>} />
          <Route path="*" element={<NotFound user={user} error={error} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}