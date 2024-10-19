export interface IProductData {
  id: string;
  name: string;
  price: number;
  shortDescription: string;
  cardDescription: string;
  description: string;
  aditionalInfo: string;
  discount: Discount;
  socials: SocialMedia;
  images: string[];
  sizes: string[];
  colors: string[];
  reviews: Review[];
  metadata: ProductMetadata[];
}

export interface Discount {
  type: 'percentage' | 'absolute';
  amount: number;
}

export interface SocialMedia {
  [key: string]: string | null;
}

export interface Review {
  customerName: string;
  review: number;
  reviewMessage: string;
}

export interface ProductMetadata {
  key: string;
  value: string;
}

export interface ICartPayload {
  name: string;
  id: string;
  color: string;
  size: string;
  price: number;
  amount: number;
  thumbnail: string;
}
