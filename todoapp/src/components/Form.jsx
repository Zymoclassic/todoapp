import { useState } from 'react';
import styles from './form.module.css';

export default function Form({ tasks, setTasks }) {

    const [ task, setTask ] = useState({name:"", done: false});

    function handleSubmit(e){
        e.preventDefault();
        setTasks([...tasks, task]);
        setTask({name:"", done: false});
    }

    return (
            <form className={styles.taskform} onSubmit={handleSubmit}>
                <div className={styles.inputContainer}>
                    <input 
                    className={styles.inputBar}
                    placeholder='Enter task'
                    value={task.name} 
                    type="text"
                    onChange = {(e) => setTask({name: e.target.value, done: false})}>
                    </input>
                    <button className={styles.inputButton} type="submit">&#43;</button>
                </div>
            </form>
        
    )
}

