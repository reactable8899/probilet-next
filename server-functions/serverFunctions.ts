"use server";

import { revalidateTag } from 'next/cache'
 
export const updateRevalidate = (tag:string) => {
  revalidateTag(tag)
}

