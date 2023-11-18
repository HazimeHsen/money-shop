import { About } from "@/types/About";
import { Categories } from "@/types/Categories";
import { Countries } from "@/types/Countries";
import { Products } from "@/types/Products";
import { createClient, groq } from "next-sanity";

export async function getAboutData(): Promise<About[]> {
  const client = createClient({
    projectId: "ltl22r4j",
    dataset: "production",
    apiVersion: "2023-11-06",
  });

  return client.fetch(
    groq`*[_type == "about"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "icon": icon.asset->url,
            content
        }`
  );
}

export async function getProducts(): Promise<Products[]> {
  const client = createClient({
    projectId: "ltl22r4j",
    dataset: "production",
    apiVersion: "2023-11-06",
  });

  return client.fetch(
    groq`*[_type == "product"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image[].asset->{
              _id,
              url
            },
            price,
            "category": {
              "_id": category._ref,
              "name": category->name,
              "slug": category->slug.current
            },
            "country": {
              "_id": country._ref,
              "name": country->name,
              "slug": country->slug.current
            },
            content
        }`
  );
}

export async function getProduct(id: string): Promise<Products> {
  const client = createClient({
    projectId: "ltl22r4j",
    dataset: "production",
    apiVersion: "2023-11-06",
  });
  return client.fetch(
    groq`*[_type == "product" && _id == $id]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image[]{
                    asset-&gt;{
                    _id,
                    url
                    }
                  },
        price,
        "category": {
          "_id": category._ref,
          "name": category->name,
          "slug": category->slug.current
        },
        "country": {
          "_id": country._ref,
          "name": country->name,
          "slug": country->slug.current
        },
        content
    }`,
    { id }
  );
}
export async function getCategories(): Promise<Categories[]> {
  const client = createClient({
    projectId: "ltl22r4j",
    dataset: "production",
    apiVersion: "2023-11-06",
  });

  return client.fetch(
    groq`*[_type == "category"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current
        }`
  );
}
export async function getCountry(): Promise<Countries[]> {
  const client = createClient({
    projectId: "ltl22r4j",
    dataset: "production",
    apiVersion: "2023-11-06",
  });

  return client.fetch(
    groq`*[_type == "country"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current
        }`
  );
}
