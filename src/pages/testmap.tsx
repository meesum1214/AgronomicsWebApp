import { Layer, Map, Source } from "react-map-gl"
import maplibregl from "maplibre-gl"
import { useMemo, useState } from "react";
import { gridPoints } from "../templates/gridPoints";

export default () => {

  const [completed, setCompleted] = useState<[]>([])
  const [pending, setPending] = useState<[]>([])

  const Basemap = 'https://basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png'
  // const Basemap = 'https://api.planet.com/basemaps/v1/mosaics'


  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[1100px] h-[700px] bg-white rounded-md shadow-3xl">
        <Map
          initialViewState={{
            longitude: 72,
            latitude: 31,
            zoom: 5
          }}
          mapLib={maplibregl}
          style={{ width: '100%', height: '100%', borderRadius: '10px' }}
        >
          <Source id="basemap" type="raster" tiles={[Basemap]} tileSize={256}>
            <Layer id='basemaplayer' type='raster' />
          </Source>
          <Points completed={completed} pending={pending} />
        </Map>
      </div>
    </div>
  );
};

const Points = ({ completed, pending }: { completed: [], pending: [] }) => {

  const points = useMemo(() => {
    return gridPoints?.features.map((item) => {
      return {
        type: "Feature",
        geometry: item.geometry,
        properties: {
          Color: completed.includes(item?.properties?.id.toString()) ? 'green' : pending.includes(item?.properties?.id.toString()) ? 'orange' : 'white',
          id: item,
        },
      }
    })
  }, [completed])

  return (
    <Source id="pointsSource" type="geojson" data={{
      type: "FeatureCollection",
      features: points
    }}>
      <Layer
        id="points"
        type="circle"
        paint={{
          "circle-radius": 5,
          "circle-color": ["get", "Color"],
          "circle-opacity": 0.8,
          "circle-stroke-width": 0,
          "circle-stroke-color": "#fff",
        }}
      />
    </Source>



  )
}