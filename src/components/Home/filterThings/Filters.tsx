
import { useState } from "react";
import { API_TOKEN } from "../TasksPage";
import { Filters } from "../../../types/types";
import { FilterList, FormWrapper } from "../tasksStyled";
import FilterSelect from "./FilterSelect";
// import { formatDepartment,} from "../../component function logics/switches";

function FiltersComponent({
  allFilters,
  setAllFilters,
}: {
  allFilters: Filters;
  setAllFilters: React.Dispatch<React.SetStateAction<Filters>>;
}) {
  //აკონტროლებს რომელი ფილტრის ფანჯარა გახსნას
  const [filter, setFilter] = useState<string>("");
  //ყველა ფილტრიდან ამოიღებს მხოლოდ უნიკალურ მნიშვნელობებს და გადასცემს მასივს
  const everyFilterSet = new Set(allFilters.department.concat(allFilters.priority))  
  allFilters.employee !== "" ? everyFilterSet.add(allFilters.employee) : "" 
  //ამას
  
    //აკონტროლებს სად წაშალოს ფილტრი მასზე ხელმეორედ დაჭერისას
    // const objectTarget = (filter: string) => {
    //     if (allFilters.department.includes(filter)){
    //         return "department"
    //     }
    //     if (allFilters.priority.includes(filter)){
    //         return "priority"
    //     }
    //     if(allFilters.employee === filter){
    //         return "employee"
    //     }
    // }

    //შლის ფილტრს
    // const handleDeleteFilter = (categoryToRemove: string | undefined, value:string) => {

    //     switch (categoryToRemove){
    //         case "department":
    //             setAllFilters(curr => {return {...curr, department: curr.department.filter(Name => Name !== value)}} )
    //             localStorage.setItem("filters", JSON.stringify(allFilters))
    //             break; 
    //         case "priority":
    //           setAllFilters(curr => {return {...curr, priority: curr.priority.filter(Name => Name !== value)}} )    
    //         localStorage.setItem("filters", JSON.stringify(allFilters))
    //             break; 
    //         case "employee":
    //           setAllFilters(curr => {return {...curr, employee: value}} )
                
    //         localStorage.setItem("filters", JSON.stringify(allFilters))
    //             break;
    //         default: 
    //             break;
    //         }
    //   };


      //ფილტრები მთლიანად
  return (
    <>
      <FormWrapper>
        <div onClick={() => setFilter(curr => curr === "დეპარტამენტები" ? "" : "დეპარტამენტები")}>
          დეპარტამენტები <img src="./assets/images/Shape.svg" alt="" />
        </div>
        {filter === "დეპარტამენტები" && (
          <FilterSelect url="https://momentum.redberryinternship.ge/api/departments" token={API_TOKEN} allFilters={allFilters} setFilter={setFilter} setAllFilters={setAllFilters}
            // everyFilterArr={checkLockalStorage()}
          />
        )}

        <div onClick={() => setFilter((curr => curr === "პრიორიტეტები" ? "" : "პრიორიტეტები"))}>
          პრიორიტეტები <img src="./assets/images/Shape.svg" alt="" />
        </div>
        {filter === "პრიორიტეტები" && (
          <FilterSelect url="https://momentum.redberryinternship.ge/api/priorities" token={API_TOKEN} allFilters={allFilters} setFilter={setFilter} setAllFilters={setAllFilters}
            // everyFilterArr={checkLockalStorage()}
          />
        )}

        <div onClick={() => setFilter(curr => curr === "თანამშრომელი" ? "" : "თანამშრომელი")}>
          თანამშრომელი <img src="./assets/images/Shape.svg" alt="" />
        </div>
        {filter === "თანამშრომელი" && (
          <FilterSelect url="https://momentum.redberryinternship.ge/api/employees" token={API_TOKEN} allFilters={allFilters} setFilter={setFilter} setAllFilters={setAllFilters}
            // everyFilterArr={checkLockalStorage()}
          />
        )}
      </FormWrapper>
      <FilterList>
         {
          //სია სადაც ყველა ფილტრია
          // <li key={filter}>
          //   {formatDepartment(filter)}
          //   <img
          //     src="./assets/images/X-cross.svg"
          //     alt="close button"
          //     onClick={() => handleDeleteFilter(objectTarget(filter), filter)}
          //   />
          // </li>
          // ))
          // :
          null
        }
      </FilterList>
    </>
  );
}




export default FiltersComponent;
