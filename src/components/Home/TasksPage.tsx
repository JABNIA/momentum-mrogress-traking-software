import { useEffect, useState } from 'react'
import axios from 'axios'
import { Filters, status } from '../../types/types'
import { HomeWrapper, StatusTitle, TaskManagementWrapper, TaskStatuses } from './tasksStyled'
import Tasks from './Tasks'
import FiltersComponent from './filterThings/Filters'


export const API_TOKEN = "9e698a66-2544-43b5-bdba-60bbee3de2f5"


function HomePage() {
    const [statuses, setStatuses] = useState<status[] | null>(null);
    const [allFilters, setAllFilters] = useState<Filters>({department: [], priority: [], employee: ""});
    
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
    }, [allFilters]) 
    console.log(allFilters)
  return (
    <HomeWrapper>
        <p style={{fontSize: "34px  "}}>დავალებების გვერდი</p>
        <FiltersComponent allFilters={allFilters} setAllFilters={setAllFilters}/>
        <TaskManagementWrapper>
            {
                statuses?.map(status => {
                    return (
                        <TaskStatuses key={status.id}>
                            <StatusTitle id={status.id}>
                                {status.name}
                            </StatusTitle>
                            <Tasks status={status} filters={allFilters}/>
                        </TaskStatuses>
                    )
                })
            }
        </TaskManagementWrapper>
    </HomeWrapper>
  )
}

export default HomePage

export function checkLocal(){
    const filters = localStorage.getItem("filters");

    if(filters === null || JSON.parse(filters) === undefined){
        localStorage.setItem("filters", JSON.stringify({department: [], priority: [], employee: ""}))
    }
}