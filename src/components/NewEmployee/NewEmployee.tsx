import React, { useState } from "react"
import { Background, Inputs, Modal } from "./EmployeeStyled"
import { Button } from "../Header/HeaderStyled"
import { API_TOKEN } from "../Home/TasksPage"
import axios from "axios"
import { department } from "../../types/types"

function NewEmployee({setModal}: {setModal: React.Dispatch<React.SetStateAction<boolean>>}) {
    const [name, setName] = useState<string>("");
    const [surname, setSurname] = useState<string>("");
    const [department, setDepartment] = useState<string>("");
    const [file, setFile] = useState<File | null>(null);

    
    const handleAddNewEmployee = () => {
        setModal(false);
        handleCreateEmployee();
    }

    const handleCloseModal = () => {
        setModal(false);
        setName("");
        setSurname("");
        setDepartment("");
    }

    const handleCreateEmployee= async () => {
        const departmentId = await axios.get("https://momentum.redberryinternship.ge/api/departments", {headers:{bearerAuth: API_TOKEN}})
        .then(response => response.data)
        .then(data => data.filter((element:department) => element.name === department))

        const newEmployee = new FormData() 
        if (file) {
        newEmployee.append('name', name);
        newEmployee.append('surname', surname);
        newEmployee.append('avatar', file);
        newEmployee.append('department_id', departmentId[0].id);
        }

        console.log(newEmployee)
        axios.post("https://momentum.redberryinternship.ge/api/employees", newEmployee, {headers:{Authorization: `Bearer ${API_TOKEN}`}}) 
    }
    
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        
        console.log(file)
        
        if(file){
            setFile(file)
        }
        
    }
    return (
        <>
        <Background style={{zIndex: 20}}>
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

                        <div className="avatar-container">
                        {file ? 
                            <>
                                <img className="uploaded-Image" src={uploadedFile(file)} alt="Upload avatar" />
                                <img className="delete-icon" src="./assets/images/delete-image.svg" alt="Delete Avatat" onClick={() => setFile(null)}/>
                            </>
                        :
                            <>
                                <img className="avatar-img" src="./assets/images/avatar-upload.svg" alt="Upload avatar" onClick={() => setAvatar()}/>
                                <p className="upload-text">ატვირთე ფოტო</p>
                            </>
                        }
                            <input className="avatar-input" id="fileInput" type="file" name="avatar" onChange={handleFileChange} />
                        </div>
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

function uploadedFile(image: File){
    const uploadedImage = URL.createObjectURL(image)
    return uploadedImage;
}


function setAvatar(){
    document.getElementById("fileInput")?.click()
}