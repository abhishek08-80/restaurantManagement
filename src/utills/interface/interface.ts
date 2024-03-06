import { Json } from "sequelize/types/utils";
import {Role, orderStatus, categories} from "../enums/enum";




// Define the interface for the Restaurant entity
export interface RestaurantAttributes {
  name: string;
  address: string;
  since?: Date;
  about?: string;
  email: string;
  password: string;
}

export interface Decode {
  _id: string;
  email: string;
  role: string; 
  // Add more properties if `decoded` has more properties
}

// Define interface for req object
export interface Requests {
  _id: string;
  email: string;
  role: string; 
  // Add more properties if `req` has more properties
}


export interface Decoded {
  _id: string;
  email: string;
  // Add more properties if `decoded` has more properties
}

// Define interface for req object
export interface Req {
  _id: string;
  email: string;
  // Add more properties if `req` has more properties
}

export  interface employeeAttributes {
  name: string;
  role?: Role;
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
  id?: number
  name?: string,
  restaurantId: number,
  category: categories,
  isActive?: boolean,
  price: number,
  slug?: string
  description: string
}

export interface reservationAttributes {
  customerName?: string,
  restaurantId: number,
  employeeId: number,
  phoneNo: number,
  numberOfGuests: number
}


export interface orderAttributes {
  id?:number,
  itemName: Json,
  status?: orderStatus,
  total?: number,
  customerName: string,
  phoneNo: number,
  restaurantId?: number,
  address?: string
}

// export interface paymentAttributes{
//   id? : number,
//   orderId: number,
//   paymentMethod : string,
//   createdDate: Date,
//   status : paymentEnum,
//   amount: number,
// }



// export interface IngredientInput extends Optional<IngredientAttributes, 'id' > {}
// export interface IngredientOuput extends Required<IngredientAttributes> {}