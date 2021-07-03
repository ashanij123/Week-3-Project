import "./Sleep.css"
import NotAllowed from "../NotAllowed/NotAllowed"

export default function Sleep({user})
{if (!user){
    return <NotAllowed />
}
    return (
    <div className="sleep">
        <div className="header"><h9>Sleep</h9></div>
        <div className="subheader">Overview</div>
        <div className="notfound"><h8>Nothing here yet.</h8></div></div>
    )}