import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import axios from "axios"

const Planet = (props) => {

    const [data, setData] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}/?format-json`)
            .then(res => {
                console.log(res);
                setData(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, [id]);

    return(
        <div>
            <h1>{data.name}</h1>
            <p>
                Terrain: {data.terrain} <br />
                Climate: {data.climate} <br />
                Surface Water: {data.surface_water ? "true" : "false"} <br />
                Population: {data.population} <br />
            </p>
        </div>
    );

}

export default Planet