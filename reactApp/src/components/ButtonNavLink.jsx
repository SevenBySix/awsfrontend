/* eslint-disable react/prop-types */
import {NavLink} from "react-router-dom"
import "./ButtonNavLink.css"

export default function ButtonNavLink({to, id,text}) {
  return (
    <div>
        <NavLink to={to}><button id={id}>{text}</button></NavLink>
    </div>
  )
}
