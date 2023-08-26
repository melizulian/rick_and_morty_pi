import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./About.module.css"
import image from "./about.jpg"



const About = () => {
    const navigate = useNavigate();
    return(
        <div>
            <div className={style.container}>
                <img src={image} className={style.img} alt="" />
                <div >
                    <h1>About Me</h1>
                    <p className={style.text}>My name is Melina Rodriguez, I am from Rosario, Argentina and I am 29 years old. I am a Full Stack Web Developer student at Henry, and this is my Rick and Morty individual project.</p>
                    <p className={style.text}>I am a technical and literary English-Spanish translator, I have always been language-oriented. I started this path in the programming world because I realised that not only it is the future, but also it involves a lot of languages, which is what I love. It is a big challenge for me, as I have never studied anything related to programming or programming languages, but I am learning a lot everyday and working towards becoming a web developer.</p>
                    <p className={style.text}>I hope everyone enjoys my App!</p>
                </div>
            </div>
            
            <button className={style.button} onClick={() => navigate(-1)}>Back</button>
        </div>
    )
}

export default About;