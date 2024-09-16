"use client";

import React from "react";
import PageTitle from "../ui/page-title";
import eventImg from "@/public/basta_photo.jpg";
// import { useNavigate } from "react-router-dom";

const EventList = ({ events }: any) => {
  console.log(events);

  // const navigate = useNavigate();
  return (
    <PageTitle title={"Выбор мероприятия"}>
      <div className="grid grid-cols-5 gap-5 mt-10">
        {events.map((item: any) => (
          <div
            className="h-[300px] flex flex-col justify-end cursor-pointer"
            style={{
              background: `url(${item?.event_group_medias[0].file}) no-repeat center center / cover`,
              borderRadius: "30px",
            }}
            // onClick={() => navigate("/tickets/select")}
          >
            <div className="p-5 text-white">
              {item.hashtags_ru.slice(0, 3).map((tag: string) => (
                <span
                  className="py-2 px-4 mr-2"
                  style={{
                    backgroundColor: "rgba(128, 128, 128, 0.5)",
                    borderRadius: "25px",
                  }}
                >
                  {tag}
                </span>
              ))}
              <p className="text-lg mt-3">{item.name_ru}</p>
              <div className="text-base mt-1">
                <p>{item.place}</p>
                <p>{item.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageTitle>
  );
};

export default EventList;
