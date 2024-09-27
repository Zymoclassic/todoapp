import styles from './footer.module.css';

export default function Footer({doneTasks, totalTasks}) {
    return (
        <div className={styles.footer}>
            <span className={styles.doneTask}>Finished Tasks: {doneTasks}</span>
            <span className={styles.totalTask}>Total Tasks: {totalTasks}</span>
        </div>
    )
}