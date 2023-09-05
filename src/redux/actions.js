export const ADD_FAV = "ADD_FAV"
export const REMOVE_FAV = "REMOVE_FAV"
export const FILTER_FAV = "FILTER_FAV"
export const ORDER_FAV = "ORDER_FAV"

export const addFav = (character) => {
    return {
        type: ADD_FAV,
        payload: character
    }
}

export const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id
    }
}

export const filterFav  = (gender) => {
    return{
        type : FILTER_FAV,
        payload : gender
    }
}

export const orderFav  = (gender) => {
    return{
        type : ORDER_FAV,
        payload : gender
    }
}