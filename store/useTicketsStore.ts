export type TicketsState = {
  seat: number;
  seat_id: number;
  row: number;
  totalPrice: number;
  event_id: number;
  id: number;
};

export type Tickets = {
  cart: TicketsState[];
};
