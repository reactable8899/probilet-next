import { notFound } from "next/navigation";

export async function getAllEventsApi() {
    const res = await fetch(`${process.env.API_URL}event_group`, { next: { revalidate: 60 } });
    if (!res.ok) {
      notFound();
    }
    return res.json();
  }

  export async function getEventByIdApi(id: any) {
    console.log(`${process.env.API_URL}/api/v1/event_group/${id}`);
    
    const locale = 'ru'

    const res = await fetch(`${process.env.API_URL}event_group/${id}`, {
      headers: {
        'X-Localization': locale,
      },
    });    

    if (!res.ok) {
      notFound();
    }
    return res.json();
  }