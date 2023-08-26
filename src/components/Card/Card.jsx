// import Detail from "../Detail/Detail";
import style from "./Card.module.css"
import { Link } from "react-router-dom";

const Card = (props) => {
   const {id, name, status, species, gender, origin, image} = props.character;
   return (
      <div className={style.container}>
         <button className={style.btn} onClick={()=> props.onClose(id)}>X</button>
         <img className={style.img} src={image} alt='' />
         <Link to={`/detail/${id}`} className={style.nameText}><h2>{name}</h2></Link>
         <div className={style.containerData}>
            <h2>{species}</h2>
            <h2>{gender}</h2>
            <h2>{status}</h2>
            <h2>{origin.name}</h2>
         </div>
      </div>
   );
}

export default Card;
