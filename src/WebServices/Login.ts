import { API } from "../config/API"
import { SETTOKEN } from "../config/API"
import { UserCheckResponse } from "../interface/user"
export const CheckPhone = async (phone:number) => {
    const req = await API.get('/login/check',{
        params : {
            phone:phone
        },
    })
    const res = await req.data as UserCheckResponse
    SETTOKEN(res.taccessToken)
    return res
}

export const AddName = async (name:string,uid:number) => {
    const req = await API.get('/login/postName',{
        params : {
            name:name,
            uid:uid
        },
    })
    const res = await req.data as UserCheckResponse
    return res
}