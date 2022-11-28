import MapGl, { Layer, NavigationControl, Source } from 'react-map-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import maplibreGl from 'maplibre-gl'
import AllLands from './AllLands'
import SelectedLandPoly from '../Home/LocationBasedSuitablity/Components/LandDetails/Components/Map/SelectedLandPoly'
import DrawButtons from './DrawButtons'
import GeocoderControl from './geocoder.control'
import LandsCard from './LandsCard'
import DetailCard from './DetailCard'
import Indices from './Indices'
export default () => {
  // const saturl = 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
  const saturl = 'https://3-aerial-maps.eos.com/{z}/{x}/{y}/256/jpg?apiKey=vFdpBKVUQzxEEpXgepekV0isePWTcOI8vYFp86GL73o'



  return (
    <div className="w-screen relative ">



      <div className='relative h-[80vh] transition-all w-full  items-center flex flex-col z-10 '>

        <div className='relative flex w-full h-full '>

          <LandsCard />


          <MapGl
            antialias
            mapLib={maplibreGl}
            style={{ width: '100%', height: '100%', position: 'relative' }}
            mapStyle="https://demotiles.maplibre.org/style.json"
            initialViewState={{
              latitude: 33.75,
              longitude: 72.85,
              zoom: 12,
            }}

          >
            <Source type="raster" id="satellite" tiles={[saturl]} tileSize={256}>
              <Layer type="raster" id="satellite" source="satellite" />
            </Source>
            <DrawButtons />
            <Indices />
            <AllLands />

            <SelectedLandPoly />
            <GeocoderControl position='top-right' mapboxAccessToken='pk.eyJ1IjoidW1lcmJpbGFsIiwiYSI6ImNrdWdnc3VqeDIzdm0ybm1vdWpyMWpjOGMifQ.HOeTyMNM9ZFJ2Ai5OJi7FQ' />
            <NavigationControl />
          </MapGl>




        </div>

        
      </div>
      <div className='flex w-screen'>
          <DetailCard />
        </div>
    </div>
  )
}