/* eslint-disable react/prop-types */
import {NavLink} from "react-router-dom"
import "./ButtonNavLink.css"

export default function ButtonNavLink(props) {
  return (
    <div>
        <NavLink to={props.to}><button id={props.id}>{props.text}</button></NavLink>
    </div>
  )
}
