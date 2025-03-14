import { useEffect, useState } from 'react'
import { department, employee, priority, status } from '../../types/types'
import Priorities from './Priorities'
import Status from './Status'
import { TaskName, TaskDescription } from './Inputs'
import Department from './Department'
import ResponsibleEmployee from './ResponsibleEmployee'
import { FormWrapper } from './TaskStyled'

function NewTask() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState<string>("")
  // const [deadline, setDeadline] = useState('')
  const [assignedEmployee, setAssignedEmployee] = useState<employee | null>(null)
  const [dep, setDep] = useState<department>({
    id: 1,
    name: "ადმინისტრაციის დეპარტამენტი"
  })
  const [status, setStatus] = useState<status>({
    id: 1,
    name:"დასაწყები"
  })
  const [priority, setPriority] = useState<priority>({
    id:2, 
    name: 'საშუალო',
    icon: "https://momentum.redberryinternship.ge/storage/priority-icons/Medium.svg",
  })
  
  useEffect(() => {
    try{
    }catch (error) {  
        console.log(error)
      }}, [])


  return (
    <FormWrapper>
      <form action="post">
        
        <TaskName name={name} setName={setName}/>
        <Department department={dep} setDepartment={setDep}/>

        <TaskDescription description={description} setDescription={setDescription}/>
        {assignedEmployee !== null && 
        <ResponsibleEmployee assignedEmployee={assignedEmployee}
         setAssignedEmployee={setAssignedEmployee}/>}
        
        <div className='priority-status'>
          <Priorities priority={priority} setPriority={setPriority}/>
          <Status status={status} setStatus={setStatus}/>
        </div>
        <div className='input-wrapper deadline'>
          <label htmlFor="">დედლაინი</label>
          <input type="date" />
        </div>
      </form>

      <button>დავალებვის შექმნა</button>
    </FormWrapper>
  )
}

export default NewTask


