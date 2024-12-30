
import styles from './HomePage.module.css'
import ButtonNavLink from '../components/ButtonNavLink';


export default function HomePage() {
  return (
   <div className={styles.container}>
      <nav className={styles.navbar}>
        <div id={styles.logo}><h2>🐕Veterinarian Web App</h2></div>

        <ButtonNavLink to="/signup" id={styles.scheduleButton} color="orange">Schedule An Appointment➡</ButtonNavLink>
      </nav>

      <div className={styles.welcome}>
        <h1>Welcome To Our Page!!</h1>
      </div>
   </div>
  );
}
