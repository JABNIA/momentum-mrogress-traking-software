import { useEffect, useState } from "react";
import { useContext } from "react";
import { CalendarContext } from "./DateSelect";
import { getWeeks } from "./calendarWeeksMaker";
import { CalendarDate } from "../../../types/types";

function Months() {
  const context = useContext(CalendarContext);
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

    useEffect(() => {
        // const weeksArr = getWeeks(context.year, context.month);

        setWeeks(getWeeks(context.year, context.month))
    }, [selectedMonth])


    const handleChangeMonth = (changer: boolean) => {
      const index = monthsOfYear.findIndex(
        (month) => month.id === selectedMonth.id
      );
      const newObject = changer
        ? monthsOfYear[index === 0 ? index : index - 1]
        : monthsOfYear[index === 11 ? index : index + 1];

      setSelectedMonth(newObject);
      context?.setMonth(monthsOfYear.findIndex((month) => month.id === selectedMonth.id + 1)
      );
    };

    return (
      <>
        <div>
          <select name="months" onChange={() => {}}>
            {monthsOfYear.map(monthObj => {
              return (
                <option
                  key={monthObj.id}
                  selected={monthObj.id === selectedMonth.id ? true : false}
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
        </div>
        <div>
          <table>
            <thead>
              {daysOfWeek.map((day, index) => (
                <th key={index}>{day}</th>
              ))}
            </thead>
            <tbody>
              {weeks.map((week) => {
                return (
                  <tr>
                    {week.map((day, index) => {
                      return context.month === day.month ? (
                        day.date < new Date().getDate() ? (
                          <td className={"current-month"} key={index}>
                            {day.date}
                          </td>
                        ) : (
                          <td
                            className={"current-month"}
                            onClick={() =>
                              context.setDateString(
                                `${day.date}.${day.month}.${context.year}`
                              )
                            }
                            key={index}
                          >
                            {day.date}
                          </td>
                        )
                      ) : context.month >= day.month ? (
                        <td className={"other-month"} key={index}>
                          {day.date}
                        </td>
                      ) : (
                        <td
                          className={"other-month"}
                          onClick={() =>
                            context.setDateString(
                              `${day.date}.${day.month}.${context.year}`
                            )
                          }
                          key={index}
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
