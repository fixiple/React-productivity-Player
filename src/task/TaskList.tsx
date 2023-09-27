import { Task } from "./Task";
import Checkbox from "../components/checkbox";
import { SetStateAction, useState } from "react";


function TaskList(data: Array<Task>) {
    const [selected, setSelected] = useState();

    const handleChange = (val: number) => {
        setSelected((prev: SetStateAction<any>) => {
            (val===prev ? null : val)
        });
    }

    
    const listData = Object.values(data).map((element) => {

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