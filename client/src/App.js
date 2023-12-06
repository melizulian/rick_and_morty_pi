import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Landing from './components/Landing/Landing';
import Favorites from './components/Favorites/Favorites';
import axios from 'axios';

function App() {
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
 
   // const handleLogin = (userData) => {
   //    const miEmail = "meli@gmail.com"
   //    const miPass = "Hola123"

   //    if(userData.email === miEmail && userData.password === miPass){
   //       setAccess(true)
   //       navigate("/home")
   //    }
   // }

   const onSearch = async (id) => {
      
      try {
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         if (data.name) {
                  setCharacters((oldChars) => [...oldChars, data]);
               } else {
                  window.alert('Algo salio mal');
               }
      } catch (error) {
         console.log(error);
      }

   }

   const navigate = useNavigate();

   async function login(userData) {
      try {
         const { email, password } = userData
         const URL = "http://localhost:3001/rickandmorty/login/"
         const {data} = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data
         setAccess(data)
         access && navigate("/home")
      } catch (error) {
         console.log(error);
      }
    }

   useEffect(()=>{
      !access && navigate("/")
   }, [access, navigate])

   const onClose = (id) => {
      setCharacters(
        characters.filter((char) => {
          return char.id !== id
        })
      )
     }
   
   const location = useLocation();

     
   const isHome = location.pathname === "/";


   return (
      <div className='App'>
         {!isHome && <Nav onSearch={onSearch} />}
         <Routes>
            <Route path="/" element={<Landing handleLogin={login} />}/>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/favorites" element={<Favorites />}/>
         </Routes>
      </div>
   );
}

export default App;
