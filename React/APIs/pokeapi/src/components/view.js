import React, {useState} from 'react'
import axios from 'axios'

const View = (props) =>{
    const [poke, setPoke] = useState([]);


    function callAPI() {
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807")
        .then(response=>{
                setPoke([response.data])
            })}




    return(
        <div>
            <h1>Poke API</h1>
            <ul>
            <button onClick={callAPI}>Fetch pokemon</button>
                {poke.map((pokemon,i)=>{
                    return <li key={i}>{pokemon.name}</li>
                })}
            </ul>
        </div>
    )
}

export default View