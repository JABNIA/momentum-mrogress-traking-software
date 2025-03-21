import { DescriptionInputProps, NameInputProps } from '../../types/types'

export function TaskName({name, setName, validation, setValidation}: NameInputProps) {
  
    const handleInput = (value: string) => {
        setName(value)
        setValidation(prev => {return {...prev, name: name.length > 2 &&  name.length < 255 ? true : false}})
        
    }

    return (
        <div className='input-wrapper' style={{gridColumn: "1/2", gridRow: "1/2"}}>
            <label htmlFor="">სათაური*</label>
            <input type="text" onChange={(e) => handleInput(e.target.value)} value={name}/>
            <p className={validation.name ? "valid" : "invalid"}>მინიმუმ 2 სიმბოლო</p>
            <p className={validation.name ? "valid" : "invalid"}>მაქსიმუმ 255 სიმბოლო</p>
        </div>
  )
}


export function TaskDescription({description, setDescription, validation, setValidation}: DescriptionInputProps) {
  
    const handleInput = (value: string) => {
        setDescription(value)
        setValidation(prev => {return {...prev,
             description: description.split(" ").length >= 4 ? true : false}
            })
    }

    return (
        <div className='input-wrapper' style={{gridColumn: "1/2", gridRow: "2/3"}}>
            <label htmlFor="description">აღწერა*</label>
            <textarea className='description' name="description" id="" value={description} onChange={(e) => handleInput(e.target.value)}></textarea>
            <p className={validation.description ? "valid" : "invalid"}>მინიმუმ 4 სიტყვა</p>
            <p className={validation.description ? "valid" : "invalid"}>მაქსიმუმ 255 სიმბოლო</p>
        </div>
  )
}