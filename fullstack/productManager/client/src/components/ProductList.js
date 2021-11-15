import React from 'react'

export default (props) => {
    return(
        <div>
            {props.products.map((product, index) =>{
                return <p key={index}><button>{product.productTitle}</button></p>
            })}
        </div>
    )
}