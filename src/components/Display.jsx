import React from 'react'

const Display = (props) => {
    const {list, setList} = props

    const handleDelete = (index) => { 
      const newList = list.filter((item,idx)=>(idx !== index)) // FILTERING THE INDEX FROM DELETE
      setList(newList) // SET THE NEW LIST
    }

    const handleToggle = (index) => {
      const editList = [...list] // MAKE A COPY OF LIST
      editList[index].complete = !editList[index].complete // UPDATE THE TRUE/FALSE VALUE
      setList(editList)
    }

    const todoComplete = { // STYLING FOR TO DO ITEM AFTER CONDITION AFTER HANDLETOGGLE
      textDecoration:"line-through"
    }

  return (
    <div>
      <h3>To Do List:</h3>
      {
        list.map((item, idx) => ( // ITERATE ON ARRAY OF OBJECTS
        <div style={{display:"flex", margin:5}}>
          <input type="checkbox" onClick ={()=>handleToggle(idx)}></input>
          <p style={item.complete ? todoComplete: null}>{item.todo}</p>  
          <button style={{margin:5}} onClick={()=>handleDelete(idx)}>Delete</button> 
        </div> // DELETE NEEED AN INDEX
        ))
      }
    </div>
  )
}

export default Display