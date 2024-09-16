'use-client';
import React, { memo, useRef, FC, useState } from 'react';
import { useTranslations } from 'next-intl';
import { TransformWrapper, TransformComponent, useControls } from 'react-zoom-pan-pinch';
// components
import { CustomLoader } from '@/components/custom/CustomLoader/CustomLoader';
import NoRowModal from './NoRowModal';
// api
import { useGetApiV1EventpriceruleEventId } from '@/api/requests/event-price-rule/event-price-rule';
import { useGetApiV1CartMy } from '@/api/requests/cart/cart';
import { useGetApiV1EventsiteschemeId } from '@/api/requests/event-site-scheme/event-site-scheme';
import { useGetApiV1EventId } from '@/api/requests/event/event';
// store
import { useAuthStore } from '@/store/useAuthStore';
// utils
import { useQueryParams } from '@/hooks/useQueryParams';
import { customUpdateSearchParams } from '@/lib/utils';
// icons
import { MinusIcon, PlusIcon } from 'lucide-react';
import { STEPS } from '@/constants/enums';

interface IProps {
  getPrice: (seat: number, row: number, sector: number) => number;
  isPlaceSold: (rowId: number, seatId: number, sectorId: number) => boolean;
  handleAddToCart: (
    hasRows: boolean,
    sectorId: number,
    rowId: number,
    seatId: number,
    price: number,
  ) => void;
}

const Controls = () => {
  const { zoomIn, zoomOut } = useControls();

  return (
    <div className="absolute right-[40px] top-[45%] flex flex-col gap-md z-10">
      <button
        className="bg-white h-12 w-12 rounded-full p-0 flex justify-center items-center"
        onClick={() => zoomIn()}
      >
        <PlusIcon size={18} className={'text-black'} strokeWidth={3} />
      </button>
      <button
        className="bg-white h-12 w-12 rounded-full p-0 flex justify-center items-center"
        onClick={() => zoomOut()}
      >
        <MinusIcon size={18} className={'text-black'} strokeWidth={3} />
      </button>
    </div>
  );
};

const HallMap: FC<IProps> = ({ handleAddToCart, isPlaceSold, getPrice }) => {
  const [hoveredCircle, setHoveredCircle] = useState(null);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const [openModal, setOpenModal] = useState<boolean>(false);

  const { isLoggedIn, setShowAuth } = useAuthStore();
  const { params } = useQueryParams();
  const activeEventId = params.get('active_event');
  const t = useTranslations();
  const circleRef = useRef(null);
  const transformWrapperRef = useRef(null);

  const event = useGetApiV1EventId(+activeEventId!);

  const scheme = useGetApiV1EventsiteschemeId(+event?.data?.event_site_scheme?.id, {
    query: {
      enabled: !!+event?.data?.event_site_scheme?.id,
    },
  });

  const prices = useGetApiV1EventpriceruleEventId(+activeEventId!);

  const myCart = useGetApiV1CartMy({
    query: {},
  });

  const svgElement = scheme?.data?.svg.length > 100 ? JSON.parse(scheme?.data?.svg) : null;

  const currentSchemaMeta =
    scheme?.data?.svg_meta?.length > 100 ? JSON.parse(scheme?.data?.svg_meta) : null;

  const handleMouseEnter = (sector, row, seat, price, event) => {
    setHoveredCircle({ sector: sector, row: row, seat: seat, price: price });
    setPopupPosition({ x: event?.clientX, y: event?.clientY });
  };

  const handleMouseLeave = () => {
    setHoveredCircle(null);
  };

  const handleOpenNoRowModal = (sectorId: string) => {
    if (!isLoggedIn) {
      setShowAuth(true);
      customUpdateSearchParams({ step: STEPS.SIGNIN });
    }

    if (isLoggedIn) {
      customUpdateSearchParams({ active_sector_id: sectorId });
      setOpenModal((prev) => !prev);
    }
  };

  if (scheme?.isLoading || event?.isLoading) {
    return (
      <div className={'w-full h-full flex justify-center items-center'}>
        <CustomLoader />
      </div>
    );
  }

  return (
    <>
      <TransformWrapper initialScale={1} ref={transformWrapperRef}>
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <div className="w-full h-[512px]">
            <Controls />
            <TransformComponent
              wrapperStyle={{
                width: '100%',
                height: '100%',
              }}
              contentStyle={{
                width: '100%',
                height: '100%',
              }}
            >
              <div className="w-full h-full flex justify-center items-center">
                {svgElement ? (
                  <svg
                    {...svgElement?.children?.[0]?.properties}
                    fill={'transparent'}
                    style={{ width: 'auto', height: '100%' }}
                    onDoubleClick={zoomIn}
                  >
                    {svgElement?.children?.[0]?.children?.map((child: any, index: number) => {
                      if (
                        child.type === 'element' &&
                        child.tagName === 'rect' &&
                        !!child?.properties?.['sector-id']
                      ) {
                        if (
                          child?.properties?.['type'] === 'dance_floor' ||
                          child?.properties?.['type'] === 'fan_zone'
                        ) {
                          return (
                            <rect
                              {...child.properties}
                              x={child.properties.x}
                              y={child.properties.y}
                              rx={child.properties.rx}
                              width={child.properties.width}
                              height={child.properties.height}
                              className={`hover:stroke stroke-transparent hover:stroke-red-focus cursor-pointer`}
                              onClick={() => {
                                handleOpenNoRowModal(child?.properties?.['sector-id']);
                              }}
                              fill={child?.properties?.fill}
                              key={`2${index}`}
                            />
                          );
                        }

                        return (
                          <rect
                            {...child.properties}
                            x={child.properties.x}
                            y={child.properties.y}
                            rx={child.properties.rx}
                            width={child.properties.width}
                            height={child.properties.height}
                            className={`hover:stroke stroke-transparent hover:stroke-red-focus cursor-pointer`}
                            fill={child?.properties?.fill}
                            key={`2${index}`}
                          />
                        );
                      }

                      if (child.type === 'element' && child.tagName === 'circle') {
                        if (currentSchemaMeta?.[child?.properties?.['data-id']]) {
                          const price = getPrice(
                            currentSchemaMeta?.[child?.properties?.['data-id']]?.seat,
                            currentSchemaMeta?.[child?.properties?.['data-id']]?.row,
                            currentSchemaMeta?.[child?.properties?.['data-id']]?.sector,
                          );
                          const foundIndex = prices?.data?.findIndex(
                            (item) => item.price === price,
                          );
                          const isSold = isPlaceSold(
                            currentSchemaMeta?.[child?.properties?.['data-id']]?.row_id,
                            currentSchemaMeta?.[child?.properties?.['data-id']]?.seat,
                            currentSchemaMeta?.[child?.properties?.['data-id']]?.sector,
                          );

                          const inTickets = myCart?.data?.find(
                            (item) =>
                              item.ticket.seat ===
                                +currentSchemaMeta?.[child?.properties?.['data-id']]?.seat &&
                              item.ticket.sector_row.row ===
                                +currentSchemaMeta?.[child?.properties?.['data-id']]?.row &&
                              item.ticket.sector?.id ===
                                currentSchemaMeta?.[child?.properties?.['data-id']]?.sector,
                          );

                          return (
                            <circle
                              ref={circleRef}
                              {...child.properties}
                              key={`1${index}`}
                              fill={
                                currentSchemaMeta?.[child?.properties?.['data-id']]
                                  ? '#D7C8C8'
                                  : '#D7C8C8'
                              }
                              cx={child.properties.cx}
                              cy={child.properties.cy}
                              r={child.properties.r}
                              className={`${currentSchemaMeta?.[child?.properties?.['data-id']] ? 'hover:!fill-green z-10 hover:cursor-pointer' : ''} ${inTickets ? '!fill-blue border-[5px] border-blue-primary ' : ''}`}
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                if (!isSold) {
                                  handleAddToCart(
                                    false,
                                    currentSchemaMeta?.[child?.properties?.['data-id']]?.sector,
                                    +currentSchemaMeta?.[child?.properties?.['data-id']]?.row_id,
                                    +currentSchemaMeta?.[child?.properties?.['data-id']]?.seat,
                                    price,
                                  );
                                }
                              }}
                              onMouseEnter={(event) =>
                                handleMouseEnter(
                                  currentSchemaMeta?.[child?.properties?.['data-id']]?.sector,

                                  currentSchemaMeta?.[child?.properties?.['data-id']]?.row,
                                  currentSchemaMeta?.[child?.properties?.['data-id']]?.seat,
                                  price,
                                  event,
                                )
                              }
                              onMouseLeave={handleMouseLeave}
                            />
                          );
                        }

                        return (
                          <circle
                            {...child.properties}
                            key={`1${index}`}
                            fill={'#D7C8C8'}
                            cx={child.properties.cx}
                            cy={child.properties.cy}
                            r={child.properties.r}
                            className={
                              currentSchemaMeta?.[child?.properties?.['data-id']]
                                ? 'fill-blue-500'
                                : ''
                            }
                          />
                        );
                      } else if (child.type === 'element' && child.tagName === 'rect')
                        return (
                          <rect
                            {...child.properties}
                            fill={
                              child?.properties?.fill === 'white'
                                ? 'transparent'
                                : child?.properties?.fill
                            }
                            x={child.properties.x}
                            y={child.properties.y}
                            rx={child.properties.rx}
                            width={child.properties.width}
                            height={child.properties.height}
                            key={`2${index}`}
                          />
                        );
                      else if (child.type === 'element' && child.tagName === 'path') {
                        return <path {...child.properties} />;
                      }
                    })}
                  </svg>
                ) : (
                  <div></div>
                )}
              </div>
            </TransformComponent>
          </div>
        )}
      </TransformWrapper>

      {hoveredCircle && (
        <div
          style={{
            position: 'fixed',
            top: popupPosition.y + 10,
            left: popupPosition.x - 80,
            padding: '14px 20px',
            backgroundColor: 'white',
            borderRadius: '12px',
            zIndex: '4000',
            width: '170px',
            height: '109px',
            boxShadow: '3px 3px 4px 0px #0000001A',
          }}
        >
          <div className="w-full flex flex-col justify-center items-center gap-[10px]">
            <div className="w-full flex flex-col justify-center items-center gap-[2px]">
              <p className="text-[14px] font-[500] text-center leading-[16.94px] text-[#252525]">
                {hoveredCircle?.sector}
              </p>
              <div className="w-full flex justify-between items-center gap-[2px]">
                <p className="text-[14px] font-[500] text-center leading-[16.94px] text-[#252525]">
                  Ряд: {hoveredCircle?.row}
                </p>
                <p className="text-[14px] font-[500] text-center leading-[16.94px] text-[#252525]">
                  Место: {hoveredCircle?.seat}
                </p>
              </div>
            </div>

            <p className="text-[18px] font-[600] text-center leading-[22.95px] text-[#DC153D]">
              {hoveredCircle?.price} sum
            </p>
          </div>
        </div>
      )}

      {openModal && <NoRowModal open={openModal} onClose={setOpenModal} />}
    </>
  );
};

export default memo(HallMap);
