import { Task } from "./Task";
import Checkbox from "../components/checkbox";
import { SetStateAction, useState } from "react";

interface propsType {
    tasklist: Array<Task>
}

//TODO: REFACTOR INTO ONLY USING THIS FILE TO GET THE CURRENT LIST, NOT ALSO RENDERING THE VIEW

function TaskList(props: propsType) {
    const list = props.tasklist;
    
    const [selected, setSelected] = useState();

    const handleChange = (val: number) => {
        setSelected((prev: SetStateAction<any>) => {
            (val===prev ? null : val)
        });
    }

    
    const listData = Object.values(list).map((element) => {
    return <li key={element.id} className="task"> 
        <Checkbox 
        id={element.name}
        label={element.name}
        checked={element.id===selected}
        onChange={() => handleChange(element.id)}
        ></Checkbox>
    </li>})
    return (
        <>
            <ul style = {{ listStyleType : 'none'}}>
                    {listData}
            </ul>
        </>
    )
}

export default TaskList;