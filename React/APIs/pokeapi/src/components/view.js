import React, {useState, useEffect} from 'react'

const View = (props) =>{
    const [poke, setPoke] = useState([]);

    useEffect((poke) => {

        fetch("https://pokeapi.co/api/v2/pokemon")
        .then(res=>{
            res.json().then(data=>{
                setPoke(data.results)
            })
            .catch(err=>{console.log(err)})
            })
        .catch(err=>{console.log(err)})
        },[])


    return(
        <div>
            <h1>Poke API</h1>
            <ul>
            <button>Fetch pokemon</button>
                {poke.map((pokemon)=>{
                    return <li>{pokemon.name}</li>
                })}
            </ul>
        </div>
    )
}

export default View