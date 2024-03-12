import {useRef, useEffect} from 'react';
import leaflet, { LayerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Offer } from '../../types/offer';
import useMap from '../map/use-map';
import { City } from '../../types/offer';
import { ExtendedOffer } from '../../types/extended offer';

type Props = {
  currentCity: City;
  points: (Offer | ExtendedOffer)[] ;
  activeCardId: string | undefined;
  className: string;
}

function Map({currentCity, points, activeCardId, className}: Props) {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useMap(mapRef, currentCity);

  const svgIcon = encodeURIComponent('<svg width="27" height="39" xmlns="http://www.w3.org/2000/svg"><path d="M23.856 17.929a11.733 11.733 0 0 0 1.213-5.196C25.07 6.253 19.816 1 13.336 1c-1.835 0-3.643.44-5.272 1.285C2.444 5.197.248 12.113 3.16 17.733l9.736 18.792a1 1 0 0 0 1.784-.017l9.176-18.58z" fill="#4481C3" stroke="#FFF" stroke-width="2" fill-rule="evenodd"/></svg>');
  const svgIconCurrent = encodeURIComponent('<svg width="27" height="39" xmlns="http://www.w3.org/2000/svg"><path d="M23.856 17.929a11.733 11.733 0 0 0 1.213-5.196C25.07 6.253 19.816 1 13.336 1c-1.835 0-3.643.44-5.272 1.285C2.444 5.197.248 12.113 3.16 17.733l9.736 18.792a1 1 0 0 0 1.784-.017l9.176-18.58z" fill="#FF9000" stroke="#FFF" stroke-width="2" fill-rule="evenodd"/></svg>');

  const defaultCustomIcon = leaflet.icon({
    iconUrl: `data:image/svg+xml,${svgIcon}`,
    iconSize: [27, 39],
    iconAnchor: [13.5, 39],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: `data:image/svg+xml,${svgIconCurrent}`,
    iconSize: [27, 39],
    iconAnchor: [13.5, 39],
  });

  const markerLayer = useRef<LayerGroup>(new leaflet.LayerGroup());

  useEffect(() => {
    if (map) {
      map.setView([currentCity.location.latitude, currentCity.location.longitude], currentCity.location.zoom);
      markerLayer.current.addTo(map);
      return () => {
        markerLayer.current.remove();
      };
    }
  }, [map, currentCity]);

  useEffect(() => {

    markerLayer.current.clearLayers();

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
          .addTo(markerLayer.current);
      });
    }
  }, [map, points, activeCardId, currentCustomIcon, defaultCustomIcon]);

  return (
    <section className={`${className}__map map`} ref={mapRef} />
  );
}

export default Map;
