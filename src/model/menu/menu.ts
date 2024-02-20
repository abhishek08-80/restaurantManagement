import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from '../../config/dbConfig';
import { menuAttributes } from '../../utills/interface/interface'



class menu extends Model<menuAttributes> implements menuAttributes {
    public name?: string;
    public restaurantId!: number;
    public slug?: string;
    public categoryId!: number;
    public price!: number;
}

menu.init({
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
     },
     categoryId: {
        type: DataTypes.INTEGER,
        references: {
           model: 'categories',
           key: 'id', 
        }
     },
     price: {
        type: DataTypes.INTEGER,
     },
}, {
    sequelize,
    modelName: 'menu'
  }); 
  
  sequelize.sync().then(() => {
    console.log('menu table linked successfully!');
  }).catch((error) => {
    console.error('Unable to menu table: ', error);
  });
  

  export default {menu}