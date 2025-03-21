import axios from "axios";
import { useEffect, useState } from "react";
import { API_TOKEN } from "../Home/TasksPage";
import { priority, PriorityProps } from "../../types/types";
import { Select, Wrapper } from "./TaskStyled";

function Priorities({
  priority,
  setPriority,
  setValidation
}: PriorityProps) {
  const [priorities, setPriorities] = useState<priority[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const getPriorities = async () => {
        await axios
          .get("https://momentum.redberryinternship.ge/api/priorities", {
            headers: { bearerAuth: API_TOKEN },
          })
          .then((response) => {
            setPriorities(response.data);
          });
      };

      getPriorities();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handlePrioritySelect = (priority: priority) => {
    setPriority(priority);
    setValidation(prev => {return {...prev, priority: true}})
  };

  return (
    <Wrapper>
      <p>პრიორიტეტი*</p>
      <Select onClick={() => setOpen(!open)} open={open}>
        <div className="selection">
          <img className="icon" src={priority.icon} alt="icon" />{" "}
          <span>{priority.name}</span>
          <span>
            <img
              className="dropdown-arrow"
              src={`./assets/images/arrow-${open ? "up.svg" : "down.svg"}`}
              alt="dropdown arrow"
            />
          </span>
        </div>

        {open && (
          <ul className="variants-container">
            {priorities.map((item) => (
              <li
                key={item.id}
                onClick={() => {
                  setOpen(false);
                  handlePrioritySelect(item);
                }}
              >
                <img className="icon" src={item.icon} alt="icon" />{" "}
                <span className="name">{item.name}</span>
              </li>
            ))}
          </ul>
        )}
      </Select>
    </Wrapper>
  );
}

export default Priorities;
