import React, { useEffect, useState } from "react"
import { Background, Inputs, Modal } from "./EmployeeStyled"
import { Button } from "../Header/HeaderStyled"
import { API_TOKEN } from "../Home/TasksPage"
import axios from "axios"
import { department, ModalValidation } from "../../types/types"
import { Select, Wrapper } from "../NewTask/TaskStyled"

function NewEmployee({setModal}: {setModal: React.Dispatch<React.SetStateAction<boolean>>}) {
    const [name, setName] = useState<string>("");
    const [surname, setSurname] = useState<string>("");
    const [department, setDepartment] = useState<department | string>("");
    const [file, setFile] = useState<File | null>(null);
    const [departments, setDepartments] = useState<department[]>([])
    const [validation, setValidation] = useState<ModalValidation>({
        name: null,
        surname: null,
        avatar: null,
        department: null
    })
    
    useEffect(() => {
        const getDepartments = async () => await axios.get("https://momentum.redberryinternship.ge/api/departments", {headers:{bearerAuth: API_TOKEN}})
        .then(response => setDepartments(response.data))

        getDepartments()
    },[])


    const handleAddNewEmployee = () => {
        if(validation.name && 
        validation.surname && 
        validation.avatar && 
        validation.department
    ){
        setModal(false);
        handleCreateEmployee();
    } 
    }

    const handleCloseModal = () => {
        setModal(false);
        setName("");
        setSurname("");
        setDepartment("");
        setValidation({
            name: null,
            surname: null,
            avatar: null,
            department: null
    })
    }

    const handleCreateEmployee= async () => {


        const newEmployee = new FormData() 
        if (file && typeof department === "object") {
        newEmployee.append('name', name);
        newEmployee.append('surname', surname);
        newEmployee.append('avatar', file);
        newEmployee.append('department_id', department.id.toString());
        }

        axios.post("https://momentum.redberryinternship.ge/api/employees", newEmployee, {headers:{Authorization: `Bearer ${API_TOKEN}`}}) 
    }
    
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        
        console.log(file)
        
        if(file){
            setFile(file)
        }
        
    }

    const handleSetName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e?.target.value)
        setValidation(curr => {return {...curr, name: name.length >= 2 && name.length <= 255 ? true : false}})
    }

    const handleSetSurname = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSurname(e?.target.value)
        setValidation(curr => {return {...curr, surname: surname.length >= 2 && surname.length <= 255 ? true : false}})
    }

    const handleSetAvatar = () => {
        setValidation(
            (curr: ModalValidation) => {return {...curr, avatar: true}} 
        )
    }

    const handleDeleteAvatar = () => {
        setValidation(
            (curr: ModalValidation) => {return {...curr, avatar: null}} 
        )
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
                            <input type="text" name="name" value={name} onChange={(e) => handleSetName(e)} required/>
                            {
                            validation.name === null ? 
                            <>
                                <p className={`validCheck`}>მინიმუმ 2 სიმბოლო</p>
                                <p className={`validCheck`}>მაქსიმუმ 255 სიმბოლო</p>
                            </>
                            :
                            <>
                                <p className={`validCheck ${validation.name ? "valid" : "invalid"}`}>მინიმუმ 2 სიმბოლო</p>
                                <p className={`validCheck ${validation.name ? "valid" : "invalid"}`}>მაქსიმუმ 255 სიმბოლო</p>
                            </>
                            }
                        </div>

                        <div className="input-wrapper">
                            <label htmlFor="surname">გვარი*</label>
                            <input type="text" name="surname"  value={surname} onChange={(e) => handleSetSurname(e)} required/>
                            {
                            validation.name === null ? 
                            <>
                                <p className={`validCheck`}>მინიმუმ 2 სიმბოლო</p>
                                <p className={`validCheck`}>მაქსიმუმ 255 სიმბოლო</p>
                            </>
                            :
                            <>
                                <p className={`validCheck ${validation.surname ? "valid" : "invalid"}`}>მინიმუმ 2 სიმბოლო</p>
                                <p className={`validCheck ${validation.surname ? "valid" : "invalid"}`}>მაქსიმუმ 255 სიმბოლო</p>
                            </>
                            }
                        </div>
                    </div>

                    <div className="input-wrapper for-avatar">
                        <label htmlFor="avatar">ავატარი*</label>

                        <div className="avatar-container">
                        {file ? 
                            <>
                                <img className="uploaded-Image" src={uploadedFile(file)} alt="Upload avatar" />
                                <img className="delete-icon" 
                                    src="./assets/images/delete-image.svg" 
                                    alt="Delete Avatat" 
                                    onClick={() => {
                                    handleDeleteAvatar() 
                                    setFile(null)
                                    }}/>
                            </>
                        :
                            <>
                                <img className="avatar-img" 
                                    src="./assets/images/avatar-upload.svg" 
                                    alt="Upload avatar" 
                                    onClick={() =>{ 
                                    handleSetAvatar()
                                    setAvatar()
                                    }}/>
                                <p className="upload-text">ატვირთე ფოტო</p>
                            </>
                        }
                            <input className="avatar-input" id="fileInput" type="file" name="avatar" onChange={handleFileChange} required/>
                        </div>
                    </div>

                    <div className="input-wrapper">
                        <DepartmentSelect departments={departments} department={department} setDepartment={setDepartment} setValidation={setValidation}/>
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


function DepartmentSelect({departments, department, setDepartment, setValidation}:{departments: department[], department: department| string, setDepartment: React.Dispatch<React.SetStateAction<department | string>>, setValidation: React.Dispatch<React.SetStateAction<ModalValidation>>}){
    const [open, setOpen] = useState<boolean>(false)
    
    return (
        <Wrapper style={{zIndex: "10"}}>
            <p>დეპარტამენტი*</p>
            <Select onClick={() => setOpen(!open)} open={open} style={{width: "550px"}}>
          <div className="selection" >
            <span>{typeof department === "object" && department.name}</span>
            <span>
              <img
                className="dropdown-arrow"
                src={`./assets/images/arrow-${open ? "up.svg" : "down.svg"}`}
                alt="dropdown arrow"
              />
            </span>
          </div>
  
          {open && (
            <ul className="variants-container">
              {departments.map((item) => (
                <li
                  key={item.id}
                  onClick={() => {
                    setOpen(false);
                    setDepartment(item)
                    setValidation(curr => {return {...curr, department: true}})
                  }}
                >
                  <span className="name">{item.name}</span>
                </li>
              ))}
            </ul>
          )}
        </Select>
      </Wrapper>
);
}