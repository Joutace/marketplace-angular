export interface ApiGetById<T> {
  success: boolean;
  output: T;
}

export interface IProductData {
  id: string;
  price: number;
  socials?: SocialMedia;
  images: string[];
  sizes: string[];
  colors: string[];
  discount: {
    type: string;
    amount: number;
  };
  metadata: ProductMetadata[];
}

export interface SocialMedia {
  instagram: string | null;
  facebook: string | null;
  youtube: string | null;
  twitter: string | null;
  linkedin: string | null;
}

export interface ProductMetadata {
  key: string;
  value: string;
  socials: SocialMedia;
}
