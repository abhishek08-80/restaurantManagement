import Role from "../enums/enum";




// Define the interface for the Restaurant entity
export interface RestaurantAttributes {
  name: string;
  address: string;
  since?: Date;
  about?: string;
  email: string;
  password: string;
}




export  interface employeeAttributes {
  name: string;
  role: Role;
  email: string;
  password: string;
  isActive: boolean;
  address: string;
  restaurantId: number;
}

export interface categoryAttributes {
  name: string,
  restaurantId: number,
  slug: string
} 
                
export interface menuAttributes {
  name?: string,
  restaurantId: number,
  categoryId: number,
  isActive?: boolean,
  price: number,
  slug?: string
}
// export interface IngredientInput extends Optional<IngredientAttributes, 'id' > {}
// export interface IngredientOuput extends Required<IngredientAttributes> {}