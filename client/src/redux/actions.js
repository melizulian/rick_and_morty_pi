// import axios from 'axios'
// export const ADD_FAV = "ADD_FAV"
// export const REMOVE_FAV = "REMOVE_FAV"
// export const FILTER_FAV = "FILTER_FAV"
// export const ORDER_FAV = "ORDER_FAV"
// export const FILTERANDORDER = "FILTER_AND_ORDER"


// export const addFav = (character) => {
//     const endpoint = "http://localhost:3001/rickandmorty/fav/"
//     return async (dispatch) => {
//         try {
//                 const {data} = await axios.post(endpoint, character)
//                 return dispatch({
//                     type: 'ADD_FAV',
//                     payload: data,
//                 })
//             } catch (error) {
//             console.log(error);
//         }
//     }
// }




// export const removeFav = (id) => {
//     const endpoint = "http://localhost:3001/rickandmorty/fav/" + id
//     return async (dispatch) => {
//         try {
//                 const {data} = await axios.delete(endpoint)
//                 return dispatch({
//                     type: 'REMOVE_FAV',
//                     payload: data,
//                 })
//             } catch (error) {
//             console.log(error);
//         }
//     }
// }

// export const removeFav = (id) => {
//     const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
//     return (dispatch) => {
//       axios.delete(endpoint).then(({ data }) => {
//         return dispatch({
//           type: REMOVE_FAV,
//           payload: data,
//         });
//       });
//     };
//   };


// export const filterFav = (gender) => {
//     return {
//       type: FILTER_FAV,
//       payload: gender,
//     };
// };

// export const orderFav = (order) => {
//     return {
//       type: ORDER_FAV,
//       payload: order,
//     };
// };

//   export const filterAndOrder = state => {
//     return {
//         type: FILTERANDORDER,
//         payload: state
//     }
// }


// export const ADD_FAV = "ADD_FAV"
// export const REMOVE_FAV = "REMOVE_FAV"
// export const FILTER_FAV = "FILTER_FAV"
// export const ORDER_FAV = "ORDER_FAV"

export const addFav = (character) => {
    return {
        type: 'ADD_FAV',
        payload: character
    }
}

export const removeFav = (id) => {
    return {
        type: 'REMOVE_FAV',
        payload: id
    }
}

export const filterFav  = (gender) => {
    return{
        type : 'FILTER_FAV',
        payload : gender
    }
}

export const orderFav  = (gender) => {
    return{
        type : 'ORDER_FAV',
        payload : gender
    }
}