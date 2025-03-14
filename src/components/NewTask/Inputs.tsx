import React from 'react'

export function TaskName({name, setName}: {name:string, setName: React.Dispatch<React.SetStateAction<string>>}) {
  
    const handleInput = (value: string) => {
        setName(value)
    }

    return (
        <div className='input-wrapper' style={{gridColumn: "1/2", gridRow: "1/2"}}>
            <label htmlFor="">სათაური*</label>
            <input type="text" onChange={(e) => handleInput(e.target.value)} value={name}/>
        </div>
  )
}


export function TaskDescription({description, setDescription}: {description:string, setDescription: React.Dispatch<React.SetStateAction<string>>}) {
  
    const handleInput = (value: string) => {
        setDescription(value)
    }

    return (
        <div className='input-wrapper' style={{gridColumn: "1/2", gridRow: "2/3"}}>
            <label htmlFor="description">აღწერა*</label>
            <textarea className='description' name="description" id="" value={description} onChange={(e) => handleInput(e.target.value)}></textarea>
        </div>
  )
}