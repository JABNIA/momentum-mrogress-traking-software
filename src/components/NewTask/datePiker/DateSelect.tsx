import React, { useState } from "react";
import { Calendar, DateSelection } from "../TaskStyled";
import { CalendarDate, dynamicDatesProps } from "../../../types/types";

function DateSelect() {
  const today = new Date();
  const [calendarOpened, setCalendarOpened] = useState<boolean>(true);
  const [month, setMonth] = useState<number>(today.getMonth());
  const [year, setYear] = useState<number>(today.getFullYear());
  const [dateString, setDateString] = useState<string>("DD/MM/YYYY");
  
  return (
    <div style={{ gridColumn: "2/3", gridRow: "3/4" }}>
      <p>დედლაინი*</p>
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
            <Months
              today={today}
              year={year}
              month={month}
              setYear={setYear}
              setMonth={setMonth}
            />
          </div>
          <div>
            <DateTable 
              today={today} 
              month={month} 
              year={year} 
              setDateString={setDateString}/>
          </div>
          <div className="buttons">
            <button onClick={() => setCalendarOpened(false)}>Cancel</button>
            <button onClick={() => setDateString("DD/MM/YYYY")}>Ok</button>
          </div>
        </Calendar>
      )}
    </div>
  );
}

function Months({ today, year, month, setYear, setMonth }: dynamicDatesProps) {
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

  const monthsOfYear = months.map((monthName: string, index: number) => {
    return {
      id: index + 1,
      month: monthName,
      yearCount:
        index < today.getMonth()
          ? today.getFullYear() + 1
          : today.getFullYear(),
    };
  });
  const [selectedMonth, setSelectedMonth] = useState<{id:number, month: string, yearCount: number}>(monthsOfYear[month])
  
  const handleChangeMonth = (changer : boolean) =>{
    const index = monthsOfYear.findIndex(month => month.id === selectedMonth.id)
    const newObject = changer ? 
          monthsOfYear[index === 0 ? index : index - 1] : 
          monthsOfYear[index === 11 ? index : index + 1];

    setSelectedMonth(newObject)
    setMonth(monthsOfYear.findIndex(month => month.id === selectedMonth.id))
  }

  return (
    <>
      <select name="months" onChange={() => {}}>
        {monthsOfYear.map((monthObj, index) => {
          return (
            <option
              key={monthObj.id}
              selected={monthObj.id === selectedMonth.id ? true : false }
            >
              {monthObj.month} {monthObj.yearCount}
            </option>
          );
        })}
      </select>
      <div>
        <img
          src="./assets/images/calendar-arrow-up.svg"
          alt="Arrow up"
          onClick={() => handleChangeMonth(true)}
        />
        <img 
          src="./assets/images/calendar-arrow-down.svg" 
          alt="Arrow down" 
          onClick={() => handleChangeMonth(false)}
        />
      </div>
    </>
  );
}

function DateTable({
  today,
  month,
  year,
  setDateString
}: {
  today: Date;
  month: number;
  year: number;
  setDateString: React.Dispatch<React.SetStateAction<string>>
}) {
  const weeks = getWeeks(year, month);
  return (
    <table>
      <thead>
        <th>ო</th>
        <th>ს</th>
        <th>ო</th>
        <th>ხ</th>
        <th>პ</th>
        <th>შ</th>
        <th>კ</th>
      </thead>
      <tbody>
        {weeks.map((week) => {
          return (
            <tr>
              {week.map((day) => {
                return month === day.month ? (
                  day.date < today.getDate() ? 
                  <td className={"current-month"}>
                      {day.date}
                  </td>
                  :
                  <td className={"current-month"} 
                    onClick={() => setDateString(`${day.date}.${day.month}.${year}`)}
                    >
                    {day.date}
                  </td>
                ) : (
                  month >= day.month ? 
                    <td className={"other-month"}>
                      {day.date}
                    </td>
                    :
                    <td className={"other-month"}
                      onClick={() => setDateString(`${day.date}.${day.month}.${year}`)}
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
  );
}

function getWeeks(year: number, month: number) {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const thisMonthLastDateDay = new Date(year, month + 1, daysInMonth).getDay();
  const thisMonthFirstDateDay = new Date(year, month, 1).getDay(); //ამ თვის პირველი რიცხვის, კვირის დღე
  const previousMonthDays = new Date(year, month, 0).getDate(); //წინა თვის დღეების რაოდენობა
  const lastMonthLastWeekMondayDate =
    previousMonthDays - thisMonthFirstDateDay + 2; //წინა თვის ბოლო კვირის ორშაბათი. +2 რადგან, ორი ინდექსის ჯამი არ გვაძლევს ზუსტ კალენდარულ რიცხვს

  const daysInMonthArray = Array.from(
    {
      length:
        daysInMonth + thisMonthFirstDateDay - 1 + thisMonthLastDateDay + 2,
    },
    (_: number, i: number) => {
      if (i + 1 < thisMonthFirstDateDay) {
        return { month: month - 1, date: lastMonthLastWeekMondayDate + i };
      } else {
        if (daysInMonth > i + 1 - thisMonthFirstDateDay) {
          return { month: month, date: i + 2 - thisMonthFirstDateDay };
        } else {
          return {
            month: month + 1,
            date: i + 2 - daysInMonth - thisMonthFirstDateDay,
          };
        }
      }
    }
  );

  const weekArrays = (array: CalendarDate[], size: number): CalendarDate[][] =>
    Array.from({ length: 6 }, (_, index): CalendarDate[] => {
      return array.slice(index * size, index * size + size);
    });

  return weekArrays(daysInMonthArray, 7);
}

export default DateSelect;
