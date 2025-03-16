import { CalendarDate } from "../../../types/types";

  
  export function getWeeks(year: number, month: number) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const thisMonthLastDateDay = new Date(year, month + 1, daysInMonth).getDay();
    const thisMonthFirstDateDay = new Date(year, month, 1).getDay(); //ამ თვის პირველი რიცხვის, კვირის დღე
    const previousMonthDays = new Date(year, month, 0).getDate(); //წინა თვის დღეების რაოდენობა
    const lastMonthLastWeekMondayDate = previousMonthDays - thisMonthFirstDateDay + 2; //წინა თვის ბოლო კვირის ორშაბათი. +2 რადგან, ორი ინდექსის ჯამი არ გვაძლევს ზუსტ კალენდარულ რიცხვს
  
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
  
