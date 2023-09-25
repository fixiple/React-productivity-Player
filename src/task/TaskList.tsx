import { Task } from "./Task";


function TaskList(data: Array<Task>) {
    
    function onChange() {
        return null
    }
    const listData = Object.values(data).map((element) => 
    <li key={element.id} className="task"> 
        <input type="checkbox" value={element.name} checked={element.isActive}/>
        <label htmlFor={element.name}>{element.name}</label>
    </li>)
    
    return (
        <div style={{ }}>
            <ul style = {{ listStyleType : 'none'}}>
                    {listData}
            </ul>
        </div>
    )
}

export default TaskList;