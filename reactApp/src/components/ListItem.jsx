/* eslint-disable react/prop-types */
import styles from "./ListItem.module.css"

export default function ListItem({item}) {
  return (
    <li className={styles.listItem}>{item.name} : {item.petName} at {item.time} on {item.date} ❌  </li>
  )
}
