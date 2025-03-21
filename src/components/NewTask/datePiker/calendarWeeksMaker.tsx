import { CalendarDate } from "../../../types/types";

  
  export function getWeeks(year: number, month: number) {
    //ამ თვის დღეები
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    //ამ თვის, პირველი რიცხვის, პირველი კვირის დღე 
    const FirstDateDay = new Date(year, month, 1).getDay();
    //წინა თვის დღეების რაოდენობა
    const previousMonthDays = new Date(year, month, 0).getDate();
    //წინა თვის, ბოლო კვირის ორშაბათის რიცხვი. +2 საჭიროა რადგან ორი ინდექსის ჯამი გვაქვს 
    const lastMonthDays = FirstDateDay === 0 ? 6 : FirstDateDay - 1; 
    const nextMonthDaysCount = 42 - (lastMonthDays + daysInMonth);

    const daysInMonthArray:CalendarDate[] = []
    //მასივში ემატება წინა თვის დღეები ემატება 
    for (let i = lastMonthDays; i > 0; i--){
      daysInMonthArray.push({month: month - 1, date: previousMonthDays - i + 1});
    }  
    //მიმდინარე თვის დღეები
    for (let i = 1; i <= daysInMonth; i++){
      daysInMonthArray.push({month, date: i});
    }
    //შემდეგი თვის დღეები
    for (let i = 1; i <= nextMonthDaysCount; i++){
      daysInMonthArray.push({month: month + 1, date: i});
    }
    //ყოველ კვირას წარმოადგენს 1 მასივი
    const weeks: CalendarDate[][] = [];
    for(let i = 0; i<6; i++){
      weeks.push(daysInMonthArray.slice(i * 7, i * 7+7));
    }
    //ბრუნდება ექვსი, 7 რიცხვიანი მასივი. 
    return weeks;
  }
  
