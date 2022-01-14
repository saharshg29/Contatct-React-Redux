import { contactReducer } from "./ContactReducers";
import {combineReducers} from 'redux'

export default combineReducers({
    contacts: contactReducer,
})