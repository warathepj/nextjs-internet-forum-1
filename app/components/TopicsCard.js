import styles from './TopicsCard.module.css';

export default function TopicsCard({ msg }) { 
    return (
      <div className={styles.container}>
        <p>{msg}</p> 
      </div>
    )
  }
  