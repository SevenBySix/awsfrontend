import "./SubmitButton.css"

/* eslint-disable react/prop-types */
export default function SubmitButton({id, text}) {
  return (
    <button type="submit" id={id} >{text}</button>
  )
}
