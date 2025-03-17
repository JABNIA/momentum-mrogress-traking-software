import { useEffect, useState } from 'react'
import { department, employee, priority, status } from '../../types/types'
import Priorities from './Priorities'
import Status from './Status'
import { TaskName, TaskDescription } from './Inputs'
import Department from './Department'
import ResponsibleEmployee from './ResponsibleEmployee'
import { FormWrapper } from './TaskStyled'
import DateSelect from './datePiker/DateSelect'

function NewTask() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState<string>("")
  const [dateString, setDateString] = useState<string>("DD/MM/YYYY")
  const [dep, setDep] = useState<department>({
    id: 1,
    name: "ადმინისტრაციის დეპარტამენტი"
  })
  const [depChosen, setDepChosen] = useState<boolean>(false);
  const [assignedEmployee, setAssignedEmployee] = useState<employee | string>("")
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
        <Department department={dep} setDepartment={setDep} setDepChosen={setDepChosen}/>

        <TaskDescription description={description} setDescription={setDescription} />
         
        <ResponsibleEmployee assignedEmployee={assignedEmployee}
         setAssignedEmployee={setAssignedEmployee} depChosen={depChosen}/>
        
        <div className='priority-status'>
          <Priorities priority={priority} setPriority={setPriority}/>
          <Status status={status} setStatus={setStatus}/>
        </div>
        <DateSelect dateString={dateString} setDateString={setDateString}/>
      </form>

      <button>დავალებვის შექმნა</button>
    </FormWrapper>
  )
}

export default NewTask


