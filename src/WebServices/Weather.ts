import {API} from '../config/API'
export const getFarmWeather = (farmId:number) => {
    return API.post(`/farm_weather/?id=${farmId}`,{
    })
}