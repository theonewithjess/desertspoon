let initialState = {
   user: [],
   isAuthenticated: false,
   searchFoods: [] 
}

const USER_LOGGED_IN = 'USER_LOGGED_IN'
const USER_LOGGED_OUT = 'USERA_LOGGED_OUT'
const SEARCH_FOODS = 'SEARCH_FOODS'

export default function reducer(state = initialState, action){
    switch(action.type) {

        case USER_LOGGED_IN:
            return { ...state, isAuthenticated: true, user: action.payload }
        
        case USER_LOGGED_OUT:
            return { ...state, isAuthenticated: false, user: {}}

        case SEARCH_FOODS:
            return { ...state, searchFoods: action.payload}
        default:
            return state;

    }
}

export function userLoggedIn(user){
    return{
        type: USER_LOGGED_IN,
        payload: user
    }
}

export function userLoggedOut(){
    return{
        type: USER_LOGGED_OUT
    }
}

export function searchFoods(foods){
    return{
        type: SEARCH_FOODS,
        payload: foods
    }
}