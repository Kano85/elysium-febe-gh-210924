//src/sanity/brand.ts
// Update the Brand type to make imageLight mandatory
export interface Brand {
  id: string | number;
  href: string;
  image: string;
  imageLight: string; // Removed undefined
  name: string;
}
