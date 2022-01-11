/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPrices = /* GraphQL */ `
  query GetPrices($id: ID!) {
    getPrices(id: $id) {
      id
      price
      currentLocation
      destination
      createdAt
      updatedAt
    }
  }
`;
export const listPrices = /* GraphQL */ `
  query ListPrices(
    $filter: ModelPricesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        price
        currentLocation
        destination
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
