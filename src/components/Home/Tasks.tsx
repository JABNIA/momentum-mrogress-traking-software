import { useEffect, useState } from 'react'
import { API_TOKEN } from './TasksPage'
import { task } from '../../types/types'
import axios from 'axios'

function Tasks() {
    const [tasks, setTasks] = useState<task[] | null>(null)

    useEffect(() => {
        try{
            const getTasks = async () => await axios.get("https://momentum.redberryinternship.ge/api/tasks", {
                headers: {
                    bearerAuth: `Bearer ${API_TOKEN}`
                }
            }).then(data => {
                console.log(data.data)
                setTasks(data.data)})    

            getTasks()
        }catch (error) {
            console.log(error)
        }

    })
    console.log(tasks)
  return (
    <div>
      {/* {tasks?.map(task => <p>{task.name}</p>)} */}
    </div>
  )
}

export default Tasks
