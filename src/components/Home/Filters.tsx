import axios from "axios";
import { useEffect, useState } from "react";
import { API_TOKEN } from "./TasksPage";
import { department, employee, Filters, priority } from "../../types/types";
import { FilterList, FormWrapper, LiOptions, OprionsWrapper, SelectContainer } from "./tasksStyled";
import { bgColor, formatDepartment,} from "../component function logics/switches";

function FiltersComponent({
  allFilters,
  setAllFilters,
}: {
  allFilters: Filters;
  setAllFilters: React.Dispatch<React.SetStateAction<Filters>>;
}) {
  const [filter, setFilter] = useState<string>("");

  const everyFilterSet = new Set(allFilters.department.concat(allFilters.priority))  
  allFilters.employee !== "" ? everyFilterSet.add(allFilters.employee) : "" 
  const everyFilterArr = [...everyFilterSet] 

    const objectTarget = (filter: string) => {
        if (allFilters.department.includes(filter)){
            return "department"
        }
        if (allFilters.priority.includes(filter)){
            return "priority"
        }
        if(allFilters.employee === "employee"){
            return "employee"
        }
    }

    const handleDeleteFilter = (categoryToRemove: string | undefined, value:string) => {
        switch (categoryToRemove){
            case "department":
                setAllFilters(curr => {return {...curr, department: curr.department.filter(str => str !== value)}})
                break; 
            case "priority":
                setAllFilters(curr => {return {...curr, priority: curr.priority.filter(str => str !== value)}})
                break; 
            case "employee":
                setAllFilters(curr => {return {...curr, employee: ""}})
                break;
            default: 
                break;
            }
      };

  return (
    <>
      <FormWrapper>
        <div onClick={() => setFilter("დეპარტამენტები")}>
          დეპარტამენტები <img src="./assets/images/Shape.svg" alt="" />
        </div>
        {filter === "დეპარტამენტები" && (
          <FilterSelect
            url="https://momentum.redberryinternship.ge/api/departments"
            token={API_TOKEN}
            setFilter={setFilter}
            setAllFilters={setAllFilters}
          />
        )}

        <div onClick={() => setFilter("პრიორიტეტები")}>
          პრიორიტეტები <img src="./assets/images/Shape.svg" alt="" />
        </div>
        {filter === "პრიორიტეტები" && (
          <FilterSelect
            url="https://momentum.redberryinternship.ge/api/priorities"
            token={API_TOKEN}
            setFilter={setFilter}
            setAllFilters={setAllFilters}
          />
        )}

        <div onClick={() => setFilter("თანამშრომელი")}>
          თანამშრომელი <img src="./assets/images/Shape.svg" alt="" />
        </div>
        {filter === "თანამშრომელი" && (
          <FilterSelect
            url="https://momentum.redberryinternship.ge/api/employees"
            token={API_TOKEN}
            setFilter={setFilter}
            setAllFilters={setAllFilters}
          />
        )}
      </FormWrapper>
      <FilterList>
         {
         everyFilterArr.length !== 0 ?
         everyFilterArr.map((filter: string) => (
          <li key={filter}>
            {formatDepartment(filter)}
            <img
              src="./assets/images/X-cross.svg"
              alt="close button"
              onClick={() => handleDeleteFilter(objectTarget(filter), filter)}
            />
          </li>
          ))
          :
          null
        }
      </FilterList>
    </>
  );
}

function FilterSelect({
  url,
  token,
  setFilter,
  setAllFilters,
}: {
  url: string;
  token: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  setAllFilters: React.Dispatch<React.SetStateAction<Filters>>;
}) {
  const [allItems, setAllItems] = useState<
    department[] | employee[] | priority[]
  >([]);

  useEffect(() => {
    try {
      const getData = async () => {
        await axios
          .get(url, { headers: { Authorization: `Bearer ${token}` } })
          .then((data) => {
            console.log(data);
            setAllItems(data.data);
          });
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleSetFilter = () => {
    setFilter("");
  };

  return (
    <>
      <SelectContainer>
        <OprionsWrapper>
          {allItems?.map((item: department | employee | priority) => {
            return (
              <ListItem
                item={item}
                setAllFilters={setAllFilters}
              />
            );
          })}
        </OprionsWrapper>
        <button onClick={handleSetFilter}>არჩევა</button>
      </SelectContainer>
    </>
  );
}

function ListItem({
  item,
  setAllFilters,
}: {
  item: department | employee | priority;
  setAllFilters: React.Dispatch<React.SetStateAction<Filters>>;
}) {
  const [checked, setChecked] = useState<boolean>(false);

  const handleClick = (FilterCategory: string, value: string) => {
    setChecked((curr) => !curr);
   
    switch (FilterCategory) {
      case "department":
        setAllFilters((curr) => {
          return { ...curr, department: [...curr.department, value] };
        });
        break;
      case "priority":
        setAllFilters((curr) => {
          return { ...curr, priority: [...curr.priority, value] };
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

  if ("surname" in item) {
    return (
      <LiOptions key={item.id} color="var(--text-color2)" check={checked}>
        <input
          type="checkbox"
          value={item.name + " " + item.surname}
          name="employee"
        />
          <label htmlFor="employee" 
          onClick={() => handleClick("department", `${item.name}`)}
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
  } else {
    return (
      <LiOptions key={item.id} color={bgColor(item.id)} check={checked}>
        <input
          type="checkbox"
          value={item.name}
          name="depatrment"
          checked={checked}
        />
        <label
          htmlFor="depatrment"
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
    );
  }
}

export default FiltersComponent;
