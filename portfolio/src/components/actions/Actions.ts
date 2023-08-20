import { Types } from "../reducer/Types";
export const StateIntialization: any = (props: any) => {
    return ((dispacth: any) => {
        dispacth({ type: Types.STORE_ENABLED, payload: false })
    })
}