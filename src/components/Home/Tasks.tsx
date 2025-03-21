import { useEffect, useState } from 'react'
import { API_TOKEN } from './TasksPage'
import { Filters, Task } from '../../types/types'
import axios from 'axios'
import { PriorityWrapper, TaskComments, TaskDeadline, TaskDepartmentWrapper, TaskDescription, TaskTitle, TaskWrapper } from './tasksStyled'
import { Link } from 'react-router-dom'
import { bgcolor, color, dateFormatorForHomePage, fontcolor, formatDepartment } from '../component function logics/switches'

function Tasks({status, filters}:{status: {id: number, name:string}, filters: Filters}) {
    const [tasks, setTasks] = useState<Task[]>([])
    const filteredTasks = filterTasks(tasks) 

    useEffect(() => {
        try{
            const getTasks = async () => await axios.get("https://momentum.redberryinternship.ge/api/tasks", {
                headers: {
                    Authorization: `Bearer ${API_TOKEN}`
                }
            }).then((response) => {
                setTasks(filterTasks(response.data));
            })  

            getTasks()
        }catch (error) {
            console.log(error)
        }
    }, [filters])

  
    return (
    <div>
        <div>
            <p className="status"></p>
        </div>
        {
        filteredTasks?.map(task => {
                if(task.status.name === status.name){
                    return (
                        <Link to={`/task/${task.id}`} key={task.id} style={{color: "var(--text-color2)", textDecoration: "none"}}>
                            <TaskComponent task={task} />
                        </Link>
                    )
                    }
            })}
        </div>
        )}

function filterTasks(tasks: Task[]){
    const localStorageFilters = localStorage.getItem("filters");
    const local = localStorageFilters ? JSON.parse(localStorageFilters) : {department: [], priority: [], employee: ""};
    let taskArr = tasks;
    
    if (local.department.length){
        taskArr = taskArr.filter(task => local.department.includes(task.department.name))
        }

    if (local.priority.length){
        taskArr = taskArr.filter(task => local.priority.includes(task.priority.name)) 
    }    

    if (local.employee !== ""){
        taskArr = taskArr.filter(task => `${task.employee.name} ${task.employee.name}` === local.employee)
        }
    
    return taskArr;
}


function TaskComponent({task}: {task: Task}) {
    return (
        <TaskWrapper borderColor={color(task.status.id)}>
            <div className="task-info">

                <PriorityWrapper color={fontcolor(task.priority.id)}>
                    <img src={task.priority.icon} alt="icon" />
                    <span>{task.priority.name}</span>
                </PriorityWrapper>

                <TaskDepartmentWrapper bgcolor={bgcolor(task.department.id)}>
                    {formatDepartment(task.department.name)}
                </TaskDepartmentWrapper>
                <TaskDeadline>
                    {dateFormatorForHomePage(task.due_date)}
                </TaskDeadline>
            </div>
            <div className="name-desc">
                <TaskTitle>{task.name}</TaskTitle>
                <TaskDescription>{task.description.substring(0, 100)}</TaskDescription>
            </div>
            <TaskComments>
                <div>
                    <img className="emploee-avatar" src={task.employee.avatar} alt="Employee" />
                </div>
                <div>
                    <img src="./assets/images/Comments.svg" alt="Comment" />
                    <span className="comm-count">
                        {task.total_comments}
                    </span>
                </div>
            </TaskComments>
        </TaskWrapper>
    )
}


export default Tasks
