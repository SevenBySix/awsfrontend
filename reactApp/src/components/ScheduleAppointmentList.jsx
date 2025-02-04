import ListItem from "./ListItem"

export default function ScheduleAppointmentList(appointments) {
  return (
    <ul>
      {appointments.map((item) => (<ListItem key={item.id} item={item}/>))}
    </ul>
  )
}
