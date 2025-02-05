import {
  Dispatch,
  type FC,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { GeoJSON, useMap } from 'react-leaflet';

import type { Feature } from 'geojson';
import {
  type LatLngExpression,
  type Layer,
  type LeafletMouseEvent,
} from 'leaflet';

const GeoJSONComponent: FC<{
  changeMarkerPosition: Dispatch<SetStateAction<LatLngExpression>>;
}> = ({ changeMarkerPosition }) => {
  const map = useMap();
  const [countriesBorders, setCountriesBorders] = useState(null);
  const [feature, setFeature] = useState<Feature | null>(null);

  useEffect(() => {
    fetch('/countries.json', { cache: 'force-cache' })
      .then((res) => res.json())
      .then((data) => {
        setCountriesBorders(data);
      });

    // for remove InfoControl panel
    // const removeInfoControl = (e: MouseEvent) => {
    //   const target = e.target as HTMLElement | null;
    //   if (
    //     !target?.closest('.leaflet-interactive') &&
    //     !target?.closest('.leafletCustomInfo')
    //   ) {
    //     setFeature(null);
    //   }
    // };

    // window.addEventListener('click', removeInfoControl);
    // return () => {
    //   window.removeEventListener('click', removeInfoControl);
    // };
  }, []);

  function clickOnFeature(e: LeafletMouseEvent) {
    setFeature(e.target.feature);
    // !!!IMPORTANT!!! When you add new country add param countryMidpoint with coordinates where marker will move
    changeMarkerPosition(e.target.feature?.properties?.countryMidpoint);
    // map.fitBounds(e.target.getBounds());
  }

  function onEachFeature(feature: Feature, layer: Layer) {
    layer.on({
      click: clickOnFeature,
    });
  }

  // move to separate component if approve
  function InfoControl() {
    // Memoize the minimap so it's not affected by position changes
    const info = useMemo(
      () => (
        <div className='h4 text-white-400'>
          Hello, {feature?.properties?.name}
        </div>
      ),
      [],
    );

    return (
      <div className='leaflet-top leaflet-right'>
        <div className='leaflet-control leaflet-bar leafletCustomInfo'>
          {info}
        </div>
      </div>
    );
  }

  if (countriesBorders) {
    return (
      <>
        <GeoJSON
          data={countriesBorders}
          style={{
            fillColor: '#F1A21E',
            color: '#F1A21E',
            fillOpacity: 0.75,
          }}
          onEachFeature={onEachFeature}
        ></GeoJSON>
        {/* {feature && <InfoControl />} */}
      </>
    );
  } else {
    return null;
  }
};

export default GeoJSONComponent;
