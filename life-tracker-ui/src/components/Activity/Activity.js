import { Link } from 'react-router-dom'
import "./Activity.css"
import NotAllowed from "../NotAllowed/NotAllowed"

export default function Activity({ user, setUser, totalExerciseTime = 0, avgCalories = 0, avgSleepTime = 0 })
{if (!user){
    return <NotAllowed />
}
    return (
    <div className="activity">
        <div className="header"><h9>Activity Feed</h9></div>
        <div className="Activity"> 
      <div className="activity-btns">
        <Link to='/exercise/create' className='exercise-btn'>Add Exercise</Link>
        <Link to="" className='nutrition-btn'>Add Nutrition</Link>
        <Link to='' className='sleep-btn'>Add Sleep</Link>
      </div>
      <div className='aty-section'>
        <div className='aty-card'>
          <div className='aty-stats'>
            <div>Total Exercise Time (minutes): <span>{totalExerciseTime}</span></div>
          </div>
        </div>
        <div className='aty-card'>
          <div className='aty-stats'>
            <div>Average Daily Calories: <span>{avgCalories}</span></div>
          </div>
        </div>
        <div className='aty-card'>
          <div className='aty-stats'>
            <div>Average Sleep Hours: <span>{avgSleepTime}</span></div>
          </div>
        </div>
      </div>
    </div>
  )
</div>
        
    )}