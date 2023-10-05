import { addingTaskToTasks, getTasks} from './mockTasks';
import { ChangeEvent, useRef, useState } from 'react';
import { Task } from './Task';



console.log(getTasks)

function dataIteration(list: Array<Task>){
    const inputRef = useRef<any>([]);
    const listData = Object.values(list);
    const listDataIteration = listData.map((task) => 
        <li key={task.id} className="task"> 
            <input 
                id={task.name}
                type="checkbox"
                ref={inputRef.current[task.id]}
            /> <label htmlFor={task.name}>{task.name}</label>
        </li>
    )

    return listDataIteration;
}

function TasksPage() {
    var tasks : Array<Task> = getTasks();
    const [taskName, setTaskName] = useState("")
    var [taskID, setTaskID] = useState(0);

    // event = SyntheticEvent
    function handleSubmit(){

        const task: Task = new Task(
            {
                id: taskID,
                name: taskName,
                isActive: false
            }
        );
        setTaskID(() => tasks[tasks.length - 1].id+1 || taskID+1)

        addingTaskToTasks(task);
    }
    
    
    
    const handleChange = (e : ChangeEvent<HTMLInputElement>): void  => {
        //console.log(e.currentTarget.value);
        var title: string = e.currentTarget.value.trim();
        if(e.currentTarget.value.trim().length>2){
            //console.log("input is not empty");
            setTaskName(title);
        } 
        //else {
        //     console.log("input is empty")
        // }
    }


    return (
        <>
            <h1>Tasks</h1>
            <div id="tasks-list">
                <ul style = {{ listStyleType : 'none'}}>
                    {dataIteration(tasks)}
                </ul>
            </div>
            <div id="new-task-container">
                <label htmlFor="task">task:</label> 
                <input type="text" onChange={handleChange}  id="task"/>
                <input type="Button" defaultValue="Add Todo" onClick={handleSubmit}/>
            </div>
        </>
    )

}

export default TasksPage;