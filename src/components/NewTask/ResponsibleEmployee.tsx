import React, { useEffect, useState } from "react";
import { employee } from "../../types/types";
import axios from "axios";
import { API_TOKEN } from "../Home/TasksPage";
import { Select, Wrapper } from "./TaskStyled";

function ResponsibleEmployee({
  assignedEmployee,
  setAssignedEmployee,
  depChosen,
}: {
  assignedEmployee: employee | string;
  setAssignedEmployee: React.Dispatch<React.SetStateAction<employee | string>>;
  depChosen: boolean;
}) {
  const [employees, setEmployees] = useState<employee[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    try {
      const getAllEmployees = async () =>
        await axios
          .get("https://momentum.redberryinternship.ge/api/employees", {
            headers: { bearerAuth: API_TOKEN },
          })
          .then((response) => setEmployees(response.data));

      getAllEmployees();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleemployeeSelect = (employee: employee) => {
    setAssignedEmployee(employee);
  };

  if (depChosen) {
    return (
      <Wrapper style={{ gridColumn: "2/3", gridRow: "2/3" }}>
        <p style={{width: "auto"}}>პასუხისმგებელი თანამშრომელი*</p>
        <Select
          onClick={() => setOpen(!open)}
          open={open}
          style={{ width: "550px" }}
        >
          <div className="selection">
            {typeof assignedEmployee !== "string" ? (
              <span>
                {assignedEmployee.name + " " + assignedEmployee.surname}
              </span>
            ) : (
              <span>{assignedEmployee}</span>
            )}
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
  } else {
    return (
      <Wrapper>
        <p style={{width: "auto", color: "#ADB5BD" }}>პასუხისმგებელი თანამშრომელი*</p>
        <Select
          open={open}
          style={{ width: "550px", borderColor: "#ADB5BD" }}
        >
          <div className="selection">
            {typeof assignedEmployee !== "string" ? (
              <span>
                {assignedEmployee.name + " " + assignedEmployee.surname}
              </span>
            ) : (
              <span>{assignedEmployee}</span>
            )}
            <span>
              <img
                className="dropdown-arrow"
                src={`./assets/images/disabled-arrow.svg`}
                alt="dropdown arrow"
              />
            </span>
          </div>
        </Select>
      </Wrapper>
    );
  }
}

export default ResponsibleEmployee;
