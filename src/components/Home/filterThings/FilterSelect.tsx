import axios from "axios";
import { useEffect, useState } from "react";
import { department, employee, Filters, priority } from "../../../types/types";
import { OprionsWrapper, SelectContainer } from "../tasksStyled";
import ListItem from "./ListItem";

function FilterSelect({
  url,
  token,
  allFilters,
  setFilter,
  setAllFilters,
  // everyFilterArr
}: {
  url: string;
  token: string;
  allFilters: Filters;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  setAllFilters: React.Dispatch<React.SetStateAction<Filters>>;
  // everyFilterArr: string[];
}) {
  const [allItems, setAllItems] = useState<
    department[] | employee[] | priority[]
  >([]);
  //მოაქვს დატა გაოტანებული ბმულიდან
  useEffect(() => {
    try {
      const getData = async () => {
        await axios
          .get(url, { headers: { Authorization: `Bearer ${token}` } })
          .then((data) => {
            setAllItems(data.data);
          });
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  //ამას დეტალური განხილვა სჭირდება
  const handleSetFilter = () => {
      //ლოკალურში ათავსებს ყველა არსებულ ფილტრს     
      localStorage.setItem("filters", JSON.stringify(allFilters))
      setFilter("");
    }
  

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

export default FilterSelect;