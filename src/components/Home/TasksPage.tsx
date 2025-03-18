import { useEffect, useState } from 'react'
import axios from 'axios'
import { status } from '../../types/types'
import Filters from './Filters'
import { HomeWrapper, StatusTitle, TaskManagementWrapper, TaskStatuses } from './tasksStyled'
import Tasks from './Tasks'

export const API_TOKEN = "9e698a66-2544-43b5-bdba-60bbee3de2f5"


function HomePage() {
    const [statuses, setStatuses] = useState<status[] | null>(null);

    useEffect(() => {
        try{
            const getStatuses = async () => await axios.get("https://momentum.redberryinternship.ge/api/statuses", {
                headers: {
                    bearerAuth: `Bearer ${API_TOKEN}`
                }
            }).then(data => {
                setStatuses(data.data)
            }) 
            
            getStatuses()
        } catch (error) {
            console.log(error)
        }
    }, []) 

  return (
    <HomeWrapper>
        <p style={{fontSize: "34px  "}}>დავალებების გვერდი</p>
        {/* <Filters /> */}
        <TaskManagementWrapper>
            {
                statuses?.map(status => {
                    return (
                        <TaskStatuses key={status.id}>
                            <StatusTitle id={status.id}>
                                {status.name}
                            </StatusTitle>
                            <Tasks status={status}/>
                        </TaskStatuses>
                    )
                })
            }
        </TaskManagementWrapper>
    </HomeWrapper>
  )
}

export default HomePage
