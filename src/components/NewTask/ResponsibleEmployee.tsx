import React, { useEffect, useState } from "react";
import { department, employee } from "../../types/types";
import axios from "axios";
import { API_TOKEN } from "../Home/TasksPage";
import { Select, Wrapper } from "./TaskStyled";
import { useOutletContext } from "react-router-dom";

function ResponsibleEmployee({
  assignedEmployee,
  setAssignedEmployee,
  depChosen,
  department,
}: {
  assignedEmployee: employee | string;
  setAssignedEmployee: React.Dispatch<React.SetStateAction<employee | string>>;
  depChosen: boolean;
  department: department;
}) {
  const [employees, setEmployees] = useState<employee[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const {setModal} = useOutletContext
  <{ setModal: React.Dispatch<React.SetStateAction<boolean>> }>();


  useEffect(() => {
    try {
      const getAllEmployees = async () =>
        await axios.get("https://momentum.redberryinternship.ge/api/employees", {
            headers: { Authorization: `Bearer ${API_TOKEN}` },
          })
          .then((response) => setEmployees(response.data));
      getAllEmployees();
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log(employees)
  const handleemployeeSelect = (employee: employee) => {
    setAssignedEmployee(employee);
  };

  if (depChosen) {
    return (
      <Wrapper style={{zIndex: "5"}}>
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
            <>
              <button className="add-employee" onClick={()=> setModal(true)}>
                <span className="circle">+</span><span >დაამატე თანამშრომელი</span>
              </button>
              <ul className="variants-container">
                {employees.filter(employee => employee.department.id === department.id)
                .map((item) => (
                  <li
                  key={item.id}
                  onClick={() => {
                    setOpen(false);
                    handleemployeeSelect(item);
                  }}
                  >
                    <span className="name">{item.name + " " + item.surname}</span>
                  </li>
                ))}
              </ul>
            </>
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
              <span></span>
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
