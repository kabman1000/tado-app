/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPrices = /* GraphQL */ `
  mutation CreatePrices(
    $input: CreatePricesInput!
    $condition: ModelPricesConditionInput
  ) {
    createPrices(input: $input, condition: $condition) {
      id
      price
      currentLocation
      destination
      createdAt
      updatedAt
    }
  }
`;
export const updatePrices = /* GraphQL */ `
  mutation UpdatePrices(
    $input: UpdatePricesInput!
    $condition: ModelPricesConditionInput
  ) {
    updatePrices(input: $input, condition: $condition) {
      id
      price
      currentLocation
      destination
      createdAt
      updatedAt
    }
  }
`;
export const deletePrices = /* GraphQL */ `
  mutation DeletePrices(
    $input: DeletePricesInput!
    $condition: ModelPricesConditionInput
  ) {
    deletePrices(input: $input, condition: $condition) {
      id
      price
      currentLocation
      destination
      createdAt
      updatedAt
    }
  }
`;
