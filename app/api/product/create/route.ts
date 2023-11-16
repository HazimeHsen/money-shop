import { GraphQLClient, gql } from "graphql-request";

const endpoint: string = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;
const token: string = process.env.NEXT_PUBLIC_GRAPHQL_TOKEN;

export async function POST(request: Request) {
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  const mutation = gql`
    mutation CreateProduct($data: ProductCreateInput!) {
      createProduct(data: $data) {
        id
      }
    }
  `;

  const data: any = await request.json();
  return new Response(await graphQLClient.request(mutation, { data }));
}
