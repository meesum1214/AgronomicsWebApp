import MapboxDraw from '@mapbox/mapbox-gl-draw';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import { useMap } from 'react-map-gl';

import type { MapRef, ControlPosition } from 'react-map-gl';
import { useEffect } from 'react';

type DrawControlProps = ConstructorParameters<typeof MapboxDraw>[0] & {
  position?: ControlPosition;

  onCreate?: (evt: { features: object[] }) => void;
  onUpdate?: (evt: { features: object[]; action: string }) => void;
  onDelete?: (evt: { features: object[] }) => void;
};

export default function DrawControl(props: DrawControlProps) {
  const map = useMap()?.current

  var drawCTRL = new MapboxDraw({
    defaultMode: 'draw_polygon',
    displayControlsDefault: false,
    controls: {
      polygon: true,
      trash: true,
    },
    ...props,
  })

  useEffect(() => {

    if (map) {
      map.addControl(drawCTRL, 'top-right');
    }

    map?.on('draw.create', props.onCreate);
    map?.on('draw.update', props.onUpdate);
    map?.on('draw.delete', props.onDelete);

    return () => {
      map?.off('draw.create', props.onCreate);
      map?.off('draw.update', props.onUpdate);
      map?.off('draw.delete', props.onDelete);
      map?.removeControl(drawCTRL);
    }

  }, [])


  return null;
}

DrawControl.defaultProps = {
  onCreate: () => { },
  onUpdate: () => { },
  onDelete: () => { }
};