import Label from "./Label"
import "./FormComponent.css"
/* eslint-disable react/prop-types */
export default function FormComponent({labeltext, typeOfInput, name}) {
  return (
    <div className="form-group">
      <div>
        <Label text={labeltext}/>
      </div>
      <div>
      <input type={typeOfInput} name={name} />
      </div>
  </div>
  )
}
