import React,{useState, useEffect}  from 'react'

const View = (props) =>{
    const [items, setItems] = useState(props.items);

    useEffect(()=>{
        if (props.items.length){
        setItems([...items,props.items[props.items.length-1]])
        }
    },[props.items])

    const handleChange=(item,i)=>{
        if (item.checked===false){
            const newItems = [...items]
            newItems[i].checked=true
            setItems(newItems)
        }
        else {
            const newItems = [...items]
            newItems[i].checked=false
            setItems(newItems)
        }
        
    }

    function remove(i) {
        setItems(items.filter((j) => j !== i));
    }

    return(
        <ul>
            {items.map((stuff,i)=>{
                return (
                <li type={'none'} >
                    
                    <input 
                        type="checkbox"
                        checked={stuff.checked}
                        onChange={() => {handleChange(stuff,i)} }>
                    </input>
                    {stuff.checked ? 
                        <span style={{textDecoration: 'line-through'}}>{stuff.task}</span>
                        : <span>{stuff.task}</span>}
                    
                    <button onClick ={() => {remove(stuff,i)}}>Delete</button>
                </li>)
            }
            )}
        </ul>
    )
}

export default View