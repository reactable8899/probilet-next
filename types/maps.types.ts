interface IMapsAttrs {
  id: number;
  name: string;
  desc: string;
  text: string;
  star_rating: string;
  altitude: string;
  latitude: string;
  longitude: string;
  main_image: string;
  images: string[];
  is_show: boolean;
  created_at: string;
  updated_at: string;
}

interface IMapsAllAttrs {
  count: number;
  next: string | null;
  previous: string | null;
  results: IMapsAttrs[];
}

export type { IMapsAllAttrs, IMapsAttrs };
