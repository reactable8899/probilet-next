import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

interface IMiniMap {
  svgElement: any;
}

export const MiniMap: React.FC<IMiniMap> = (props) => {
  const [miniMapScale, setMiniMapScale] = useState(0.1);
  const [scale, setScale] = useState(1);
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);
  const t = useTranslations();

  const svgWidth = props.svgElement?.children?.[0]?.properties?.width; // Original SVG width
  const svgHeight = props.svgElement?.children?.[0]?.properties?.height; // Original SVG height

  //  const miniMapScale = 0.05;

  const containerHeight = 700;
  const containerWidth = 1200;

  const miniMapHeight = svgHeight * miniMapScale;
  const miniMapWidth = svgWidth * miniMapScale;

  const miniMapViewX = (-positionX * miniMapScale) / scale;
  const miniMapViewY = (-positionY * miniMapScale) / scale;
  const miniMapViewWidth = (containerWidth * miniMapScale) / scale;
  const miniMapViewHeight = (containerHeight * miniMapScale) / scale;

  return (
    <div
      style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        width: `${miniMapWidth}px`,
        height: `${miniMapHeight}px`,
        border: '1px solid #000',
        overflow: 'hidden',
        background: '#eee',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: `${svgWidth * miniMapScale}px`,
          height: `${svgHeight * miniMapScale}px`,
          backgroundColor: '#fff',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: `${miniMapViewY}px`,
            left: `${miniMapViewX}px`,
            width: `${miniMapViewWidth}px`,
            height: `${miniMapViewHeight}px`,
            border: '1px solid red',
            boxSizing: 'border-box',
          }}
        ></div>
        <svg {...props.svgElement?.children?.[0]?.properties}>
          {props.svgElement?.children?.[0]?.children?.map((child: any, index: number) => {
            if (
              child.type === 'element' &&
              child.tagName === 'rect' &&
              !!child?.properties?.['sector-id']
            ) {
              return (
                <rect
                  {...child.properties}
                  key={`2${index}`}
                  x={child.properties.x * miniMapScale}
                  y={child.properties.y * miniMapScale}
                  rx={child.properties.rx * miniMapScale}
                  width={child.properties.width * miniMapScale}
                  height={child.properties.height * miniMapScale}
                />
              );
            }
            if (child.type === 'element' && child.tagName === 'rect') {
              return (
                <rect
                  {...child.properties}
                  key={`2${index}`}
                  x={child.properties.x * miniMapScale}
                  y={child.properties.y * miniMapScale}
                  rx={child.properties.rx * miniMapScale}
                  width={child.properties.width * miniMapScale}
                  height={child.properties.height * miniMapScale}
                />
              );
            }
            if (child.type === 'element' && child.tagName === 'circle')
              return (
                <circle
                  {...child.properties}
                  key={`1${index}`}
                  cx={child.properties.cx * miniMapScale}
                  cy={child.properties.cy * miniMapScale}
                  r={child.properties.r * miniMapScale}
                  //               data-id={index}
                />
              );
            else if (child.type === 'element' && child.tagName === 'rect')
              return (
                <rect
                  {...child.properties}
                  key={`2${index}`}
                  x={child.properties.x * miniMapScale}
                  y={child.properties.y * miniMapScale}
                  width={child.properties.width * miniMapScale}
                  height={child.properties.height * miniMapScale}
                />
              );
            else if (child.type === 'element' && child.tagName === 'path')
              return (
                <path
                  {...child.properties}
                  // width={Number(child.properties.width) * miniMapScale}
                  // height={Number(child.properties.height) * miniMapScale}
                  // x={child.properties.x * miniMapScale}
                  // y={child.properties.y * miniMapScale}
                  key={`3${index}`}
                />
              );
          })}
        </svg>
      </div>
    </div>
  );
};
