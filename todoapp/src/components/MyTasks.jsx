import TaskList from "./TaskList";
import styles from "./mytasks.module.css"

export default function MyTasks({ tasks, setTasks }) {
    return(
        <div className={styles.list}>
            {tasks.map((item) => (
                <TaskList key = {item.name} item={item} tasks={tasks} setTasks={setTasks} />
                ))}
        </div>
    );
}