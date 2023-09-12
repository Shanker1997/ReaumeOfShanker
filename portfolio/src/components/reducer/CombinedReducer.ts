import { combineReducers } from "redux";
import { ApplicationReducer } from "./ModulesReducer";
import { formikReducer } from "../formik/formikReducer/FormikReducer";
const CombineReducer = combineReducers({
    application: ApplicationReducer,
    formikReducer:formikReducer
})
export default CombineReducer