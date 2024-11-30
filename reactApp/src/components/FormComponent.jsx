
/* eslint-disable react/prop-types */
export default function FormComponent(props) {
  return (
    <div className="form-group">
      <label>{props.labelName}</label>
      <input type={props.typeOfInput} name={props.name} />
  </div>
  )
}
