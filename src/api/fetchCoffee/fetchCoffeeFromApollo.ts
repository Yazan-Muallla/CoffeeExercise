import { gql } from "@apollo/client";
import { Coffee } from "../../constants";
import { client } from "..";

const GET_QUERY = gql`
  query Coffees {
    Coffees {
      id
      description
      imageUrl
      name
      updatedAt
      createdAt
    }
  }
`;

export const getCoffeesData = async (): Promise<Coffee[]> => {
  try {
    // throw new Error('sss')
    const { data, errors } = await client.query({
      query: GET_QUERY,
    });

    if (errors?.length) {
      throw new Error(errors[0].message);
    }

    return data.Coffees;
  } catch (error) {
    throw error;
  }
};
