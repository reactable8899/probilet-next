interface IEquipmentCategoryAttrs {
  id: number;
  name: string;
  created_at: string;
}

interface IEquipmentBrandAttrs {
  id: number;
  name: string;
  num_equipments: string;
}

interface IEquipmentAttrs {
  id: number;
  name: string;
  desc: string;
  price: string;
  has_promotion: boolean;
  new_price: null | string;
  currency: string;
  popularity: number;
  brand: number;
  brand_name: string;
  category: number;
  main_image: string;
  images: string[];
  created_at: string;
  count: number;
}

interface IFilterAttrs {
  page: string;
  q?: string;
  category_id?: string;
  sp?: string;
  ep?: string;
  brand_id?: string;
  sort_by?: "lp" | "hp" | "pp";
}

interface IEquipmentAllAttrs {
  count: number;
  next: string | null;
  previous: string | null;
  results: IEquipmentAttrs[];
  total_count: number;
}

export type {
  IEquipmentAttrs,
  IEquipmentAllAttrs,
  IEquipmentCategoryAttrs,
  IFilterAttrs,
  IEquipmentBrandAttrs,
};
