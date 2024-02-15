
import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from '../../config/dbConfig';
import RestaurantAttributes from '../../utills/interface/interface'


// Extend the Model class and implement the interface
class Restaurant extends Model<RestaurantAttributes> implements RestaurantAttributes {
   public name!: string;
   public address!: string;
   public since?: Date;
   public about?: string;
   public email!: string;
   public password!: string
}

// Define the Sequelize model using the interface
Restaurant.init({
   name: {
     type: DataTypes.STRING,
     allowNull: false
   },
   address: {
     type: DataTypes.STRING,
     allowNull: false
   },
   since: {
     type: DataTypes.DATEONLY,
   },
   about: {
     type: DataTypes.STRING,
   },
   email: {
    type: DataTypes.STRING,
    // allowNull: false
   },
   password: {
    type: DataTypes.STRING
   }
  }, {
    sequelize,
    modelName: 'restaurant'
  }); 
  
sequelize.sync().then(() => {
  console.log('Restaurant table created successfully!');
}).catch((error) => {
  console.error('Unable to create table: ', error);
});

export default {Restaurant};





// import { Sequelize, DataTypes} from "sequelize";
// import sequelize from '../../config/dbConfig'
// import createRestaurant from '../../utills/interface/interface'

// const Restaurant: createRestaurant = sequelize.define("restaurant", {
//    name: {
//      type: DataTypes.STRING,
//      allowNull: false
//    },
//    address: {
//      type: DataTypes.STRING,
//      allowNull: false
//    },
//    since: {
//      type: DataTypes.DATEONLY,
//    },
//    about: {
//      type: DataTypes.STRING,
//    }
// });

// sequelize.sync().then(() => {
//    console.log('restaurant table created successfully!');
// }).catch((error) => {
//    console.error('Unable to create table : ', error);
// });

// export default {Restaurant}

