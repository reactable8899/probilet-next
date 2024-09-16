interface IServiceCategoryAttrs {
  id: number;
  name: string;
  created_at: string;
}

interface IServiceDataAttrs {
  id: number;
  name: string;
  desc: string;
  category: number;
  image_url: string;
  created_at: string;
}

interface ICurrentServiceAttrs {
  id: number;
  name: string;
  desc: string;
  category: number;
  image_url: string;
  created_at: string;
  text: string;
}

export type { IServiceCategoryAttrs, IServiceDataAttrs, ICurrentServiceAttrs };
