import styles from './tasklist.module.css';

export default function TaskList({item, tasks, setTasks}) {

    function handleDelete(item) {
        setTasks(tasks.filter((task) => task.name !== item ));
    }

    function handleClick(name) {
        const newTask = tasks.map((task) => task.name === name ? {...task, done:!task.done } : task)
        setTasks(newTask)
    }

    const doneTasks = item.done ? styles.completed : "";

    return (
    <div className={styles.myItem}>
        <div className={styles.myItemName}>
            <span className={doneTasks} onClick={() => handleClick(item.name)}>{item.name}</span>
            <span>
                <button onClick={() => handleDelete(item.name)} className={styles.deleteButton}> &#10005;</button>
            </span>
        </div>
        <hr className={styles.line} />
    </div>
    );
}

