import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Landing from './components/Landing/Landing';

function App() {
   const [characters, setCharacters] = useState([]);
   const [login, setLogin] = useState(false);

   const handleLogin = (userData) => {
      const miEmail = "meli@gmail.com"
      const miPass = "Hola123"

      if(userData.email === miEmail && userData.password === miPass){
         setLogin(true)
         navigate("/home")
      }
   }

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const navigate = useNavigate();

   useEffect(()=>{
      !login && navigate("/")
   }, [login])

   const onClose = (id) => {
      setCharacters(
        characters.filter((char) => {
          return char.id !== Number(id)
        })
      )
     }
   
   const location = useLocation();

     
   const isHome = location.pathname === "/";


   return (
      <div className='App'>
         {!isHome && <Nav onSearch={onSearch} />}
         <Routes>
            <Route path="/" element={<Landing handleLogin={handleLogin} />}/>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
         </Routes>
      </div>
   );
}

export default App;
