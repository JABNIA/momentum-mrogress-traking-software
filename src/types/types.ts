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
    webkitRelativePAth: "",
  }

  export interface CalendarDate {
    month: number,
    date: number,
  }

  export interface DateSelectProps {
    dateString: string,
    setDateString: React.Dispatch<React.SetStateAction<string>>
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