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
    mutation UnpublishCategory($slug: String!) {
      unpublishCategory(where: { slug: $slug }) {
        id
      }
    }
  `;

  const slug: String = await request.json();
  return new Response(await graphQLClient.request(mutation, { slug }));
}
