import { gql } from "@apollo/client";
import { Mutation } from "..";
import { client } from "..";

export interface AddCoffeeArgs {
  args: {
    description: string;
    imageUrl: string;
    name: string;
  };
}

const ADD_COFFEE_MUTATION = gql`
  mutation AddCoffee($args: addCoffeeArgs!) {
    addCoffee(args: $args) {
      description
      id
      imageUrl
      name
    }
  }
`

const makeAddCoffeeMutation = (variables: AddCoffeeArgs): Mutation<AddCoffeeArgs> => ({
  mutation: ADD_COFFEE_MUTATION,
  variables,
})

export const addMutation = async (name: string, description: string, imageUrl: string): Promise<void> => {
  try {
    const { data: { addCoffee }, errors } = await client.mutate(makeAddCoffeeMutation({ args: { description, imageUrl, name } }))

    if(errors?.length) {
      throw new Error(errors[0].message)
    }

  } catch(error) {

    throw error
  }
}
