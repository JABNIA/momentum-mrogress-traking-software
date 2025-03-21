import { useEffect, useState } from "react";
import { department, employee, Filters, priority } from "../../../types/types";
import { bgcolor } from "../../component function logics/switches";
import { LiOptions } from "../tasksStyled";

function ListItem({
    item,
    setAllFilters,
  }: {
    item: department | employee | priority;
    setAllFilters: React.Dispatch<React.SetStateAction<Filters>>;
  }) {
    const localStorageFilters = localStorage.getItem("filters");
    const local = localStorageFilters ? JSON.parse(localStorageFilters) : null;
    const [checked, setChecked] = useState<boolean>(false);
    const [selectedEmployee, setSelectedEmployee] = useState<string | null>(null);

    useEffect(() => {

    }, [checked])



    const handleClick = (FilterCategory: string, value: string) => {
      setChecked((curr) => !curr);
     
      switch (FilterCategory) {
        case "department":
          setAllFilters((curr) => {
            const departments = new Set(curr.department)
            const depArr = [...departments]
            if (depArr.includes(value)){
              return { ...curr, department: depArr };
            }else{
              return { ...curr, department: [...curr.department, value] };
          }})
          break;
        case "priority":
          setAllFilters((curr) => {
            const priority = new Set(curr.priority)
            const priorArr = [...priority]
            if (priorArr.includes(value)){
              return { ...curr, priority: priorArr };
            }else{
              return { ...curr, priority: [...curr.priority, value] };
            }
          });
          break;
        case "employee":
          setAllFilters((curr) => {
            return { ...curr, employee: value };
          });
          break;
          default:
              break;
      }
    }    
    const employeeCheck = (empName: string) => {
      setSelectedEmployee(empName); 
    };


    if ("surname" in item) {

      return (

        <LiOptions key={item.id} color="var(--text-color2)" check={checked}>
          <input
            type="checkbox"
            className="employee-name"
            value={`${item.name} ${item.surname}`}
            name="employee"
            checked={selectedEmployee === `${item.name} ${item.surname}`}
            onChange={() => employeeCheck(`${item.name} ${item.surname}`)}
          />
          <label htmlFor="employee" 
            onClick={() => {
             setChecked(curr => !curr)
            }
            }
            >{item.name + " " + item.surname}</label>
          <svg
            width="14"
            height="10"
            viewBox="0 0 14 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.3334 1.33325L5.00008 8.66659L1.66675 5.33325"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </LiOptions>
      );
    } else if("icon" in item){
      return (
        <LiOptions key={item.id} color={bgcolor(item.id)} check={ checked }>
          <input
            type="checkbox"
            value={item.name}
            name="priorities"
            defaultChecked={checked}
          />
          <label
            htmlFor="priorities"
            onClick={() => handleClick("priority", `${item.name}`)}
          >
            {item.name}
          </label>
          <svg
            width="14"
            height="10"
            viewBox="0 0 14 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.3334 1.33325L5.00008 8.66659L1.66675 5.33325"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </LiOptions>
      );
    }else{
      return (
        <LiOptions key={item.id} color={bgcolor(item.id)} check={ checked }>
          <input
            type="checkbox"
            value={item.name}
            name="department"
            checked={checked}
          />
          <label
            htmlFor="department"
            onClick={() => handleClick("department", `${item.name}`)}
          >
            {item.name}
          </label>
          <svg
            width="14"
            height="10"
            viewBox="0 0 14 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.3334 1.33325L5.00008 8.66659L1.66675 5.33325"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </LiOptions>
        )
    }
  }
  

  export default ListItem;



