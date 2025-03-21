import React from "react"

export type status = {
    id: number,
    name: string
}

  export interface department {
    id: number,
    name: string 
  }

  export interface priority {
    id: number,
    name: string,
    icon: string
  }
  export type employee = {
    id: number,
    name: string,
    surname: string,
    department: {
      id:number,
      name: string,
    },
    avatar: string
  }
  export interface postRequestEmployeeType {
    name: string,
    surname: string,
    avatar: File,
    department_id: number
  }

  interface File{
    lastModified: number,
    name: string,
    size: number,
    type: string,
    webkitRelativePath: "",
  }

  export interface CalendarDate {
    month: number,
    date: number,
  }

  export interface DateSelectProps {
    dateString: string,
    setDateString: React.Dispatch<React.SetStateAction<string>>
    setValidation: React.Dispatch<React.SetStateAction<Validation>>;
  }

  export interface dynamicDatesProps {
    today: Date,
    year: number, 
    month: number,
    setYear: React.Dispatch<React.SetStateAction<number>>,
    setMonth: React.Dispatch<React.SetStateAction<number>>
  }

  export type CalendarContextValues = {
    today: Date,
    calendarOpened: boolean,
    date: number | null,
    month: number,
    year: number,
    deadline: string,
    dateString: string,
    setCalendarOpened: React.Dispatch<React.SetStateAction<boolean>>,
    setDate:  React.Dispatch<React.SetStateAction<number | null>>,
    setMonth: React.Dispatch<React.SetStateAction<number>>,
    setYear: React.Dispatch<React.SetStateAction<number>>,
    setDeadLine: React.Dispatch<React.SetStateAction<string>>,
    setDateString: React.Dispatch<React.SetStateAction<string>>;
  }

  export interface newTask {
    name: string,
      description: string,
      due_date: string,
      status_id: number,
      employee_id: number,
      priority_id: number
  }

  export type Task = {
    id: number,
    name: string,
    description: string,
    due_date: string,
    department: {
      id: number,
      name: string
    },
    employee: {
      id: number,
      name: string,
      surname: string,
      avatar: string,
      department: {
        id: number,
        name: string
      }
    },
    status: {
      id: number,
      name: string
    },
    priority: {
      id: number,
      name: string,
      icon: string
    },
    total_comments: number
  }

export type comment = {
      id: number,
      text: string,
      task_id: number,
      parent_id: number | null,
      author_avatar: string,
      author_nickname: string,
      sub_comments: [
        {
          id: number,
          text: string,
          task_id: number,
          parent_id: number,
          author_avatar: string,
          author_nickname: string,
        }
     ]
  }

export type Filters = {
  department: string[],
  priority: string[],
  employee: string
}

export interface Validation {
    name: null | boolean,
    description: null | boolean,
    department: null | boolean,
    employee:null | boolean,
    status: boolean,
    priority: boolean,
    date: null | boolean
  }

export interface NameInputProps {
  name:string, 
  setName: React.Dispatch<React.SetStateAction<string>>,
  validation: Validation
  setValidation: React.Dispatch<React.SetStateAction<Validation>>
}

export interface DescriptionInputProps {
  description:string, 
  setDescription: React.Dispatch<React.SetStateAction<string>>,
  validation: Validation,
  setValidation: React.Dispatch<React.SetStateAction<Validation>>,
}

export interface DepartmentProps {
  department: department,
  setDepartment: React.Dispatch<React.SetStateAction<department>>,
  setDepChosen: React.Dispatch<React.SetStateAction<boolean>>,
  setValidation: React.Dispatch<React.SetStateAction<Validation>>,
}

export interface EmployeeValidation {
  assignedEmployee: employee | string;
  setAssignedEmployee: React.Dispatch<React.SetStateAction<employee | string>>;
  depChosen: boolean;
  department: department;
  setValidation: React.Dispatch<React.SetStateAction<Validation>>;
}

export interface PriorityProps {
  priority: priority;
  setPriority: React.Dispatch<React.SetStateAction<priority>>;
  setValidation: React.Dispatch<React.SetStateAction<Validation>>;
}

export interface StatusProps {
  status: status | null, 
  setStatus: React.Dispatch<React.SetStateAction<status | null>>
  setValidation: React.Dispatch<React.SetStateAction<Validation>>;
}