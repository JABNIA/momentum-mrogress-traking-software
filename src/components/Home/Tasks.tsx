import { useEffect, useState } from 'react'
import { API_TOKEN } from './TasksPage'
import { Task } from '../../types/types'
import axios from 'axios'
import { PriorityWrapper, TaskComments, TaskDeadline, TaskDepartmentWrapper, TaskDescription, TaskTitle, TaskWrapper } from './tasksStyled'

function Tasks({status}:{status: {id: number, name:string}}) {
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
    console.log(tasks)
  return (
    <div>
        <div>
            <p className="status"></p>
        </div>
      {tasks?.map(task => <TaskComponent task={task} />)}
    </div>
  )
}



function TaskComponent({task}: {task: Task}) {
    const color = () => {
        switch(task.status.id){
                    case 2: 
                    return "#FB5607";
                    case 3:
                    return "#FF006E";
                    case 4:
                    return "#3A86FF";
                    default:
                    return "#F7BC30";
                        
    }
}
    
    const fontColor = () => {
        switch(task.priority.id){
                    case 1: 
                    return "#08A508";
                    case 3:
                    return "#FA4D4D";
                    default: 
                    return "#FFBE0B";
    }
}
    const bgColor = () => {
        switch(task.department.id){
                case 1: 
                return "#08a590";
                case 3:
                return "#FF66A8";
                case 4:
                return "#FD9A6A";
                case 5:
                return "#f01111";
                case 6:
                return "#26ee4a";
                case 7:
                return "#fa4de6";
                default: 
                return "#FFBE0B";
}
}
    return (
        <TaskWrapper borderColor={color()}>
            <div className="task-info">

                <PriorityWrapper color={fontColor()}>
                    <img src={task.priority.icon} alt="icon" />
                    <span>{task.priority.name}</span>
                </PriorityWrapper>

                <TaskDepartmentWrapper bgColor={bgColor()}>
                    {formatDepartment(task.department.id)}
                </TaskDepartmentWrapper>
                <TaskDeadline>
                    {task.due_date.substring(0, 10).split("-").join(" ")}
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


function formatDepartment(department: number){
    switch(department){
        case 1: 
        return "ადმ. დეპ.";
        case 2: 
        return "ადამ. რეს.";
        case 3: 
        return "ფინანსები";
        case 4: 
        return "მარკეტინგი";
        case 5: 
        return "ლოჯისტიკა";
        case 6: 
        return "ტექ. დეპ.";
        case 7: 
        return "მედია";
        default:
        return "";
    }
}