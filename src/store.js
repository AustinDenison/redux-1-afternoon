import {createStore} from 'redux'


const initialState = {
    name: '',
    category: '',
    authorFirst: '',
    authorLast: '',
    ingredients: [],
    instructions: [],
    recipes: []
}

export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY'
export const UPDATE_FIRST_NAME = 'FIRST_NAME'
export const UPDATE_LAST_NAME = 'LAST_NAME'
export const UPDATE_INGREDIENTS = 'UPDATE_INGRENDIENTS'
export const UPDATE_INSTRUCTIONS = 'UPDATE_INSTRUCTIONS'
export const ADD_RECIPES = 'ADD_RECIPES'
export const DELETE_RECIPE = 'DELETE_RECIPE'

function reducer(state = initialState, action){
    const {type, payload} = action
    switch (type){
        case UPDATE_NAME:
            return {
                ...state, name: payload
            }
        case UPDATE_CATEGORY:
            return {
                ...state, category: payload
            }
        case UPDATE_FIRST_NAME:
            return {
                ...state, authorFirst: payload
            } 
        case UPDATE_LAST_NAME:
            return {
                ...state, authorLast: payload
            }
        case UPDATE_INGREDIENTS:
            console.log('payload is', payload)
            return {
                ...state, ingredients: [...state.ingredients, payload] 
            } 
        case UPDATE_INSTRUCTIONS:
            return{
                ...state, instructions: [...state.instructions, payload]
            }
            case ADD_RECIPES:
                const {
                    name,
                    category,
                    authorFirst,
                    authorLast,
                    ingredients,
                    instructions
                } = state
                const recipe = {
                    name,
                    category,
                    authorFirst,
                    authorLast,
                    ingredients,
                    instructions
                } 
                const newRecipes = [...state.recipes, recipe] 
                return {...state, recipes: newRecipes} 
            case DELETE_RECIPE:
                return {
                    ...state, recipes: [...state.recipes.splice(1)] 
                }                 
        default:
            return state
    }
}

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())