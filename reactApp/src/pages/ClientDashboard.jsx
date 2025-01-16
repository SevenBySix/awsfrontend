import styles from "./ClientDashboard.module.css"
export default function ClientDashboard() {
  return (
    <div className={styles.container}>
      <h1>Client Dashboard</h1>

      <div className={styles.inner_container}>

          <div className={styles.schedule_appointments_container}>
            <div><h2>Your Scheduled Appointments</h2></div>
            <div>
              <ul>
                
              
              </ul>
            
            </div>
        </div>

        <div className={styles.past_appointments_container}>
        <div><h2>Your Past Appointments</h2></div>
        <div></div>
    </div>
      
      </div>
      
    
    </div>
  )
}
