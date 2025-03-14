import React, { useEffect, useState } from "react";
import { employee } from "../../types/types";
import axios from "axios";
import { API_TOKEN } from "../Home/TasksPage";
import { Select, Wrapper } from "./Styled";

function ResponsibleEmployee({
    assignedEmployee,
    setAssignedEmployee,
}: {
  assignedEmployee: employee;
  setAssignedEmployee: React.Dispatch<React.SetStateAction<employee | null>>;
}) {
  const [employees, setEmployees] = useState<employee[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    try{

        const getAllEmployees = async () =>
            await axios
        .get("https://momentum.redberryinternship.ge/api/employees", {
            headers: { bearerAuth: API_TOKEN },
        })
        .then((response) => setEmployees(response.data));
        
        getAllEmployees()
    }catch (error){
        console.log(error)
    }
  }, []);


  const handleemployeeSelect = (employee: employee) =>{ 
    setAssignedEmployee(employee)
  }

  return (
    <Wrapper style={{gridColumn: "2/3", gridRow: "2/3"}}>
        <p>პრიორიტეტი*</p>
        <Select onClick={() => setOpen(!open)} open={open} style={{width: "550px"}}>
          <div className="selection" >
            <span>{assignedEmployee.name + assignedEmployee.surname}</span>
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
              {employees.map((item) => (
                <li
                  key={item.name + " " + item.surname}
                  onClick={() => {
                    setOpen(false);
                    handleemployeeSelect(item);
                  }}
                >
                  <span className="name">{item.name + " " + item.surname}</span>
                </li>
              ))}
            </ul>
          )}
        </Select>
      </Wrapper>
);
}

export default ResponsibleEmployee;
