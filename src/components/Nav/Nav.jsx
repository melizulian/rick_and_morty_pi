import React  from 'react';
import style from './Nav.module.css';
import SearchBar from '../SearchBar/SearchBar';
import { useNavigate } from 'react-router-dom';


const Nav = ({onSearch}) => {
    const navigate = useNavigate();
    return(
        <div className={style.nav}>
            
            <div className={style.menu}>
                <button className={style.button} onClick={() => navigate("/home")}>Home</button>
                <button className={style.button} onClick={() => navigate("/about")}>About</button>
                <button className={style.button} onClick={() => navigate("/favorites")}>Favorites</button>
                <button className={style.button} onClick={() => onSearch(Math.ceil(Math.random()*285) + 1 ) }>Random</button>
                {/* <button onClick={() => navigate(-1)}>Back</button> */}
            </div>
            <div className={style.search}>
                    <SearchBar  onSearch={onSearch}/>
            </div>
            
        </div>
    )
}

export default Nav;