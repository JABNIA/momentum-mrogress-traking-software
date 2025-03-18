import React, { useState } from "react"
import { Background, Inputs, Modal } from "./EmployeeStyled"
import { Button } from "../Header/HeaderStyled"
import { API_TOKEN } from "../Home/TasksPage"
import axios from "axios"
import { department } from "../../types/types"

function NewEmployee({setModal}: {setModal: React.Dispatch<React.SetStateAction<boolean>>}) {
    const [name, setName] = useState<string>("")
    const [surname, setSurname] = useState<string>("")
    const [department, setDepartment] = useState<string>("")
    

    const handleAddNewEmployee = () => {
        setModal(true);
        createEmployee(name, surname, department);
    }

    const handleCloseModal = () => {
        setModal(false);
        setName("");
        setSurname("");
        setDepartment("");
    }

    return (
        <>
        <Background>
            <Modal>
                <div className="close-btn" onClick={handleCloseModal}>
                    <img src="./assets/images/cross.svg" alt="cross" style={{}}/>
                </div>
                <h1 className="heading">თანამშრომლის დამატება</h1>
                <Inputs>
                    <div className="name-surname">
                        <div className="input-wrapper">
                            <label htmlFor="name">სახელი*</label>
                            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="surname">გვარი*</label>
                            <input type="text" name="surname"  value={surname} onChange={(e) => setSurname(e.target.value)}/>
                        </div>
                    </div>
                    <div className="input-wrapper for-avatar">
                        <label htmlFor="avatar">ავატარი*</label>
                        <input className="avatar" type="file" name="avatar" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="department">
                            დეპარტამენტი*
                        </label>
                        <input type="text" name="department"  value={department} onChange={(e) => setDepartment(e.target.value)}/>
                    </div>
                </Inputs>
                <div className="buttons-container">
                    <Button bg="#FFFFFF" color="#000000" border={"true"} onClick={handleCloseModal}>გაუქმება</Button>
                    <Button bg="#8338EC" color="#FFFFFF" border={"false"} onClick={handleAddNewEmployee}>დაამატე თანამშრომელი</Button>
                </div>
            </Modal> 
        </Background>
        </>
        )
    }

export default NewEmployee

async function createEmployee(name: string, surname: string, employeeDepartment: string){
    const departmentId = await axios.get("https://momentum.redberryinternship.ge/api/departments", {headers:{bearerAuth: API_TOKEN}})
    .then(response => response.data).then(data => data.filter((element:department) => element.name === employeeDepartment))
    const newEmployee = {
        name: name,
        surname: surname,
        avatar: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        department_id: departmentId[0].id
    };
    console.log(newEmployee)
    axios.post("https://momentum.redberryinternship.ge/api/employees", newEmployee, {headers:{Authorization: `Bearer ${API_TOKEN}`}}) 
}