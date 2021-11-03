import React,{useState} from 'react'

const View = (props) =>{
    const [checked, setChecked] = useState(false);

    const handleChange=()=>{
        if (checked===false){
            setChecked(true)
        }
        else {
            setChecked(false)
        }
    }

    // function remove(stuff){
    //     setDeleter(deleter.filter(stuff))
    // }

    return(
        <ul>
            {props.items.map((stuff)=>{
                let i = 0
                return (
                <li type={'none'} >
                    
                    <input 
                        type={"checkbox"}
                        checked={checked}
                        onChange={handleChange}>
                    </input>
                    {checked ? 
                        <span style={{textDecoration: 'line-through'}}>{stuff}</span>
                        : <span>{stuff}</span>}
                    
                    <button>Delete</button>
                </li>)
            }
            )}
        </ul>
    )
}

export default View