import { MOCK_TASKS } from './mockTasks';
import TaskList from './TaskList';

function TasksPage() {
    let data=MOCK_TASKS
    
    return (
        <>
            <h1>Tasks</h1>
            <div id="tasks-list">
                <TaskList {...data}></TaskList>
            </div>
        </>
    )
}

export default TasksPage;