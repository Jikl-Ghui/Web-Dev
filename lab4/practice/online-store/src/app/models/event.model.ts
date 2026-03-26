export interface EventModel {
  id: number;
  name: string;
  description: string;
  price: number; // KZT
  rating: number; // 1..5
  image: string; // main image (url or local asset path)
  images: string[]; // gallery images (min 3)
  link: string; // direct ticketon.kz url
}
