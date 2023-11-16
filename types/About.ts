import { PortableTextBlock } from "sanity";

export type About = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  icon: string;
  content: PortableTextBlock[];
};
