import { NextApiRequest, NextApiResponse } from "next"

export default async (req:NextApiRequest,res:NextApiResponse) => {
    const {location} = req.query
    
    const lat = location?.split(",")[0].slice(1)
    const lng = location?.split(",")[1].slice(0,-1)
    try{
        var url = `http://192.168.100.17:8080/geoserver/agronomics/wms?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetFeatureInfo&FORMAT=application/json&TRANSPARENT=true&QUERY_LAYERS=agronomics%3AWorldSoilGpkg.gpkg&STYLES&LAYERS=agronomics%3AWorldSoilGpkg.gpkg&exceptions=application%2Fvnd.ogc.se_inimage&INFO_FORMAT=application/json&FEATURE_COUNT=50&X=50&Y=50&SRS=EPSG%3A4326&WIDTH=101&HEIGHT=101&BBOX=${parseFloat(lng)-0.01},${parseFloat(lat)-0.01},${parseFloat(lng)+0.01},${parseFloat(lat)+0.01}`

        const response = await fetch(url)
        const data = await response.json()
        res.send(data)

    }
    catch(err){
        res.send(err)
    }
}