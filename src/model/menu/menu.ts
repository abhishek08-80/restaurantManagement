import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from '../../config/dbConfig';
import { menuAttributes } from '../../utills/interface/interface'
import { categories } from '../../utills/enums/enum'


class menu extends Model<menuAttributes> implements menuAttributes {
  public id?: number;
  public name?: string;
  public restaurantId!: number;
  public slug?: string;
  public category!: categories;
  public price!: number;
  public description!: string;
  public isActive?: boolean;
}

menu.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
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
  category: {
    type: DataTypes.ENUM,
    values: Object.values(categories),
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  sequelize,
  modelName: 'menu'
});

sequelize.sync().then(() => {
  console.log('menu table linked successfully!');
}).catch((error) => {
  console.error('Unable to menu table: ', error);
});


export default { menu }