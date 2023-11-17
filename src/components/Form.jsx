import React from 'react'
import { useState } from 'react'

const Form = (props) => {
    const {list, setList} = props
    const [toDo, setToDo] = useState ({}) // TO DO OBJECT SAVE IN STATE

    const handleChange = (e) => {
        setToDo({todo:e.target.value, complete:false}) // SET KEY VALUE PAIRS FOR EACH TO DO ITEM
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setList([...list, toDo]) // ADD NEW TO DO IN ARRAY
        setToDo({todo:""}) // NEED TO CHECK FOR CLEARING THE INPUT
    }

    return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Add a To Do: </label>
            <input type="text" onChange={handleChange} value={toDo.todo}></input> 
            <button style={{margin:5}} type="submit">Add</button>
        </form>
    </div>
    )
}

export default Form