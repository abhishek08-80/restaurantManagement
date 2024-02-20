import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from '../../config/dbConfig';
import { categoryAttributes } from '../../utills/interface/interface'



class category extends Model<categoryAttributes> implements categoryAttributes {
    public name!: string;
    public restaurantId!: number;
    public slug!: string
}

category.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING,
    },
    restaurantId: {
        type: DataTypes.INTEGER,
        references: {
           model: 'restaurants',
           key: 'id', 
        }
     }
}, {
    sequelize,
    modelName: 'category'
  }); 
  
  sequelize.sync().then(() => {
    console.log('category table linked successfully!');
  }).catch((error) => {
    console.error('Unable to create table: ', error);
  });
  

  export default {category}