// import Detail from "../Detail/Detail";
import { useEffect, useState } from "react";
import style from "./Card.module.css"
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";

const Card = (props) => {
   const {id, name, status, species, gender, origin, image} = props.character;
   const dispatch = useDispatch();
   
   const favs = useSelector(state => state.favs)

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      dispatch(isFav ? removeFav(id) : addFav(props.character))
      setIsFav(!isFav)
   }

   const handleClose = () => {
      props.onClose(id)
      dispatch(removeFav(id))
   }

   useEffect(() => {
      if(favs.find(character => character.id === id)) {
         setIsFav(true)
      }
   }, [favs, id])

   return (
      
      <div className={style.container}>
      <button onClick={handleFavorite} className={style.heart}><p>{isFav ? "❤️" : "🤍"}</p></button>
      {props.onClose && <button onClick={handleClose} className={style.btn}>X</button>}
      <img className={style.image} src={image} alt='' /> 
      <div className={style.containerData}>
         <Link to={`/detail/${id}`} className={style.name}><h2>{name}  ID:{id} </h2></Link>
         <div className={style.detail}>
            <h4>{species}</h4>
            <h4>{gender}</h4>
            <h4>{status}</h4>
            <h4>{origin.name}</h4>
         </div>
      </div>
   </div>
   )
}


export default Card;

