import { useState } from 'react';
import Form from './Form';
import MyTasks from './MyTasks';
import Footer from './Footer';

export default function Todo() {

    const [ tasks, setTasks ] = useState([]);
    const doneTasks = tasks.filter((tasks) => tasks.done).length;
    const totalTasks = tasks.length;

    return(
        <div>
            <Form tasks={tasks} setTasks={setTasks}/>
            <MyTasks tasks={tasks} setTasks={setTasks} />
            <Footer doneTasks={doneTasks} totalTasks={totalTasks} />
        </div>
    )
}