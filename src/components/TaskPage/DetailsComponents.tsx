import { useEffect, useState } from 'react'
import { status, employee, Task  } from '../../types/types'
import { dateFormatorForTaskPage } from '../component function logics/switches';
import { Select, Wrapper } from '../NewTask/TaskStyled';
import axios from 'axios';
import { API_TOKEN } from '../Home/TasksPage';

export function DetailsStatus({task, status}:{task:Task, status: status}) {
    const [taskStatus, setTaskStatus] = useState<status | null>(status);
    const [open, setOpen] = useState<boolean>(false);
    const [statuses, setStatuses] = useState<status[] | null>(null);

    useEffect(() => {
        try {
            const getStatuses = async () => {
            await axios
                .get("https://momentum.redberryinternship.ge/api/statuses", {
                headers: { bearerAuth: API_TOKEN },
                })
                .then((response) => {
                setStatuses(response.data);
                });
            };

            getStatuses();
        } catch (error) {
            console.log(error);
        }
    }, [taskStatus])
    
    const handleChange = async (item: status) => {
        setTaskStatus(item);
        await axios.put(`https://momentum.redberryinternship.ge/api/tasks/${task.id}`,
            {
                status_id: item.id
            },
            {
                headers: {
                    Authorization: `Bearer ${API_TOKEN} `
                }
            }
        )
    }

    return (
        <div className="details status">
        <div>
        <img src="./assets/images/status-icon.svg" alt="status icon" />
        <span>სტატუსი</span>
        </div>
        <Wrapper>
            <p className='status-name'>სტატუსი*</p>
            <Select onClick={() => setOpen(!open)} open={open}>
            <div className="selection">
                <span>{taskStatus?.name}</span>
                <span>
                    <img className="dropdown-arrow" 
                    src={`./assets/images/arrow-${open ? "up.svg" : "down.svg"}`} 
                    alt="dropdown arrow"/>
                </span>
            </div>
    
            {open && (
                <ul className="variants-container">
                {statuses?.map((item) => (
                    <li
                    key={item.id}
                    onClick={() => {
                        setOpen(false);
                        handleChange(item);
                    }}
                    >
                    <span className="name">{item.name}</span>
                    </li>
                ))}
                </ul>
            )}
            </Select>
        </Wrapper>
</div>
    )
}

export function DetailsEmployee({employee}:{employee: employee}) {
    return (
        <div className="details employee">
          <div>
            <img
              className="icon"
              src="./assets/images/employee-icon.svg"
              alt="employee icon"
            />
            <span>თანამშრომელი</span>
          </div>
          <div>
            <img
              className="avatar"
              src={employee.avatar}
              alt="Employee avatar"
            />
            <div style={{ marginTop: "-9px" }}>
              <span className="empl dep">{employee.department.name}</span>
              <span className="empl name">
                {employee.name + " " + employee.surname}
              </span>
            </div>
          </div>
        </div>
    )
}

export function DetailsDueDate({dueDate}: {dueDate: string}){
    return(
        <div className="details deadline">
            <div>
                <img src="./assets/images/task-calendar.svg" alt="calenar icon" />
                <span>დავალების ვადა</span>
            </div>
            <div>{dateFormatorForTaskPage(dueDate)}</div>
        </div>
        
    )
}
