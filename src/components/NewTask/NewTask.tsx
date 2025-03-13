import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { department, priority, status } from '../../types/types'
import { API_TOKEN } from '../Home/TasksPage'
import Priorities from './Priorities'
import Status from './Status'
import TaskName from './TaskName'
import Department from './Department'

function NewTask() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState([])
  const [deadline, setDeadline] = useState('')
  const [assignee, setAssignee] = useState('')
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

        <div className='input-wrapper'>
          <label htmlFor="">აღწერა</label>
          <textarea name="description" id=""></textarea>
        </div>
        <div className='input-wrapper'>
          <label htmlFor="">პასუხისმგებელი თანამშრომელი</label>
          <input type="text" /> 
        </div>
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


const FormWrapper = styled.div`
  width: 1684px;
  height: 804px;
  margin: auto;
  padding: 65px 55px;
  background-color: #FBF9FF;
  
  form {
    box-sizing: border-box;
  }

  form {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    column-gap: 161px;
    row-gap: 55px;
  }

  .input-wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 6px;
    margin: 0 0 32px 0;
  }

  .input-wrapper > input{
    width: 550px;
    height: 45px;
    border: 1px solid #DEE2E6;
    border-radius: 5px;
    padding: 14px;
    box-sizing: border-box;
  }
  
  .deadline > input{
    width: 320px;
  }
  .input-wrapper > textarea {
    width: 550px;
    height: 133px;
    resize: none;
    border: 1px solid #DEE2E6;
    border-radius: 5px;
  }


  .priority-status {
    display: flex;
    gap: 32px;
  }

  .priority-status select {
    width: 259px;
    height: 45px;
    background-color: #FFFFFF;
    border: 1px solid #DEE2E6;
    border-radius: 5px;
    box-sizing: border-box;
    }

`