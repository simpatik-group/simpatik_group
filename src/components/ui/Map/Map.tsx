'use client';

import { FC, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import DriftMarker from 'react-leaflet-drift-marker';

import { Icon, type LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';

import GeoJSONComponent from './GeoJSONComponent';
import styles from './Map.module.scss';

const Map: FC = () => {
  const initialCenter: LatLngExpression = [49.8408, 31.08615];
  const zoomDefault = 2;
  const [markerPosition, setMarkerPosition] =
    useState<LatLngExpression>(initialCenter);

  const mapMarker = new Icon({
    iconUrl: '/img/logoOnly.svg',
    iconSize: [31, 30],
  });

  return (
    <div className={styles.wrapper}>
      <MapContainer
        style={{ height: '100%' }}
        center={initialCenter}
        zoom={zoomDefault}
        attributionControl={false}
        scrollWheelZoom={false}
        // zoomControl={false}
        maxZoom={4}
        minZoom={zoomDefault}
        worldCopyJump={true}
      >
        <TileLayer
          url='https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png'
          subdomains='abcd'
        />
        <DriftMarker
          position={markerPosition}
          icon={mapMarker}
          duration={3000}
        />
        <GeoJSONComponent changeMarkerPosition={setMarkerPosition} />
      </MapContainer>
    </div>
  );
};

export default Map;
