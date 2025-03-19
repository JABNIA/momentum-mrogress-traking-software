import { useEffect, useState } from 'react'
import { CommentsComponent, Description, Details, DetailsHeading, General, Heading, TaskInformation, TaskPageWrapper } from './TaskPageStyled'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { API_TOKEN } from '../Home/TasksPage'
import { status, Task } from '../../types/types'
import Status from '../NewTask/Status'
import { dateFormatorForTaskPage } from '../component function logics/switches'

function TaskPage() {
    const { id } = useParams();
    const [task, setTask] = useState<Task | null>(null);
    const [status, setStatus] = useState<status | null>(null)
    useEffect(() => {
        const getTask = async () => 

                await axios.get(`https://momentum.redberryinternship.ge/api/tasks/${id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${API_TOKEN}`
                        }
                    }
                ).then(response => {
                    setTask(response.data)
                    setStatus(response.data.status)
                })
                .catch(error => {
                    console.log(error)
                })
                getTask()
    }, [])

    dateFormatorForTaskPage(task?.due_date)
    if(task !== null) {
        return (
            <TaskPageWrapper>
            <TaskInformation>
                <General>
                    <Heading>
                        {task.name}
                    </Heading>
                    <Description>
                        {task.description}
                    </Description>
                </General>
                <Details>
                    <DetailsHeading>
                        დავალების დეტალები
                    </DetailsHeading>
                    <div className="details status">
                        <div>
                            <img src="./assets/images/status-icon.svg" alt="status icon" />
                            <span>სტატუსი</span>
                        </div>
                        <Status status={status} setStatus={setStatus}/>
                    </div>
                    <div className="details employee">
                        <div>
                            <img className="icon" src="./assets/images/employee-icon.svg" alt="employee icon" /> 
                            <span>თანამშრომელი</span>
                        </div>
                        <div>
                            <img className="avatar" src={task.employee.avatar} alt="Employee avatar" />
                            <div style={{marginTop: "-9px" }}>
                                <span className="empl dep" >{task.employee.department.name}</span>
                                <span className="empl name">
                                    {task.employee.name + " " + task.employee.surname}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="details deadline">
                        <div>
                            <img src="./assets/images/task-calendar.svg" alt="calenar icon" />
                            <span>დავალების ვადა</span>
                        </div>
                        <div>
                                {dateFormatorForTaskPage(task.due_date)}
                        </div>
                    </div>
                </Details>
            </TaskInformation> 
            <CommentsComponent />
        </TaskPageWrapper>
  )
}else{
    <div>
        <h1>Whoops Something went Wrong</h1>
        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fknowyourmeme.com%2Fmemes%2Fpunishers-no-no-no-wait-wait-wait&psig=AOvVaw3-ajX7u4EwYjdS0W_SM5vw&ust=1742451011205000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMj0kYm-lYwDFQAAAAAdAAAAABAE" alt="NO, NO, NO, NO! WAIT WAIT WAIT WAIT" />
    </div>
}

}

export default TaskPage
