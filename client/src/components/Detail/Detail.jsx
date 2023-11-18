import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import style from "./Detail.module.css"


const Detail = () => {
    const navigate = useNavigate();
    const {id} = useParams();

    const [character, setCharacter] = useState({});

    const URL_BASE = "http://localhost:3001/rickandmorty"

    useEffect(() => {
        setTimeout(() => {
        axios.get(`${URL_BASE}/character/${id}`)
        .then(({data}) => {
            if(!data.name) {
                window.alert("No existe un personaje con ese id")
            } else {
                setCharacter(data)
            }
        })
    }, 2000)
    }, [id])

    return !character.image? <h1 className={style.loading}>Loading character...</h1> : (
        <div className={style.container}>
             
         
         <img className={style.characterImg} src={character?.image} alt='' />
         
         <div  className={style.datos}>
            <h1 className={style.characterName} >{character?.name}</h1>
            <h2>Species: {character?.species}</h2>
            <h2>Gender: {character?.gender}</h2>
            <h2>Status: {character?.status}</h2>
            <h2>Origin: {character?.origin?.name}</h2>
            <button className={style.button} onClick={() => navigate(-1)}>Back</button>
         </div>
            
        </div>
    )
}

export default Detail;