import React,{useState} from 'react'

const View = (props) =>{

    
    return(
        <ul>
            {props.items.map((stuff)=>{
                return (<li>{stuff}</li>)
            }
            )}
        </ul>
    )
}

export default View