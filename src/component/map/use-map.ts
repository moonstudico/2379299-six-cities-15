import {useEffect, useState, useRef} from 'react';
import leaflet from 'leaflet';
import { City } from '../../types/offer';
import { ATTRIBUTION, TILE_LAYER } from '../../const';

function useMap(mapRef: React.RefObject<HTMLDivElement>, city: City) {
  const {location: { latitude, longitude, zoom }} = city;
  const [map, setMap] = useState <leaflet.Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: latitude,
          lng: longitude,
        },
        zoom: zoom,
      });

      leaflet
        .tileLayer(
          TILE_LAYER,
          {
            attribution: ATTRIBUTION,
          },
        )
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, latitude, longitude, zoom]);

  return map;
}

export default useMap;

