import { Types } from "./Types";
const InitialState = {
    storeEnabled: false
}
export const ApplicationReducer = (state = InitialState, action: any) => {
    switch (action.type) {
        case Types.STORE_ENABLED:
            return { ...state, storeEnabled: action.payload }
        default:
            return { ...state }
    }



}