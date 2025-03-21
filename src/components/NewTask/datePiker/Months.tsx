import { useEffect, useState } from "react";
import { useContext } from "react";
import { CalendarContext } from "./DateSelect";
import { getWeeks } from "./calendarWeeksMaker";
import { CalendarDate } from "../../../types/types";

function Months() {
  const context = useContext(CalendarContext);
  const [selectOpen, setSelectOpen] = useState<boolean>(false);
  const [def, setDefault] = useState<boolean>(true)
  const months: string[] = [
    "იანვარი",
    "თებერვალი",
    "მარტი",
    "აპრილი",
    "მაისი",
    "ივნისი",
    "ივლისი",
    "აგვისტო",
    "სექტემბერი",
    "ოქტომბერი",
    "ნოემბერი",
    "დეკემბერი",
  ];

  if (context) {
    const monthsOfYear = months.map((monthName: string, index: number) => {
      return {
        id: index + 1,
        month: monthName,
        yearCount:
          index < context.today.getMonth()
            ? context.today.getFullYear() + 1
            : context.today.getFullYear(),
      };
    });
    const daysOfWeek = ["ო", "ს", "ო", "ხ", "პ", "შ", "კ"];
    const [weeks, setWeeks] = useState<CalendarDate[][]>([]);
    const [selectedMonth, setSelectedMonth] = useState<{
      id: number;
      month: string;
      yearCount: number;
    }>(monthsOfYear[context.month]);
    
    //force update of component
    useEffect(() => {
      setWeeks(getWeeks(context.year, context.month));
    }, [selectedMonth]);
    
    //select month from dropdown
    const handleSelectMonth = (object: typeof selectedMonth) => {
      context.setMonth(object.id - 1);
      context.setYear(object.yearCount);
      setSelectedMonth(object);
    };
    
    //open months dropdown
    const handleSelectOpen = () => {
      setSelectOpen((curr) => !curr);
    };
    
    const handleSetDateString = (date:number) => {
      setDefault(false);
      context.setDate(date);
      const dateISOS = new Date(context.year, context.month, date).toISOString()
      const formatedDateString = formatDate(dateISOS)


      context.setDateString(formatedDateString)
    }
    //change months with arrows
    const handleChangeMonth = (changer: boolean) => {
      context.setDate(null)
      const index = monthsOfYear.findIndex(
        (month) => month.id === selectedMonth.id
      );
      const newObject = changer
        ? monthsOfYear[index === context.today.getMonth() ? index : index - 1]
        : monthsOfYear[index === 11 ? index : index + 1];

      setSelectedMonth(newObject);
      context?.setMonth(
        monthsOfYear.findIndex((month) => month.id === selectedMonth.id)
      );
    };

    //RETURN IS HERE!!!!!!
    return (
      <>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="months-selection" onClick={handleSelectOpen}>
            <p className="selected-month">
              {months[context.month]} {context.year} <img src="./assets/images/months-dropdown-Arrow.svg" alt="Months dropdown arrow" />
            </p>
            <ul className="month-list">
              {selectOpen &&
                monthsOfYear.map((monthObj) => {
                  return (
                    <li
                      key={monthObj.id}
                      className="option"
                      onClick={() => handleSelectMonth(monthObj)}
                    >
                      {monthObj.month} {monthObj.yearCount}
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className="month-switcher-arrows">
            <img
              style={{cursor: "pointer"}}
              src="./assets/images/calendar-arrow-up.svg"
              alt="Arrow up"
              onClick={() => handleChangeMonth(true)}
            />
            <img
              style={{cursor: "pointer"}}
              src="./assets/images/calendar-arrow-down.svg"
              alt="Arrow down"
              onClick={() => handleChangeMonth(false)}
            />
          </div>
        </div>
        <div>
          <table>
            <thead>
              {daysOfWeek.map((day, index) => (
                <th key={index}>{day}</th>
              ))}
            </thead>
            <tbody>
              {weeks.map((week, index) => {
                return (
                  <tr key={index}>
                    {week.map((day, index) => {
                      return context.month === day.month ? (
                        day.date < context.today.getDate() && 
                        day.month < context.today.getMonth() ? (
                          <td className={"current-month"} key={index}>
                            {day.date}
                          </td>
                        ) : (
                          <td key={index}
                            className={
                              def && context.date !== null ? 
                              context.date + 1 === day.date && 
                              context.month === day.month
                                ? "current-month default-deadline"
                                : "current-month"
                              :
                              context.date === day.date && 
                              context.month === day.month
                                ? "current-month default-deadline"
                                : "current-month"           
                            }
                            onClick={
                              () => handleSetDateString(day.date)
                              }
                            >
                            {day.date}
                          </td>
                        )
                      ) : context.month <= day.month ? (
                        <td className={"other-month"} key={index}>
                          {day.date}
                        </td>
                      ) : (
                        <td key={index}
                          className={context.date === day.date && 
                            context.today.getMonth() === day.month
                              ? "current-month default-deadline"
                              : "current-month"}
                          onClick={
                            () => handleSetDateString(day.date)
                          }
                        >
                          {day.date}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  } else {
    return null;
  }
}

export default Months;



function formatDate(dateString: string){
  const dateObj = new Date(dateString);
  const date = dateObj.getDate();
  const month = dateObj.getMonth();
  const year = dateObj.getFullYear();

  return `${date < 10 ? "0" + date : date}/${month < 10 ? "0" + month : month}/${year < 10 ? "0" + year : year}`

}