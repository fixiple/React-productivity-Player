import { SyntheticEvent, useRef, useState } from "react";
import { Task } from "./Task";

interface propsType {
    currentList: Array<Task>
}

function addingNewTask(props: propsType){
    const inputRef = useRef<HTMLInputElement>(null);

    //NOTE: 
    const [taskList,setTaskList] = useState(Array<Task>);


    function handleSubmit(event: SyntheticEvent){
        
        //DEBUG : getting the value typed by the user 
        //console.log("Input value:", inputRef.current?.value);
        
        setTaskList(props.currentList);
        
        console.log("tasklist"+[...props.currentList]);
        var lastTaskID = taskList[taskList.length-1].id;


        var taskName: string|undefined = inputRef.current?.value;
        const task:Task = new Task({id: lastTaskID+1, name: taskName, isActive: false});
        
        //DEBUG : checking new task added to list, to check if Object is correctly implemented
        console.log(task);
        
        setTaskList([...taskList, task]);
        
        console.log(setTaskList);

        //DEBUG : checking new list
        console.log(props.currentList);
       
        event.preventDefault();
        
    }

    return (
        <> 
        
            <label htmlFor="task">task:</label> 
            <input type="text" ref={inputRef} id="task"/>
            <input type="submit" value="Add Todo" onClick={handleSubmit}/>
        
        </>
    )
    
    
}

export default addingNewTask;

