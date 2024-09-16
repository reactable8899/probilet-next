interface INewsAttrs {
  id: number;
  title: string;
  desc: string;
  text: string;
  main_image: string;
  images: string[];
  created_at: string;
}

interface INewsAllAttrs {
  count: number;
  next: string | null;
  previous: string | null;
  results: INewsAttrs[];
}

export type { INewsAttrs, INewsAllAttrs };
