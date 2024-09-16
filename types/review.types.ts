interface IReviewAttrs {
  id: number;
  author: string;
  quote: string;
  url: null | string;
  image_url: string;
  created_at: string;
}

interface IReviewAllAttrs {
  count: number;
  next: string | null;
  previous: string | null;
  results: IReviewAttrs[];
  review: string;
}

export type { IReviewAllAttrs, IReviewAttrs };
