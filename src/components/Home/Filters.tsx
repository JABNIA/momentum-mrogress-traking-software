import { useEffect, useState } from 'react'
import styled from 'styled-components';
import { API_TOKEN } from './TasksPage';
import axios from 'axios';
import { department } from '../../types/types';

//ფილტრის კრიტერიუმებს ვიღებთ FilterSelect კომპონენტებიდან ობიექტში {departments: [], priorities: [], employees: []} 
//შემდეგ როდესაც გავფილტრავთ დავალებებს, ვარჩევთ კონკრეტული დავალების და ვნახავთ მისი მნიშვნელობები არსებობს თუ არა ობიექტის მასივებში 
//თუ კი დავალებას დავტოვებთ გამოტანილს 


function Filters() {
    // const [departments, setDepartments] = useState< department[] | null >(null)
  return (
    <FormWrapper>
        <FilterSelect name="დეპარტამენტები" url="https://momentum.redberryinternship.ge/api/departments" token={API_TOKEN}/>
        <FilterSelect name="პრიორიტეტები" url="https://momentum.redberryinternship.ge/api/priorities" token={API_TOKEN}/>
        <FilterSelect name="თანამშრომელი" url="https://momentum.redberryinternship.ge/api/employees" token={API_TOKEN}/>
    </FormWrapper>
  )
}


function FilterSelect({name, url, token}:{name: string, url: string, token: string}) {
    const [open, setOpen] = useState<boolean>(false)
    const [allItems, setAllItems] = useState<department[]>([])

    useEffect(() => {
        try {
            const getData = async () => {
                await axios.get(url, {headers: {bearerAuth: token}})
            .then(data => {
                console.log(data)
                setAllItems(data.data)})
            }
            getData()
        } catch (error) {
            console.log(error)
        }   
    }, [])

    return (
        <>
        <div onClick={() => setOpen(!open)}>
            {name}
        </div>
        {open &&
        <SelectContainer>
            <OprionsWrapper>
                {allItems?.map(item => {
                    return (
                        <li key={item.id}>
                            {item.name} <img src="./images/shape.svg" alt="" />
                        </li>
                    )
                })}
            </OprionsWrapper>
            <button>არჩევა</button>
        </SelectContainer>
        }
        </>  
      )}





export default Filters;

const FormWrapper = styled.div`
    position: relative;
    width: 688px;
    height: 44px;
    margin: 52px 0 79px;
    display: flex;
    justify-content: space-between;
    border: 1px solid #DEE2E6;
    border-radius: 10px;
`

const SelectContainer = styled.div`
    position: absolute;
    top: 55px;
    width: 688px;
    height: 298px;
    padding: 40px 30px 20px;
    background-color: #FFFFFF;
    border: 1px solid #8338EC;
    border-radius: 10px;
    box-sizing: border-box;
`

const OprionsWrapper = styled.ul`
    width: 688px;
    height: 178px;
    padding: 0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    row-gap: 22px;
    overflow-y: auto;
    list-style: none;

    li {
        font-family: FiraGO;
        font-size: 16px;
        font-weight: normal;
    }
`
    
