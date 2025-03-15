import { useState } from "react";
import { Calendar, DateSelection } from "./TaskStyled";
import { CalendarDate } from "../../types/types";

function DateSelect() {
  const today = new Date();
  const [dateString, setDateString] = useState<string>("DD/MM/YYYY");
  const [calendarOpened, setCalendarOpened] = useState<boolean>(true);

  return (
    <div style={{ gridColumn: "2/3", gridRow: "3/4" }}>
        <p>დედლაინი*</p>
      <DateSelection >
        <img src="./assets/images/calendar.svg" alt="calendar icon" onClick={() => setCalendarOpened((curr) => !curr)} />
        <span>{dateString}</span>
      </DateSelection>
      {calendarOpened && (
        <Calendar>
          <div>
            <Months today={today} />
          </div>
          <div>
            <DateTable today={today} />
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

function Months({ today }: { today: Date }) {
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

  return (
    <select name="months">
      {months.map((month, index) => {
        return (
          <option selected={index === today.getMonth() ? true : false}>
            {`${month} ${
              new Date().getMonth() > index
                ? today.getFullYear() + 1
                : today.getFullYear()
            }`}
          </option>
        );
      })}
    </select>
  );
}

function DateTable({ today }: { today: Date }) {
  const weeks = getWeeks();

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
                return <td className={
                    today.getMonth() === day.month ? "current-month" : "other-Month"} >{day.date}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function getWeeks() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const thisMonthLastDateDay = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    daysInMonth
  ).getDay();
  const thisMonthFirstDateDay = new Date(
    today.getFullYear(),
    today.getMonth(),
    1
  ).getDay(); //ამ თვის პირველი რიცხვის, კვირის დღე
  const previousMonthDays = new Date(
    today.getFullYear(),
    today.getMonth(),
    0
  ).getDate(); //წინა თვის დღეების რაოდენობა
  const lastMonthLastWeekMondayDate =
    previousMonthDays - thisMonthFirstDateDay + 2; //წინა თვის ბოლო კვირის ორშაბათი. +2 რადგან, ორი ინდექსის ჯამი არ გვაძლევს ზუსტ კალენდარულ რიცხვს

  const daysInMonthArray = Array.from(
    {
      length:
        daysInMonth + thisMonthFirstDateDay - 1 + thisMonthLastDateDay + 2,
    },
    (_: number, i: number) => {
      if (i + 1 < thisMonthFirstDateDay) {
        return {month: month - 1, date: lastMonthLastWeekMondayDate + i};
      } else {
        if (daysInMonth > i + 1 - thisMonthFirstDateDay) {
          return {month:month, date:i + 2 - thisMonthFirstDateDay};
        } else {
          return {month:month + 1, date: i + 2 - daysInMonth - thisMonthFirstDateDay};
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
