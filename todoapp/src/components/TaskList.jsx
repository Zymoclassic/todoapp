import styles from './tasklist.module.css';

export default function TaskList({item, tasks, setTasks}) {

    function handleDelete(item) {
        setTasks(tasks.filter((task) => task.name !== item ));
    }

    function handleClick(name) {}

    return (
    <div className={styles.myItem}>
        <div className={styles.myItemName}>
            <span onClick={() => handleClick(item.name)}>{item.name}</span>
            <span>
                <button onClick={() => handleDelete(item.name)} className={styles.deleteButton}> &#10005;</button>
            </span>
        </div>
        <hr className={styles.line} />
    </div>
    );
}

