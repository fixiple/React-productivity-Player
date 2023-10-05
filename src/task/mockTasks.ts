import { useEffect, useState } from 'react';
import { Task } from './Task';

export const MOCK_TASKS = [
  new Task({
    id: 1,
    name: 'Learning React',
    isActive: false,
  }),
  new Task({
    id: 2,
    name: 'Wisozk Group',
    isActive: false,
})]
function dad(){
    
    // use of localStorage to save items in browser, return an Storage Object
    useEffect(() => {
        const tasksLocal = JSON.parse(localStorage.getItem('todos')!);
        if (tasksLocal) {
            setTasks(tasksLocal);
        }
    }, []);
    
    const [tasks, setTasks] = useState(Array<Task>);
    

}
function initLocalTasks() : void{
    if (!localStorage.getItem("taskList")){
        localStorage.setItem(
            "taskList", JSON.stringify([])
        )
    }
}

//we are getting the items from localStorage
function getLocalTasks() : void {
    initLocalTasks;    
    const tasksLocal: Array<Task> = JSON.parse(localStorage.getItem("taskList")! );
    setTasks([...tasksLocal])
}
export function getTasks(): Array<Task>{
    initLocalTasks;
    const tasksLocal: Array<Task> = JSON.parse(localStorage.getItem("taskList")! );
    return tasksLocal
}

export function addingTaskToTasks(task : Task){
    tasks.push(task)
    localStorage.setItem(
        "taskList", JSON.stringify(tasks)
    )
}

