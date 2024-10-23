//this is a type for the brand object that is returned from the sanity API
export type Brand = {
  id: number;
  name: string;
  href: string;
  image: string;
  imageLight?: string;
};
