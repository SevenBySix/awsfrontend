/* eslint-disable react/prop-types */
import ListItem from "./ListItem"

// eslint-disable-next-line react/prop-types
export default function ScheduleAppointmentList({appointments}) {
  return (
    <ul>
      {appointments.map((item) => (<ListItem key={item.id} item={item}/>))}
    </ul>
  )
}
