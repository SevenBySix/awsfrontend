import "./SubmitButton.css"

/* eslint-disable react/prop-types */
export default function SubmitButton(props) {
  return (
    <button type="submit" id={props.id}>{props.text}</button>
  )
}
