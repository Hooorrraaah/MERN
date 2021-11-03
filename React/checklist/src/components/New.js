import React, {useState} from 'react'

const NewItem=(props)=>{
    const [addItem, setAddItem]=useState('')

    const createNewItem= (e)=>{
        e.preventDefault()
        if(addItem==="") return;
        props.passItem(addItem)
        setAddItem('');
    }

    return(
        <form onSubmit={createNewItem}>
            <input 
                type='text' 
                placeholder='Add a new item here'
                onChange={(e)=>setAddItem(e.target.value)}
                value = {addItem}>
            </input>
            <input type='submit' value = 'Add'></input>
        </form>
    )
}

export default NewItem