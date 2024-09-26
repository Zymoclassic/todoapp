import { useState } from 'react';
import Form from './Form';
import MyTasks from './MyTasks';

export default function Todo() {

    const [ tasks, setTasks ] = useState([]);

    return(
        <div>
            <Form tasks = {tasks} setTasks = {setTasks}/>
            <MyTasks tasks = {tasks} setTasks={setTasks} />
        </div>
    )
}