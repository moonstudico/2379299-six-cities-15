import {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Offer } from '../../types/offer';
import useMap from '../map/use-map';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import { City } from '../../types/offer';

type Props = {
  currentCity: City;
  points: Offer[];
  activeCardId: string | undefined;
}

function Map({currentCity, points, activeCardId}: Props) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, currentCity);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        leaflet
          .marker({
            lat: point.location.latitude,
            lng: point.location.longitude,
          }, {
            icon: (point.id === activeCardId)
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, points, activeCardId, currentCustomIcon, defaultCustomIcon]);

  return (
    <div
      style={{height: '500px'}}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
