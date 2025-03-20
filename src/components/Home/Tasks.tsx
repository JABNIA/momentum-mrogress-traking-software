import { useEffect, useState } from 'react'
import { API_TOKEN } from './TasksPage'
import { Filters, Task } from '../../types/types'
import axios from 'axios'
import { PriorityWrapper, TaskComments, TaskDeadline, TaskDepartmentWrapper, TaskDescription, TaskTitle, TaskWrapper } from './tasksStyled'
import { Link } from 'react-router-dom'
import { bgColor, color, dateFormatorForHomePage, fontColor, formatDepartment } from '../component function logics/switches'

function Tasks({status, filters}:{status: {id: number, name:string}, filters: Filters}) {
    const [tasks, setTasks] = useState<Task[] | null>(null)

    useEffect(() => {
        try{
            const getTasks = async () => await axios.get("https://momentum.redberryinternship.ge/api/tasks", {
                headers: {
                    Authorization: `Bearer ${API_TOKEN}`
                }
            }).then(response => {
                const filteredTasks = response.data.filter((task: Task) => task.status.name === status.name);
                setTasks(filteredTasks);
            })  

            getTasks()
        }catch (error) {
            console.log(error)
        }

    }, [])

    
  return (
    <div>
        <div>
            <p className="status"></p>
        </div>
        {
        tasks?.map(task => {
                
                return (
                <Link to={`/task/${task.id}`} style={{color: "var(--text-color2)", textDecoration: "none"}}>
                    <TaskComponent task={task} />
                </Link>
                )
            }
        )}
        </div>
  )
}
function TaskComponent({task}: {task: Task}) {
    return (
        <TaskWrapper borderColor={color(task.status.id)}>
            <div className="task-info">

                <PriorityWrapper color={fontColor(task.priority.id)}>
                    <img src={task.priority.icon} alt="icon" />
                    <span>{task.priority.name}</span>
                </PriorityWrapper>

                <TaskDepartmentWrapper bgColor={bgColor(task.department.id)}>
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
