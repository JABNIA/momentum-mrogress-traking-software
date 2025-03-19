import React, { useEffect, useState } from 'react'
import { CommentInput, CommentInputWrapper, CommentsComponent, CommentSubmitButton, Description, Details, DetailsHeading, General, Heading, TaskDepartment, TaskInformation, TaskPageWrapper, TaskPriority } from './TaskPageStyled'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { API_TOKEN } from '../Home/TasksPage'
import { status, Task, comment } from '../../types/types'
import Status from '../NewTask/Status'
import { bgColor, dateFormatorForTaskPage, fontColor, formatDepartment } from '../component function logics/switches'

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
    }, []);
    
    dateFormatorForTaskPage(task?.due_date)
    if(task !== null) {
        return (
            <TaskPageWrapper>
                <TaskDetails task={task} status={status} setStatus={setStatus}/>
                <Comments task={task} id={id}/>
            </TaskPageWrapper>
  )
}else{
    <div>
        <h1>Whoops Something went Wrong</h1>
        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fknowyourmeme.com%2Fmemes%2Fpunishers-no-no-no-wait-wait-wait&psig=AOvVaw3-ajX7u4EwYjdS0W_SM5vw&ust=1742451011205000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMj0kYm-lYwDFQAAAAAdAAAAABAE" alt="NO, NO, NO, NO! WAIT WAIT WAIT WAIT" />
    </div>
}

}

export default TaskPage;

function Comments({task, id}:{task: Task | null, id: string | undefined}) {
    const [comment, setComment] = useState<string>("");
    const [allComments, setAllComments] = useState<comment[] | null>(null);

    useEffect(() => {
        const getComments = async () => 
            await axios.get(`https://momentum.redberryinternship.ge/api/tasks/${id}/comments`,
                {
                    headers: {
                        Authorization: `Bearer ${API_TOKEN}`
                    }
                }
            ).then(response => {
                setAllComments(response.data)
            })
            .catch(error => {
                console.log(error)
            })
            getComments();
    }, [allComments]);

    const handleInputComment = (inputValue: string) => {
        setComment(inputValue);
    } 

    const handleUpdateComment = () => {
        const commentObj = {
            text: comment,
            parent_id: null,
        }
        
        try{
            axios.post(`https://momentum.redberryinternship.ge/api/tasks/${task?.id}/comments`,
                commentObj,
                {
                    headers: {
                        Authorization: `Bearer ${API_TOKEN}`
                    }
                }
            )
        }catch (error){
            console.log(error);
        }

        setComment("");
    }
    
    return (
        <CommentsComponent>
        <CommentInputWrapper>
            <CommentInput placeholder='დაწერე კომენტარი' value={comment} onChange={(e) => handleInputComment(e.target.value)}/>
            <CommentSubmitButton onClick={handleUpdateComment}>
                დააკომენტარე
            </CommentSubmitButton>
        </CommentInputWrapper>
        <p className="comments">
            <span>კომენტარები</span>
            <span className='comm-count'>{allComments?.length}</span>
        </p>
        <ul>
            {allComments?.map(comment => {
                return <Comment comment={comment} />
    })}
        </ul>
        </CommentsComponent>
    )
}


function Comment({comment}: {comment: comment}) {
    const [response, setResponse] = useState<boolean>(false);
    const [responseText, setResponseText] = useState<string>("");

    const handleInputComment = (responseText: string) => {
        setResponseText(responseText);
    }

    return (
        <>
        <li key={comment.id}>
            <div>
                <img className="comment-avatar"src={comment.author_avatar} alt="author avatar" />
            </div>
            <div>
                <p className="nickname">{comment.author_nickname}</p>
                <p className="comment-text">{comment.text}</p>
                <div className='reply-btn'>
                    <img src="./assets/images/arrow-left.svg" alt="reply arrow" />
                    <span className='reply' onClick={() => setResponse((curr: Boolean) => !curr)}>უპასუხე</span>
                </div>

            </div>
        </li>
        {
        response && 
            <div>
                <CommentInput placeholder='დაწერე კომენტარი' value={responseText} onChange={(e) => handleInputComment(e.target.value)}/>
            </div>
        }
        </>
        )  
}

function TaskDetails({task, status, setStatus}: {task: Task, status: status | null, setStatus: React.Dispatch<React.SetStateAction<status | null>>}){
    
    return(
        <TaskInformation>
                <General>
                    <div>
                        <TaskPriority color={fontColor(task.priority.id)}>
                            <span><img src={task.priority.icon} alt="priority icon" /> {task.priority.name}</span>
                        </TaskPriority>
                        <TaskDepartment bgColor={bgColor(task.department.id)}>{formatDepartment(task.department.id)}</TaskDepartment>
                    </div>
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
    )
}