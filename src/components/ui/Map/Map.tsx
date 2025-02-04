'use client';

import { FC, useEffect, useState } from 'react';
import {
  GeoJSON,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from 'react-leaflet';

import { Icon, type LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';

import styles from './Map.module.scss';

// import countriesBorders from './counties.json';

const Map: FC = () => {
  const positionUkraine: LatLngExpression = [49.8408, 31.08615];
  const positionThai: LatLngExpression = [14.3842834, 100.6068409];
  const zoomDefault = 2;
  const [countriesBorders, setCountriesBorders] = useState(null);

  const mapMarker = new Icon({
    iconUrl: '/favicon/favicon.svg',
    iconSize: [27, 26],
  });
  useEffect(() => {
    fetch('/countries.json', { cache: 'force-cache' })
      .then((res) => res.json())
      .then((data) => {
        setCountriesBorders(data);
      });
  }, []);

  function LocationMarker() {
    const [position, setPosition] = useState<LatLngExpression | null>(null);
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        // map.flyTo(e.latlng, map.getZoom());
      },
    });

    return position === null ? null : (
      <Popup position={position}>You are here</Popup>
    );
  }
  return (
    <div className={styles.wrapper}>
      <MapContainer
        style={{ height: '100%' }}
        center={positionUkraine}
        zoom={zoomDefault}
        attributionControl={false}
        scrollWheelZoom={false}
        // zoomControl={false}
        maxZoom={4}
        minZoom={zoomDefault}
        worldCopyJump={true}
      >
        {/* <MapAddress positionDefault={positionDefault} zoomDefault={zoomDefault} /> */}
        <TileLayer
          url='https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png'
          subdomains='abcd'
        />
        {countriesBorders && (
          <GeoJSON
            data={countriesBorders}
            style={{
              fillColor: '#F1A21E',
              color: '#F1A21E',
              fillOpacity: 0.75,
            }}
          ></GeoJSON>
        )}
        <Marker position={positionUkraine} icon={mapMarker}></Marker>
        {/* <LocationMarker /> */}
      </MapContainer>
    </div>
  );
};

export default Map;
