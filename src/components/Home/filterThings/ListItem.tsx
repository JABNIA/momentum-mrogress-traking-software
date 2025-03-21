import { useState } from "react";
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
    const [checked, setChecked] = useState<boolean>(false);
    const localStorageFilters = localStorage.getItem("filters");
    const local = localStorageFilters ? JSON.parse(localStorageFilters) : null;

    const handleClick = (FilterCategory: string, value: string) => {
      setChecked((curr) => !curr);
     
      switch (FilterCategory) {
        case "department":
          setAllFilters((curr) => {
            if (curr.department.includes(value)){
              return { ...curr, department: curr.department.filter(depName => depName !== value) };
            }else{
              return { ...curr, department: [...curr.department, value] };
            }
          });
          break;
        case "priority":
          setAllFilters((curr) => {
            if (curr.department.includes(value)){
              return { ...curr, priority: curr.priority.filter(depName => depName !== value) };
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
    };

    const checkedCheck = (key:string, value:string) => {
      switch (key){
        case "employee":
          if(local?.employee === value){
            setChecked(true)
          }else{
            setChecked(false);
          }
            break;
        case "department":
          if(local?.department.includes(value)){
            setChecked(true)
          }else{
            setChecked(false);
          }
          break;
        case "employee":
          if(local?.priotity.includes(value)){
            setChecked(true)
          }else{
            setChecked(false)
          };
            break;
        }
    }
    
    if ("surname" in item) {
      checkedCheck("employee", `${item.name} ${item.surname}`)
      return (
        <LiOptions key={item.id} color="var(--text-color2)" check={checked}>
          <input
            type="checkbox"
            value={item.name + " " + item.surname}
            name="employee"
          />
            <label htmlFor="employee" 
            onClick={() => handleClick("employee", `${item.name} ${item.surname}`)}
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
      checkedCheck("priority", `${item.name}`)

      return (
        <LiOptions key={item.id} color={bgcolor(item.id)} check={ checked }>
          <input
            type="checkbox"
            value={item.name}
            name="priorities"
            checked={checked}
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
      checkedCheck("department", `${item.name}`)

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