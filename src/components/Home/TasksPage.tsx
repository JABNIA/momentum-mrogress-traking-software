import { useEffect, useState } from 'react'
import axios from 'axios'
import { status } from '../../types/types'
import styled from 'styled-components'
import Filters from './Filters'

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
        <Filters />
        <TaskManagementWrapper>
            {
                statuses?.map(status => {
                    return (
                        <TaskStatuses key={status.id}>
                            <StatusTitle id={status.id}>
                                {status.name}
                            </StatusTitle>
                        </TaskStatuses>
                    )
                })
            }
        </TaskManagementWrapper>
    </HomeWrapper>
  )
}

export default HomePage

const HomeWrapper = styled.main`
    padding: 0 120px;
`
const TaskManagementWrapper = styled.section`

    display: flex;
    justify-content: space-between;
`

const TaskStatuses =styled.section`
    width: 382px;
    height: 1042px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`

const StatusTitle = styled.p<{id:number}>`
    width: 381px;
    height: 54px;
    font-size: 20px;
    color: #FFFFFF;
    background: ${(props) => props.id === 1 ? "#F7BC30" :  props.id === 2 ? "#FB5607" : props.id === 3 ? "#FF006E" : props.id === 4 && "#3A86FF"};
    border-radius: 10px;
    text-align: center;
    padding: 15px 0;
    box-sizing: border-box;
`