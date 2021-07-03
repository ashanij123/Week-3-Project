import "./Nutrition.css"
import NotAllowed from "../NotAllowed/NotAllowed"

export default function Nutrition({user})
{if (!user){
    return <NotAllowed />
}
    return (
    <div className="nutrition">
        <div className="header"><h9>Nutrition</h9></div>
        <div className="subheader">Overview</div>
        <div className="notfound"><h8>Nothing here yet.</h8></div></div>
    )}