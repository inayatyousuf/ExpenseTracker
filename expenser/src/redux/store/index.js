import {combineReducers, createStore} from 'redux'
import { expenseReducer } from '../reducers/expenses'

const reducer = combineReducers({
    expenses : expenseReducer,
})

const initailState = {}
const store = createStore(reducer, initailState)

export default store

