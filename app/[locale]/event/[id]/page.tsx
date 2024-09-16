import { BuyTicketSection } from "@/components/blocks/BuyTicketSection/BuyTicketSection";
import { getEventByIdApi } from "@/http/events";
import React from "react";

const Page = async ({ params }: any) => {
  const event = await getEventByIdApi(parseInt(params.id as string));
  console.log(event);

  console.log("asf");

  // const event = {};

  return (
    <div>
      <BuyTicketSection event={event} />
    </div>
  );
};

export default Page;
