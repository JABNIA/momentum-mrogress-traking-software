import React, { useEffect, useState } from 'react'
import { status } from '../../types/types';
import axios from 'axios';
import { API_TOKEN } from '../Home/TasksPage';
import { Select, Wrapper } from './TaskStyled';

function Status({status, setStatus}: {status: status, setStatus: React.Dispatch<React.SetStateAction<status>>} ) {
    const [statuses, setStatuses] = useState<status[]>([])
    const [open, setOpen] = useState(false)
    
    useEffect(() => {
        try {
            const getStatuses = async () => {
            await axios
                .get("https://momentum.redberryinternship.ge/api/statuses", {
                headers: { bearerAuth: API_TOKEN },
                })
                .then((response) => {
                console.log(response);
                setStatuses(response.data);
                });
            };

            getStatuses();
        } catch (error) {
            console.log(error);
        }
        }, []);
    
        const handleSelectStatus = (status: status) => {
            setStatus(status);
            setOpen(false);
        }

    return (
     <Wrapper>
          <p>სტატუსი*</p>
          <Select onClick={() => setOpen(!open)} open={open}>
            <div className="selection">
              <span>{status.name}</span>
              <span><img className="dropdown-arrow" src={`./assets/images/arrow-${open ? "up.svg" : "down.svg"}`} alt="dropdown arrow"/></span>
            </div>
    
            {open && (
              <ul className="variants-container">
                {statuses.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => {
                      setOpen(false);
                      handleSelectStatus(item);
                    }}
                  >
                    <span className="name"  onClick={() => setStatus(item)}>{item.name}</span>
                  </li>
                ))}
              </ul>
            )}
          </Select>
        </Wrapper>
  )
}

export default Status
