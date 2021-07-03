// import phone from "../../assets/phone.svg"
import "./Hero.css"

export default function Hero() {
  return (
    <div className="Hero">
      <div className="content">
        <div className="intro">
          <h1>LifeTracker</h1>
          <p>
            Helping you take back control of your world.
          </p>
        </div>

        <div className="media">
        <img src={require('../../images/Wellness.png').default} height={324} width={430} alt="wellness"/>
        </div>
      </div>
    </div>
  )
}