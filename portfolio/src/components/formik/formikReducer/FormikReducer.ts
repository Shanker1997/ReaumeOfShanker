import { FormikTypes } from "./Types"

const intialstate={
    formstate:true
}
export const  formikReducer=(state=intialstate,action:{type:string,payload:any})=>{
    switch (action.type){
        case FormikTypes.INTIALDORMSTATE:
            return{...state,formstate:action.payload}
        default :
        return{...state}
    }

}