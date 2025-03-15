import { useState } from "react";
import { Calendar, DateSelection } from "./TaskStyled";

function DateSelect() {
  const today = new Date()
  const year = today.getFullYear();
//   const date = today.getDate()
  const [dateString, setDateString] = useState<string>("DD/MM/YYYY");
  const [calendarOpened, setCalendarOpened] = useState<boolean>(true);


  return (
    <div style={{gridColumn: "2/3", gridRow: "3/4"}}>
      <DateSelection onClick={() => setCalendarOpened((curr) => !curr)}>
        <img src="./assets/images/calendar.svg" alt="calendar icon" />
        <span>{dateString}</span>
      </DateSelection>
      {calendarOpened && <Calendar>
        <div>
            <Months today={today}/>
        </div>
        <div>
            <DateTable today={today}/>
        </div>
        </Calendar>}
        <button onClick={()=> setDateString("DD/MM/YYYY")}>Ok</button>
    </div>
  );
}

function Months({today}:{today: Date}){
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

      return(
            <select name="months">
                {months.map((month, index) => {
                    return (
                        <option selected={index === today.getMonth() ? true : false}>
                            {`${month} ${new Date().getMonth() > index ? today.getFullYear() + 1 : today.getFullYear() }`}
                        </option>
                    )    
                })}
            </select>
      )
}


function DateTable({today}: {today: Date}){
    const previousMonthDays = new Date(today.getFullYear(), today.getMonth(), 0).getDate(); //წინა თვის დღეების რაოდენობა
    const todayWeekday = today.getDay(); //კვირის რომელი დღეა დღეს
    const thisMonthDays = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate(); // ამ თვის დღეების რაოდენობა
    const thisMonthFirstDateDay = new Date(today.getFullYear(), today.getMonth(), 1).getDay(); //ამ თვის პირველი რიცხვის, კვირის დღე
    const lastMonthLastWeekMondayDate = previousMonthDays - thisMonthFirstDateDay + 2; //წინა თვის ბოლო კვირის ორშაბათი. +2 რადგან აკლდება ორშაბათი და კვირის დღევანდელი დღე
    const thisMontLastDateDay = new Date(today.getFullYear(), today.getMonth() + 1, thisMonthDays).getDay()
    
    // console.log(previousMonthDays, "წინა თვის დღეები")
    // console.log(todayWeekday, "კვირის დღ დღეს")
    // console.log(thisMonthDays, "ამ თვის დღეები")
    // console.log(thisMonthFirstDateDay, "ამ თვის პირველი დღის კვირის დღე ")
    // console.log(lastMonthLastWeekDays, "წინა თვის ბოლო კვირის ორშაბათის რიცხვი")
    console.log(getWeeks())
   
    
   
    return(
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
                {/* {
                //უნდა გადაკეთდეს ისე, რომ აბრუნებდეს ელემენტებს უკვე დაანგარიშებული მნიშვნელობებით
                Array.from({length: thisMonthDays + thisMonthFirstDateDay - 1 + thisMontLastDateDay + 2}, (_, i) => 
                    lastMonthLastWeekMondayDate + i <= previousMonthDays ?
                        <td key = { i + 1 }> { lastMonthLastWeekMondayDate + i} </td> :
                        thisMonthDays < i - thisMontLastDateDay ? i - (thisMonthDays + thisMonthFirstDateDay - 2) : 
                        <td>{ i - thisMonthFirstDateDay + 2 }</td>
                    )
                } */}


                </tbody>
            </table>
        
    )
}

function getWeeks(){
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const daysInMonth = new Date(year, month+1, 0).getDate()
    const thisMonthLastDateDay = new Date(today.getFullYear(), today.getMonth() + 1, daysInMonth).getDay()
    const thisMonthFirstDateDay = new Date(today.getFullYear(), today.getMonth(), 1).getDay(); //ამ თვის პირველი რიცხვის, კვირის დღე
    const previousMonthDays = new Date(today.getFullYear(), today.getMonth(), 0).getDate(); //წინა თვის დღეების რაოდენობა
    const lastMonthLastWeekMondayDate = previousMonthDays - thisMonthFirstDateDay + 2; //წინა თვის ბოლო კვირის ორშაბათი. +2 რადგან აკლდება ორშაბათი და კვირის დღევანდელი დღე
    
    const daysInMonthArray = Array.from({length:daysInMonth + thisMonthFirstDateDay - 1 + thisMonthLastDateDay + 2 }, (_, i)=> 
        thisMonthFirstDateDay > i ?  lastMonthLastWeekMondayDate + i : 
        daysInMonth < i - thisMonthFirstDateDay ?
        i - daysInMonth + 2 - thisMonthLastDateDay : i + 1
    )

    console.log(daysInMonthArray)

}

export default DateSelect;
