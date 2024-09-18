import { notFound } from "next/navigation";

export async function getAllEventsApi() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}cashier/profile`, { next: { revalidate: 60 } });
    if (!res.ok) {
      notFound();
    }
    return res.json();
  }
