import { useState } from 'react';
import style from './Landing.module.css'
import validation from './validation';
import gif from './rick-and-morty-driving.gif'


const Landing = ({handleLogin}) => {

    const [formState, setFormState] = useState({
        email: "meli@gmail.com",
        password: "Hola123",
    })

    const [formErrors, setFormErrors] = useState({})


    const handleChange = (event)=>{
       const property = event.target.name
       const value = event.target.value 

       setFormState({...formState, [property]: value})

       setFormErrors(validation({...formState, [property]: value}))
    }

    const handleSubmit = e => {
        e.preventDefault()
        if(Object.keys(formErrors) == 0) {
            handleLogin(formState)
        }
    }

    return(
        <div className={style.first}>
            <div className={style.second}>
                <form action="" className={style.inputContainer} onSubmit={handleSubmit}>
                <div>
                    <img src={gif} alt="" className={style.gif}/>
                </div>
                    <div className={style.formDiv}>
                        <div className={style.inputDiv}>
                            <label className={style.labelText} htmlFor="email">Email:</label>
                            <input 
                            type="text"
                            name="email"
                            value={formState.email}
                            onChange={handleChange}
                            className={style.soloInput}
                            />
                            <p className={style.error}>{formErrors.email}</p>
                        </div> 
                        <div className={style.inputDiv}>
                            <label className={style.labelText}htmlFor="password">Password:</label>
                            <input 
                            type="password"
                            name="password"
                            value={formState.password}
                            onChange={handleChange}
                            className={style.soloInput}
                            />
                            <p className={style.error}>{formErrors.password}</p>
                        </div> 
                    </div>
                    <button className={style.myButton} type='submit'>Login</button>
                </form>
            </div>
        </div>
    ) 
}

export default Landing;