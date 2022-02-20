import {
  gql,
} from "@apollo/client";
import { client } from "..";
import { Mutation } from "..";

export interface deleteInterface {
  args: {
    id: string;
  };
}

const DELETE_MUTATION = gql`
mutation DeleteCoffee($args: deleteCoffeeArgs!) {
  deleteCoffee(args: $args)
}
`

const makeDeleteCoffeeMutation = (variables: deleteInterface): Mutation<deleteInterface> => ({
  mutation: DELETE_MUTATION,
  variables,
})

export const deleteMutation = async (id: string): Promise<void> => {
  try {
    const {data , errors} = await client.mutate(makeDeleteCoffeeMutation({ args: { id } }))

    if(errors?.length) {
      throw new Error(errors[0].message)
    }
    // return (...)
  } catch (error) {

    throw error
  }
}
