import React, {useEffect, useState} from 'react'
import axios from 'axios'

const View = (props) =>{
    const [poke, setPoke] = useState([]);

    // useEffect(() => {
    //     axios.get("https://pokeapi.co/api/v2/pokemon/1")
    //     .then(res=>{
    //         setPoke([res.data])
    //     })
    //     .catch(err=>{console.log(err)})
    // }, [props.poke])

    function callAPI() {
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807/")
        .then(res=>{
            // console.log(res.data.results)
            setPoke(res.data.results)
        console.log(poke)
    })

    .catch(err=>{console.log(err)})
        }

    return(
        <div>
            <h1>Poke API</h1>
            <ul>
            <button onClick={callAPI}>Fetch pokemon</button>
                {poke.map((pokemon)=>{
                    return <li>{pokemon.name}</li>
                })}
            </ul>
        </div>
    )
}

export default View