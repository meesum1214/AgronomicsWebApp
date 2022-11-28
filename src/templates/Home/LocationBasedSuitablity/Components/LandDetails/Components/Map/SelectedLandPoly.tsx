import maplibreGl from 'maplibre-gl';
import {Source, Layer, useMap} from 'react-map-gl';
import {useDidUpdate} from '@mantine/hooks'
import { useSelectedLand } from '../../../../../../../states/selectedLand';
export default () => {
    const selectedLand = useSelectedLand()?.selectedLand?.geometry || '[]';
    const map = useMap()?.current

    useDidUpdate(() => {

        if (selectedLand !== '[]') {
            const bounds = new maplibreGl.LngLatBounds();
            JSON.parse(selectedLand).forEach((point) => {
                bounds.extend(point);
            });
            map.fitBounds(bounds, {padding: 20});
        }

    },[selectedLand])

    return (
        <Source id="selectedLand" type="geojson" data={{
            type: "FeatureCollection",
            features: [{
                type: "Feature",
                geometry: {
                    type: "Polygon",
                    coordinates: [JSON.parse(selectedLand)]
                }
            }]
        }}>
            
            <Layer
                id="selectedLandOutline"
                type="line"
                paint={{
                    'line-color': 'red',
                    'line-width': 2
                }}
            />
        </Source>
    )
}

