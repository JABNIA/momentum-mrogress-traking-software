import { useState } from "react";
import { Calendar, DateSelection } from "./TaskStyled";

function DateSelect() {
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
  const today = new Date()
  const year = today.getFullYear();
  const date = today.getDate()
  const daysInMonth = new Date(year, 2, 0).getDate()
  const [dateString, setDateString] = useState<string>("DD/MM/YYYY");
  const [calendarOpened, setCalendarOpened] = useState<boolean>(true);

  console.log(daysInMonth)

  return (
    <div style={{gridColumn: "2/3", gridRow: "3/4"}}>
      <DateSelection onClick={() => setCalendarOpened((curr) => !curr)}>
        <img src="./assets/images/calendar.svg" alt="calendar icon" />
        <span>{dateString}</span>
      </DateSelection>
      {calendarOpened && <Calendar>
        <div>
            <select name="months">
                {months.map((month, index) => {
                    return (
                        <option selected={index === today.getMonth() ? true : false}>
                            {`${month} ${new Date().getMonth() > index ? year + 1 : year }`}
                        </option>
                    )    
                })}
            </select>
        </div>
        <div>
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
                    
                </tbody>
            </table>
        </div>
        </Calendar>}
    </div>
  );
}



function Week() {
    return (
        <tr>
            t
        </tr>
    )
}
export default DateSelect;
