import { useEffect, useState } from "react";
import { department, DepartmentProps } from "../../types/types";
import axios from "axios";
import { API_TOKEN } from "../Home/TasksPage";
import { Select, Wrapper } from "./TaskStyled";

function Department({
  department,
  setDepartment,
  setDepChosen,
  setValidation
}: DepartmentProps
) {
  const [departments, setDepartments] = useState<department[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    try{

        const getDepartments = async () =>
            await axios
        .get("https://momentum.redberryinternship.ge/api/departments", {
            headers: { bearerAuth: API_TOKEN },
        })
        .then((response) => setDepartments(response.data));

        getDepartments()
    }catch (error){
        console.log(error)
    }
  }, []);


  const handleDepartmentSelect = (department: department) =>{ 
    setDepartment(department)
    setValidation(prev => {return {...prev, department: true}})
  }

  return (
    <Wrapper style={{zIndex: "10"}}>
        <p>დეპარტამენტი*</p>
        <Select onClick={() => setOpen(!open)} open={open} style={{width: "550px"}}>
          <div className="selection" >
            <span>{department.name}</span>
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
              {departments.map((item) => (
                <li
                  key={item.id}
                  onClick={() => {
                    setOpen(false);
                    setDepChosen(true)
                    handleDepartmentSelect(item);
                  }}
                >
                  <span className="name">{item.name}</span>
                </li>
              ))}
            </ul>
          )}
        </Select>
      </Wrapper>
);
}

export default Department;
