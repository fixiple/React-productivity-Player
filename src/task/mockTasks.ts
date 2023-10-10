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

export function initLocalTasks() : void{
    if (!localStorage.getItem("taskList")){
        localStorage.setItem(
            "taskList", 
            JSON.stringify(MOCK_TASKS)
        )
    }
    //console.log(JSON.parse(localStorage.getItem("taskList")||"empty"))
}


export function getTasks(): Array<Task>{

    const tasksLocal: Array<Task> = JSON.parse(localStorage.getItem("taskList")!);
    return tasksLocal
}


export function addingTaskToTasks(task : Task){
    let tasks : Array<Task> = getTasks();
    tasks.push(task)
    localStorage.setItem(
        "taskList", JSON.stringify(tasks)
    )
}

//TODO: Modification works but not update, Update doesn't update the local tasks shown in the view/front.....
export function modifyTask(index : number, newName : string ="null", isDone : boolean=false){
    let json : Array<Task> = JSON.parse(localStorage.getItem("taskList")!);

    json[index].name??=newName||json[index].name;
    // json[index].isActive??=isDone||false;

    for(let i = 0; i < json.length; i++) {
        if(json[i].id === index) {
            json[i].name=newName
            json[i].isActive=isDone
        }
    }
    localStorage.setItem(
        "taskList", JSON.stringify(json)
    )
}


export function readFromLocalStorage( obj: string) : void{

    let objToRead : string|null = localStorage.getItem(obj) || null;
    //console.log(objToRead)
}

export function deleteTasks(): void{
    localStorage.removeItem("taskList");
}

