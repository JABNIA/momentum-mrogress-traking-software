import { useEffect, useState } from "react";
import {
  CommentInput,
  CommentInputWrapper,
  Commentli,
  CommentsComponent,
  CommentSubmitButton,
  Description,
  Details,
  DetailsHeading,
  General,
  Heading,
  SubComments,
  TaskDepartment,
  TaskInformation,
  TaskPageWrapper,
  TaskPriority,
} from "./TaskPageStyled";
import axios from "axios";
import { useParams } from "react-router-dom";
import { API_TOKEN } from "../Home/TasksPage";
import { Task, comment } from "../../types/types";
import {
  bgcolor,
  dateFormatorForTaskPage,
  fontcolor,
  formatDepartment,
} from "../component function logics/switches";
import { DetailsStatus, DetailsEmployee, DetailsDueDate } from "./DetailsComponents";

function TaskPage() {
  const { id } = useParams();
  const [task, setTask] = useState<Task | null>(null);

  useEffect(() => {
    const getTask = async () =>
      await axios
        .get(`https://momentum.redberryinternship.ge/api/tasks/${id}`, {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
          },
        })
        .then((response) => {
          setTask(response.data);
        })
        .catch((error) => {
          console.log(error);
        });

    getTask();
  }, []);

  dateFormatorForTaskPage(task?.due_date);
  if (task !== null) {
    return (
      <TaskPageWrapper>
        <TaskDetails task={task}  />
        <Comments task={task} id={id} />
      </TaskPageWrapper>
    );
  } else {
    return(
        <div>
            <h1>Whoops Something went Wrong</h1>
        </div>
    );
  }
}

export default TaskPage;

function Comments({ task, id }: { task: Task | null; id: string | undefined }) {
  const [comment, setComment] = useState<string>("");
  const [allComments, setAllComments] = useState<comment[] | null>(null);

  useEffect(() => {
    const getComments = async () =>
      await axios
        .get(
          `https://momentum.redberryinternship.ge/api/tasks/${id}/comments`,
          {
            headers: {
              Authorization: `Bearer ${API_TOKEN}`,
            },
          }
        )
        .then((response) => {
          setAllComments(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    getComments();
  }, []);

  const handleInputComment = (inputValue: string) => {
    setComment(inputValue);
  };

  const handleUpdateComment = async () => {
    const commentObj = {
      text: comment,
      parent_id: null,
    };

    try {
      await axios.post(
        `https://momentum.redberryinternship.ge/api/tasks/${task?.id}/comments`,
        commentObj,
        {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }

    setComment("");

    const resetComents = async () => {
        try{
            const comments = await axios.get(
            `https://momentum.redberryinternship.ge/api/tasks/${task?.id}/comments`,
            {
                headers: {
                    Authorization: `Bearer ${API_TOKEN}`,
                },
            }
        ).then(response => response.data)
        return comments; 
        }catch (error){
            console.log(error)
            return null;
        }
    }
    const comments = await resetComents()
    setAllComments(comments)
    };

  return (
    <CommentsComponent>
      <CommentInputWrapper>
        <CommentTextarea
          comment={comment}
          handleInputComment={handleInputComment}
        />
        <CommentSubmitButton onClick={handleUpdateComment}>
          დააკომენტარე
        </CommentSubmitButton>
      </CommentInputWrapper>
      <p className="comments">
        <span>კომენტარები</span>
        <span className="comm-count">{allComments?.length}</span>
      </p>
      <ul>
        {allComments?.map((comment) => {
          return <Comment key={comment.id} comment={comment} task={task}/>;
        })}
      </ul>
    </CommentsComponent>
  );
}

function CommentTextarea({
  comment,
  handleInputComment,
}: {
  comment: string;
  handleInputComment: (text: string) => void;
}) {
  return (
    <CommentInput
      placeholder="დაწერე კომენტარი"
      value={comment}
      onChange={(e) => handleInputComment(e.target.value)}
    />
  );
}

function Comment({ comment, task }: { comment: comment, task: Task | null }) {
  const [response, setResponse] = useState<boolean>(false);
  const [responseText, setResponseText] = useState<string>("");

  const handleInputComment = (responseText: string) => {
    setResponseText(responseText);
  };

  const handleSubmitReply = async () => {
    try {
      await axios.post(
        `https://momentum.redberryinternship.ge/api/tasks/${task?.id}/comments`,
        {
          text: responseText,
          parent_id: comment.id
        },
        {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
          },
        }
      );
    }catch (error){
      console.log(error)
    }

  }
  return (
    <>
      <Commentli key={comment.id}>
        <div className="comment-wrapper">

        <div>
          <img
            className="comment-avatar"
            src={comment.author_avatar}
            alt="author avatar"
            />
        </div>
        <div>
          <p className="nickname">{comment.author_nickname}</p>
          <p className="comment-text">{comment.text}</p>
          <div className="reply-btn">
            <img src="./assets/images/arrow-left.svg" alt="reply arrow" />
            <span
              className="reply-btn"
              onClick={() => setResponse((curr: Boolean) => !curr)}
              >
              უპასუხე
            </span>
          </div>
        </div>
      </div>
        {
          comment.sub_comments &&
          <SubComments>
          {comment.sub_comments.map(subComent => {
            return (
              <div className="reply-wrapper">
              <div className="avatar">
                <img className="comment-avatar"
                src={subComent.author_avatar}
                alt="author avatar"
                />
              </div>
              <div className="text-name">
                <p className="author">{subComent.author_nickname}</p>
                <p className="reply">{subComent.text}</p>
              </div>
              </div>
            )})}
          </SubComments>
          }
      </Commentli>
      {response && (
        <div>
          <CommentInput
            placeholder="დაწერე კომენტარი"
            value={responseText}
            onChange={(e) => handleInputComment(e.target.value)}
          />
          <CommentSubmitButton onClick={handleSubmitReply}>
            პასუხი
          </CommentSubmitButton>
        </div>
      )}
    </>
  );
}




function TaskDetails({
  task,
}: {
  task: Task;
}) {
  return (
    <TaskInformation>
      <General>
        <div>
          <TaskPriority color={fontcolor(task.priority.id)}>
            <span>
              <img src={task.priority.icon} alt="priority icon" />{" "}
              {task.priority.name}
            </span>
          </TaskPriority>
          <TaskDepartment bgcolor={bgcolor(task.department.id)}>
            {formatDepartment(task.department.name)}
          </TaskDepartment>
        </div>
        <Heading>{task.name}</Heading>
        <Description>{task.description}</Description>
      </General>
      <Details>
        <DetailsHeading>დავალების დეტალები</DetailsHeading>
        
        <DetailsStatus task={task} status={task.status}/>
        
        <DetailsEmployee employee={task.employee} />
        
        <DetailsDueDate dueDate={task.due_date} />
      </Details>
    </TaskInformation>
  );
}
