import { combineReducers } from "redux";
import { ApplicationReducer } from "./ModulesReducer";
const CombineReducer = combineReducers({
    application: ApplicationReducer
})
export default CombineReducer