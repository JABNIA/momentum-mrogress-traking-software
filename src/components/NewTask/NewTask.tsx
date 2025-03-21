import { useState } from 'react'
import { department, employee, priority, status, Validation } from '../../types/types'
import Priorities from './Priorities'
import Status from './Status'
import { TaskName, TaskDescription } from './Inputs'
import Department from './Department'
import ResponsibleEmployee from './ResponsibleEmployee'
import { FormWrapper, NewTaskButtonLink } from './TaskStyled'
import DateSelect from './datePiker/DateSelect'
import axios from 'axios'
import { API_TOKEN } from '../Home/TasksPage'


function NewTask() {
  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>("")
  const [dateString, setDateString] = useState<string>("DD/MM/YYYY")
  const [dep, setDep] = useState<department>({
    id: 1,
    name: "ადმინისტრაციის დეპარტამენტი"
  })
  const [depChosen, setDepChosen] = useState<boolean>(false);
  const [assignedEmployee, setAssignedEmployee] = useState<employee | string>("")
  const [status, setStatus] = useState<status | null>({
    id: 1,
    name:"დასაწყები"
  })
  const [priority, setPriority] = useState<priority>({
    id:2, 
    name: 'საშუალო',
    icon: "https://momentum.redberryinternship.ge/storage/priority-icons/Medium.svg",
  })

  const [validation, setValidation] = useState<Validation>({
    name: null,
    description: null,
    department: null,
    employee:null,
    status: true,
    priority: true,
    date: null
  })

  const handleCreateNewTask = async () => {
    if(validation.name &&
      validation.department &&
      validation.employee &&
      validation.department &&
      validation.status &&
      validation.priority && 
      validation.date 
    ){
      await axios.post("https://momentum.redberryinternship.ge/api/tasks", {
        name: name,
        description: description,
        due_date: dateString,
        status_id: status?.id,
        employee_id: typeof assignedEmployee !== "string" ? assignedEmployee.id : null,
        priority_id: priority.id
      }, {headers:{Authorization: `Bearer ${API_TOKEN}`}})
    } else {
      return
    }
  }

  return (
    <FormWrapper>
      <form action="post">
        
        <TaskName 
          name={name} 
          setName={setName}
          validation={validation}
          setValidation = {setValidation}
        />
        <Department 
          department={dep} 
          setDepartment={setDep} 
          setDepChosen={setDepChosen}
          setValidation = {setValidation}
        />

        <TaskDescription 
          description={description} 
          setValidation={setValidation}
          validation={validation}
          setDescription={setDescription} 
        />
         
        <ResponsibleEmployee 
          assignedEmployee={assignedEmployee}
          setAssignedEmployee={setAssignedEmployee} 
          depChosen={depChosen} 
          setValidation = {setValidation}
          department={dep}
        />
        
        <div className='priority-status'>
          <Priorities 
          priority={priority} 
          setPriority={setPriority}
          setValidation = {setValidation}

          />

          <Status 
          status={status} 
          setStatus={setStatus}
          setValidation = {setValidation}
          />
        </div>

        <DateSelect 
          dateString={dateString} 
          setDateString={setDateString}
          setValidation = {setValidation}
        />
      </form>
      <NewTaskButtonLink 
        to="/"
        bg="#8338EC" 
        color="#FFFFFF" 
        border={"false"} 
        onClick={handleCreateNewTask}
        >დავალებვის შექმნა
      </NewTaskButtonLink>
    </FormWrapper>
  )
}

export default NewTask


