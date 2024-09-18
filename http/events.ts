import { notFound } from "next/navigation";

export async function getAllEventsApi() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}event_group`, { next: { revalidate: 60 } });
    if (!res.ok) {
      notFound();
    }
    return res.json();
  }

  export async function getEventByIdApi(id: any) {    
    const locale = 'ru'

    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}api/v1/event_group/${id}`, {
      headers: {
        'X-Localization': locale,
      },
    });    

    if (!res.ok) {
      notFound();
    }
    return res.json();
  }