import employees from "../../model/employees/employees";
import bcrypt from 'bcrypt'
import restaurantSchema from "../../model/restaurant/restaurant";
import jwt from "jsonwebtoken";
import { TOKEN_KEY } from "../../config/env";

async function validRestaurant(req: any, res: any) {
  try {
    const { restaurantId }: any = req.body;
    const restaurant: any = await restaurantSchema.Restaurant.findByPk(restaurantId);
    if (restaurant) {
      return restaurant; // Return the restaurant if found
    }
    return null;   // Return null if the restaurant is not found
  } catch (error) {
    throw error;
  }
};

async function validRestCheckByParams(req: any, res: any) {
  try {
    const restaurantId: any = req.params.id;
    const restaurant: any = await restaurantSchema.Restaurant.findByPk(restaurantId);
    if (restaurant) {
      return restaurant; // Return the restaurant if found
    }
    return null;   // Return null if the restaurant is not found
  } catch (error) {
    throw error;
  }
};

async function findEmployee(req: any, res: any) {
  try {
    const { email }: any = req.body
    const existingEmployee: any = await employees.employee.findOne({
      where: {
        email: email
      }
    });
    if (existingEmployee) {
      return existingEmployee; // Return the restaurant if found
    }
    return null;   // Return null if the restaurant is not found
  } catch (error) {
    throw error;
  }
}


async function createEmployee(req: any, res: any) {
  try {
    const { password }: any = req.body;
    const saltRounds: number = 10;
    const hashedPassword: string = await bcrypt.hash(password, saltRounds);
    req.body.password = hashedPassword


    const newEmployee: any = await employees.employee.create(req.body);
    return newEmployee;
  } catch (error) {
    throw error;
  }
};

async function getEmployees(req: any, res: any) {
  try {
    const restaurantId: any = req.params.id
    const employee = await employees.employee.findAll({
      limit: 2,
      where: {
        restaurantId: restaurantId
      }
    })
    if (employee.length === 0) {
      return null
    }
    return employee
  } catch (error) {
    throw error;
  }
}




async function validPassword(req: any, res: any) {
  try {
    const { password, email } = req.body
    const employee: any = await employees.employee.findOne({
      where: {
        email: email
      }
    })

    const role = await employee.role
    console.log(role)
    const checkPassword = await bcrypt.compare(password, employee?.password)

    if (checkPassword) {
      const token = jwt.sign(
        { _id: employee._id, email, role },
        TOKEN_KEY)
      return { employee, token }

    } else {
      return null;
    }
  } catch (error) {
    throw error;
  }
}

export {
  createEmployee,
  findEmployee,
  validRestCheckByParams,
  validRestaurant,
  getEmployees,
  validPassword
}

