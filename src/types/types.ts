export type status = {
    id: number,
    name: string
}

export type task ={
    id: number,
    name: string,
    description: string,
    due_date: string,
    status: {
      id: number,
      name: string
    },
    priority: {
      id: number,
      name: string,
      icon: string
    },
    department: {
      id: number,
      name: string,
    },
    employee: {
      id: number,
      name: string,
      surname: string,
      avatar: string,
      epartment_id: number
    }
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

  export interface employee {
    name: string,
    surname: string,
    avatar: string,
    department_id: number
  }

  export interface CalendarDate {
    month: number,
    date: number,
  }

  export interface dynamicDatesProps {
    today: Date,
    year: number, 
    month: number,
    setYear: React.Dispatch<React.SetStateAction<number>>,
    setMonth: React.Dispatch<React.SetStateAction<number>>
  }