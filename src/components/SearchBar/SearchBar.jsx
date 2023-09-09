import { useState } from 'react';
import style from './searchBar.module.css'

export default function SearchBar(props) {
   const {onSearch} = props;

   let [input, setInput] = useState("");

   const handleChange = (event) => {
      setInput(event.target.value)
   }

   const handleSearch = (input) => {
      onSearch(input);
      setInput("")
   }

   return (
         <div className={style.container}>
            <div className={style.containerInput}>
            <input className={style.input} onChange={handleChange} value={input} type='search' placeholder='write ID...🔍' />
            <button className={style.btn} onClick={() => handleSearch(input)}>Add</button>
            
         </div>
      </div>
   );
}
