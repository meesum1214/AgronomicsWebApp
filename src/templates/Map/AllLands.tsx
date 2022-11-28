import { useLandStore } from "../../states/landState"
import { Source,Layer, useMap } from "react-map-gl"
import { useMemo } from "react"
import { useDidUpdate } from "@mantine/hooks"
import extent from 'turf-extent'


export default () => {
  const lands = useLandStore()?.lands
  const map = useMap()?.current
  const landsCollection = useMemo(() => {
    return lands?.map((land) => {
      return {
        type: "Feature",
        geometry: {
          type: "Polygon",
          coordinates: [JSON.parse(land?.geometry)],
        },
        properties: {
          id: land.id,
        },
      }
    })
  },[lands])



    useDidUpdate(() => {

        if (lands[0]) {
            const bounds = extent({ type: "FeatureCollection", features: landsCollection })
            map.fitBounds(bounds, {padding: 20});
        }

    },[landsCollection])

  return(
    <Source type="geojson" data={{ type: "FeatureCollection", features: landsCollection }}>
       <Layer
        id="land"
        type="fill"
        interactive
        paint={{
          "fill-color": "aqua",
          "fill-opacity": 0.1,
        }}
      />
      <Layer
        id="land"
        type="line"
        paint={{
          "line-color": "aqua",
          "line-opacity": 0.8,
          "line-width": 2,
        }}
      />
    </Source>

  )
}