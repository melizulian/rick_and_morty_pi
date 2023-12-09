import { useDispatch, useSelector } from "react-redux"
import Card from "../Card/Card"
import { orderFav, filterFav } from "../../redux/actions"
import { useState } from "react"
import style from "./Favorites.module.css"

const Favorites = () => {
    const favs = useSelector(state => state.favs)
    const dispatch = useDispatch()

    const [aux, setAux] = useState(false)

    const optionsGender = ["All", "Male", "Female", "Genderless", "unknown"]

    const handleFilter = (event) => {
        dispatch(filterFav(event.target.value))
    }

    const handleOrder = (event) => {
        dispatch(orderFav(event.target.value))
        setAux(!aux)
    }

    return (
        <div>
            <select className={style.select} onChange={handleOrder}>
                <option value="Ascending">Ascending</option>
                <option value="Descending">Descending</option>
            </select>

            <select className={style.select} onChange={handleFilter}>
                {optionsGender.map((option) => {
                    return <option key={option} value={option}>{option}</option>
                })}
            </select>

            <div className={style.container}>
                {favs?.map(character => <Card key={character.id}
                    character={character} />)}
            </div>
        </div>
    )
}

export default Favorites

// import { useDispatch, useSelector } from "react-redux";
// import Card from "../Card/Card";
// import { orderFav, filterFav } from "../../redux/actions";
// import { useState } from "react";
// import style from "./Favorites.module.css";

// const Favorites = () => {
//    const favs = useSelector((state) => state.favs);
//    const dispatch = useDispatch();

//    const [aux, setAux] = useState(false);

//    const optionsGender = ["All", "Male", "Female", "Genderless", "unknown"];

//    const handleFilter = (event) => {
//       dispatch(filterFav(event.target.value));
//    };

//    const handleOrder = (event) => {
//       dispatch(orderFav(event.target.value));
//       setAux(!aux);
//    };

//    return (
//       <div>
//          <select className={style.select} onChange={handleOrder}>
//             <option value="Ascending">Ascending</option>
//             <option value="Descending">Descending</option>
//          </select>

//          <select className={style.select} onChange={handleFilter}>
//             {optionsGender.map((option) => (
//                <option key={option} value={option}>
//                   {option}
//                </option>
//             ))}
//          </select>

//          <div className={style.cardsContainer}>
//             {favs?.map((character) => (
//                <Card key={character.id} character={character} />
//             ))}
//          </div>
//       </div>
//    );
// };

// export default Favorites;