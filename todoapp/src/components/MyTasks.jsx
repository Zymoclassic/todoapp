import TaskList from "./TaskList";
import styles from "./mytasks.module.css"

export default function MyTasks({ tasks, setTasks }) {
    const sortedTasks = tasks.slice().sort((a, b) => Number(a.done) - Number(b.done));
    return(
        <div className={styles.list}>
            {sortedTasks.map((item) => (
                <TaskList key = {item.name} item={item} tasks={tasks} setTasks={setTasks} />
                ))}
        </div>
    );
}