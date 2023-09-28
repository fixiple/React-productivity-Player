import { MOCK_TASKS } from './mockTasks';
import TaskList from './TaskList';
import NewTask from './NewTask';

function TasksPage() {
    let data=MOCK_TASKS
    
    return (
        <>
            <h1>Tasks</h1>
            <div id="tasks-list">
                <TaskList tasklist={data}></TaskList>
            </div>
            <div id="new-task-container">
                <NewTask currentList={data}></NewTask>
            </div>
        </>
    )
}

export default TasksPage;