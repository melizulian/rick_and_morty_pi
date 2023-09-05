import { ADD_FAV, FILTER_FAV, ORDER_FAV, REMOVE_FAV } from "./actions";

const initialState = {
    favs: [],
    allFavorites: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAV:
            return{
                ...state,
                favs: [...state.favs, action.payload],
                allFavorites: [...state.allFavorites, action.payload]
            }

        case REMOVE_FAV:    
            return{
                ...state,
                favs: state.favs.filter(character => character.id !== action.payload)
            }

        case FILTER_FAV:    
            const favoriteFiltered = action.payload === "All" ? state.allFavorites : state.allFavorites.filter(char => char.gender === action.payload)
            return{
                ...state,
                favs: favoriteFiltered,
            }
        case ORDER_FAV: 
            const favoritesOrdered = state.favs.sort((a,b) => {
                return action.payload === "Ascending" ? a.id - b.id : b.id - a.id
            })
            return{
                ...state,
                favs: favoritesOrdered
            }

        default:
            return {...state}
    }
}

export default reducer