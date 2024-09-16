import EventList from "@/components/events/List";
import { getAllEventsApi } from "@/http/events";
import React from "react";

const Page = async ({ params }: any) => {
  const events: any = await getAllEventsApi();
  console.log(events);

  return (
    <div>
      <EventList events={events} />
    </div>
  );
};

export default Page;
