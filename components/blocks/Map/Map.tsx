'use client';
import React from 'react';
import { useTranslations } from 'next-intl';
import { YMaps, Map, Placemark } from 'react-yandex-map';

interface IMapSection {
  long: number;
  lat: number;
}

export const MapSection: React.FC<IMapSection> = (props) => {
  const t = useTranslations();

  return (
    <YMaps>
      <Map
        defaultState={{
          center: [props.lat, props.long],
          zoom: 15,
        }}
        //controls={["zoomControl"]}
        //width={"100%"}
        width={'100%'}
        height={'100%'}
      >
        <Placemark geometry={[props.lat, props.long]} />
      </Map>
    </YMaps>
  );
};
