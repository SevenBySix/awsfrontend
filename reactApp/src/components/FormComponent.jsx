import Label from "./Label"
/* eslint-disable react/prop-types */
export default function FormComponent({labeltext, typeOfInput, name}) {
  return (
    <div className="form-group">
      <Label text={labeltext}/>
      <input type={typeOfInput} name={name} />
  </div>
  )
}
