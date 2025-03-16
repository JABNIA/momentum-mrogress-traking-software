import { createContext, useState } from "react";
import { Calendar, DateSelection } from "../TaskStyled";
import Months from "./Months";
import { CalendarContextValues } from "../../../types/types";


export const CalendarContext = createContext<CalendarContextValues | null>(null);


function DateSelect() {
  const today = new Date();
  const [calendarOpened, setCalendarOpened] = useState<boolean>(false);
  const [month, setMonth] = useState<number>(today.getMonth());
  const [year, setYear] = useState<number>(today.getFullYear());
  const [dateString, setDateString] = useState<string>("DD/MM/YYYY");
  
  return (
    <div style={{ gridColumn: "2/3", gridRow: "3/4" }}>
      <p>დედლაინი*</p>
      <CalendarContext.Provider value ={{
        today,
        calendarOpened,
        month,
        year,
        dateString,
        setCalendarOpened,
        setMonth,
        setYear,
        setDateString
      }}
        >
      <DateSelection>
        <img
          src="./assets/images/calendar.svg"
          alt="calendar icon"
          onClick={() => setCalendarOpened((curr) => !curr)}
        />
        <span>{dateString}</span>
      </DateSelection>
      {calendarOpened && (
        <Calendar>
          <div>
            <Months />
          </div>
          {/* <div>
            <DateTable />
          </div> */}
          <div className="buttons">
            <button onClick={() => setCalendarOpened(false)}>Cancel</button>
            <button onClick={() => setDateString("DD/MM/YYYY")}>Ok</button>
          </div>
        </Calendar>
      )
    }
    </CalendarContext.Provider>
      </div>
  );
}



export default DateSelect;
