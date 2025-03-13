import React from 'react'

function TaskName({setName}: {setName: React.Dispatch<React.SetStateAction<string>>}) {
  
    const handleInput = (value: string) => {
        setName(value)
    }

    return (
        <div className='input-wrapper'>
        <label htmlFor="">სათაური*</label>
        <input type="text" onChange={(e) => handleInput(e.target.value)} />
      </div>
  )
}

export default TaskName
