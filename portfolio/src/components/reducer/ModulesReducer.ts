import { Types } from "./Types";
const InitialState = {
    storeEnabled: false,
    textEditorData: null
}
export const ApplicationReducer = (state = InitialState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case Types.STORE_ENABLED:
            return { ...state, storeEnabled: action.payload }
        case Types.TEXT_EDITOR_DATA:
            return { ...state, textEditorData: action.payload }

        default:
            return { ...state }
    }



}