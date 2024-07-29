import styles from './TopicsCard.module.css';

export default function TopicsCard({ msg }) { // Receive the prop
    return (
      <div className={styles.container}>
        {/* <p>TOPICS Card</p> */}
        <p>{msg}</p> {/* Display the message */}
      </div>
    )
  }
  