export const color = (task: number) => {
  switch (task) {
    case 2:
      return "#FB5607";
    case 3:
      return "#FF006E";
    case 4:
      return "#3A86FF";
    default:
      return "#F7BC30";
  }
};

export const fontColor = (priority: number) => {
  switch (priority) {
    case 1:
      return "#08A508";
    case 3:
      return "#FA4D4D";
    default:
      return "#FFBE0B";
  }
};
export const bgColor = (department: number) => {
  switch (department) {
    case 1:
      return "#08a590";
    case 3:
      return "#FF66A8";
    case 4:
      return "#FD9A6A";
    case 5:
      return "#f01111";
    case 6:
      return "#26ee4a";
    case 7:
      return "#fa1de6";
    default:
      return "#FFBE0B";
  }
};

export const dateFormatorForTaskPage = (dateString: string | undefined) => {
  if (dateString) {
    const date = new Date(dateString);
    const dayGeo = weekdayGeorgian(date.getDay());
    const monthDate =
      date.getDate() < 10 ? "0" + date.getDate() : `${date.getDate()}`;
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${dayGeo} - ${monthDate}/${month}/${year}`;
  }
};

export const dateFormatorForHomePage = (dateString: string | undefined) => {
  if (dateString) {
    const date = new Date(dateString);
    const monthDate = date.getDate();
    const month = georgianMonth(date.getMonth());
    const year = date.getFullYear();

    return `${monthDate} ${month}, ${year}`;
  }
};

export function formatDepartment(text: string) {
  switch (text) {
    case "ადმინისტრაციის დეპარტამენტი":
      return "ადმ. დეპ.";
    case "ადამიანური რესურსების დეპარტამენტი":
      return "ადამ. რეს.";
    case "ფინანსების დეპარტამენტი":
      return "ფინანსები";
    case "გაყიდვები და მარკეტინგის დეპარტამენტი":
      return "მარკეტინგი";
    case "ლოჯოსტიკის დეპარტამენტი":
      return "ლოჯისტიკა";
    case "ტექნოლოგიების დეპარტამენტი":
      return "ტექ. დეპ.";
    case "მედიის დეპარტამენტი":
      return "მედია";
    default:
      return text;
  }
}

function georgianMonth(month: number) {
  switch (month) {
    case 0:
      return "იან";
    case 1:
      return "თებ";
    case 2:
      return "მარ";
    case 3:
      return "აპრ";
    case 4:
      return "მაი";
    case 5:
      return "ივნ";
    case 6:
      return "ივლ";
    case 7:
      return "აგვ";
    case 8:
      return "სექ";
    case 9:
      return "ოქტ";
    case 10:
      return "ნოე";
    case 11:
      return "დეკ";
    default:
      return "Invalid Month";
  }
}

function weekdayGeorgian(weekday: number) {
  switch (weekday) {
    case 1:
      return "ორშ";
    case 2:
      return "სამ";
    case 3:
      return "ოთხ";
    case 4:
      return "ხუთ";
    case 5:
      return "პარ";
    case 6:
      return "შაბ";
    case 0:
      return "კვი";
    default:
      return "Invalid Weekday";
  }
}
