import { addingTaskToTasks, getTasks, deleteTasks, modifyTask} from './mockTasks';
import { ChangeEvent, useState } from 'react';
import { Task } from './Task';
import { Checkbox } from '../components/Checkbox';


function dataIteration(list: Array<Task>){
    const listData = Object.values(list);
    const listDataIteration = listData.map((task) => 
        <li key={task.id} className="task"> 
            <Checkbox id={task.name} label={task.name}></Checkbox>
        </li>
    )

    return listDataIteration;
}

function TasksPage() {
    //deleteTasks();

    var tasks : Array<Task> = getTasks();
    //console.log(...tasks);
    const [taskName, setTaskName] = useState("")
    var [taskID, setTaskID] = useState(tasks.length + 1||0);


    // event = SyntheticEvent
    function handleSubmit(){
        setTaskID((id) => id + 1);
        
        const task: Task = new Task(
            {
                id: taskID,
                name: taskName,
                isActive: false
            }
        );

        // console.log("task number: "+tasks[tasks.length-1].id);
        // console.log("task id:" + taskID);
        addingTaskToTasks(task);
    }

    //TODO: Modification works but not update, Update doesn't update the local tasks shown in the view/front.....
    function modify(){
        modifyTask(6,"OH NO I ORIN Again!", true);
        tasks=JSON.parse(localStorage.getItem("taskList")!);
    }
    
    const handleChange = (e : ChangeEvent<HTMLInputElement>): void  => {
        //console.log(e.currentTarget.value);
        var title: string = e.currentTarget.value.trim();
        setTaskName(title);
        // if(e.currentTarget.value.trim().length>2){
        //     //console.log("input is not empty");
        //     setTaskName(title);
        // } 
        //else {
        //     console.log("input is empty")
        // }
    }


    return (
        <>
            <h1>Tasks</h1>
            <div id="new-task-container">
                <label htmlFor="task">task:</label> 
                <input type="text" onChange={handleChange}  id="task"/>
                <input type="Button" defaultValue="Add Todo" onClick={handleSubmit}/>
                <input type="Button" defaultValue="modify" onClick={modify}/>
            </div>
            <div id="tasks-list">
                <ul style = {{ listStyleType : 'none'}}>
                    {dataIteration(tasks)}
                </ul>
            </div>
        </>
    )

}

export default TasksPage;