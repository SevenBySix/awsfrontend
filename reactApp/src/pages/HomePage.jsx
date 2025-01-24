
import styles from './HomePage.module.css'
import ButtonNavLink from '../components/ButtonNavLink';

// Homepage component.  This is the page the user first goes to when pulling up the application
export default function HomePage() {
  return (
   <div className={styles.container}>
      <nav className={styles.navbar}>
        <div id={styles.logo}><h2>🐕Veterinarian Web App</h2></div>
        <div id={styles.buttonSection}>
          <ButtonNavLink to="/signup" id={styles.scheduleButton} color="orange">Sign Up</ButtonNavLink>
          <ButtonNavLink to="/login" id={styles.scheduleButton} color="red">Login</ButtonNavLink>
        </div>
      
      </nav>

      <div className={styles.welcome}>
        <h1>Welcome!! Sign up and Schedule An Appointment</h1>
      </div>
   </div>
  );
}
