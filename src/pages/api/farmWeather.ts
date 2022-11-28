
import axios from "axios"
import { NextApiRequest , NextApiResponse } from "next"
export default async (req:NextApiRequest,res:NextApiResponse) => {
    const {farmid} = req.query

    // "Date": "2022-11-14T05:00:00.000Z",
    // "relative_humidity": 39.5125010074,
    // "Temp": 15.8963981508,
    // "Downward_shortwave_radiation_flux": 0,
    // "precipitable_water_entire_atmosphere": 11.5744351125,
    // "specific_humidity2": 0.0045655651,
    // "cloud_cover": 0,
    // "total_precipitation_surface": 0,
    // "u_component_of_wind": -0.4369848499,
    // "v_component_of_wind": -0.8657714544,
    // "lat": 72.99993,
    // "lon": 33.00012,
    // "point0": "645",
    // "point1": "646",
    // "point2": "702",
    // "point3": "703",
    // "point4": "704",
    // "point5": "705",
    // "point6": "708",
    // "point7": "716",
    // "point8": "717",
    // "point9": "721",
    // "point10": "722",
    // "point11": "723",
    // "point12": "724",
    // "point13": "758",
    // "point14": "765",
    // "point15": "766"


   try{
       axios.post(`http://192.168.100.17:5000/farm_weather/?id=${farmid}`)
        .then((response) => { 
            res.status(200).json(response.data.data?.map((item:any) => {
                return {
                    Date:item.Date?.split("T")[0]?.slice(5,10) + " " + item.Date?.split("T")[1]?.slice(0,5),
                    relative_humidity:item.relative_humidity,
                    Temp:item.Temp,
                    Downward_shortwave_radiation_flux:item.Downward_shortwave_radiation_flux,
                    precipitable_water_entire_atmosphere:item.precipitable_water_entire_atmosphere,
                    specific_humidity2:item.specific_humidity2,
                    cloud_cover:item.cloud_cover,
                    total_precipitation_surface:item.total_precipitation_surface,
                    u_component_of_wind:item.u_component_of_wind,
                    v_component_of_wind:item.v_component_of_wind,
                }
            }))
        })
   }
    catch(err){ 
        res.send(err)
    }
}