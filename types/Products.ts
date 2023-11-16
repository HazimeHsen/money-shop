import { PortableTextBlock } from "sanity";
import { Categories } from "./Categories";
import { Countries } from "./Countries";

export type Products = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  price: number;
  image: string;
  content: PortableTextBlock[];
  category: Categories;
  country: Countries;
};
