
// Define the interface for the Restaurant entity
interface RestaurantAttributes {
  name: string;
  address: string;
  since?: Date;
  about?: string;
  email: string;
  password: string
}

export default   RestaurantAttributes
                

// export interface IngredientInput extends Optional<IngredientAttributes, 'id' > {}
// export interface IngredientOuput extends Required<IngredientAttributes> {}