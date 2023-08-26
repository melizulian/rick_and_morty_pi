import React  from 'react';
import style from './Nav.module.css';
import SearchBar from '../SearchBar/SearchBar';
import { useNavigate } from 'react-router-dom';


const Nav = ({onSearch}) => {
    const navigate = useNavigate();
    return(
        <div className={style.navBar}>
            <SearchBar onSearch={onSearch}/>
            <div className={style.menu}>
            <button className={style.button} onClick={() => onSearch(Math.ceil(Math.random()*285) + 1 ) }>Random</button>
            <button className={style.button} onClick={() => navigate("/about")}>About</button>
            <button className={style.button} onClick={() => navigate("/home")}>Home</button>
            {/* <button onClick={() => navigate(-1)}>Back</button> */}
            </div>
        </div>
    )
}

export default Nav;