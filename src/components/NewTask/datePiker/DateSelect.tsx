import { createContext, useEffect, useState } from "react";
import { Calendar, DateSelection } from "../TaskStyled";
import Months from "./Months";
import { CalendarContextValues } from "../../../types/types";


export const CalendarContext = createContext<CalendarContextValues | null>(null);


function DateSelect() {
  const today = new Date();
  const [calendarOpened, setCalendarOpened] = useState<boolean>(false);
  const [date, setDate] = useState<number>(today.getDate());
  const [month, setMonth] = useState<number>(today.getMonth());
  const [year, setYear] = useState<number>(today.getFullYear());
  const [deadline, setDeadLine] = useState<string>(
    new Date(today.getFullYear(),
            today.getMonth(),
            today.getDate()+1)
            .toLocaleDateString("ka-GE"))   
  const [dateString, setDateString] = useState<string>("DD/MM/YYYY")
  
  useEffect(() => {
  }, [month])

  return (
    <div style={{ gridColumn: "2/3", gridRow: "3/4" }}>
      <p>დედლაინი*</p>
      <CalendarContext.Provider value ={{
        today,
        calendarOpened,
        date,
        month,
        year,
        deadline,
        dateString,
        setCalendarOpened,
        setDate,
        setMonth,
        setYear,
        setDeadLine,
        setDateString
      }}
        >
      <DateSelection>
        <img
          className="calendar-icon"
          src="./assets/images/calendar.svg"
          alt="calendar icon"
          onClick={() => setCalendarOpened((curr) => !curr)}
        />
        <input className="deadline" 
          value={dateString} 
          onChange={(e) => {
          setDateString(e.target.value)}}
        />
      </DateSelection>
      {calendarOpened && (
        <Calendar>
          <div>
            <Months />
          </div>
          <div className="buttons">
            <button onClick={() => setCalendarOpened(false)}>Cancel</button>
            <button onClick={() => 
              setDeadLine(new Date(year, month, date).toLocaleDateString("kg-GE"))}
              >OK</button>
          </div>
        </Calendar>
      )
    }
    </CalendarContext.Provider>
      </div>
  );
}



export default DateSelect;
