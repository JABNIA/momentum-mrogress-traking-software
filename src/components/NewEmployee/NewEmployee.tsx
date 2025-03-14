import React, { useState } from "react"
import { Background, Inputs, Modal } from "./EmployeeStyled"
import { Button } from "../Header/HeaderStyled"

function NewEmployee({setModal}: {setModal: React.Dispatch<React.SetStateAction<boolean>>}) {
    const [name, setName] = useState<string>("")
    const [surname, setSurname] = useState<string>("")
    const [department, setDepartment] = useState<string>("")
    

    const handleAddNewEmployee = () => {
        setModal(false);
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
