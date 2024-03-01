import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from '../../config/dbConfig';
import { reservationAttributes } from '../../utills/interface/interface'



class reservation extends Model<reservationAttributes> implements reservationAttributes {
  public customerName!: string;
  public restaurantId!: number;
  public employeeId!: number;
  public phoneNo!: number;
  public numberOfGuests!: number;
}

reservation.init({
  customerName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  restaurantId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'restaurants',
      key: 'id',
    }
  },
  employeeId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'employees',
      key: 'id',
    }
  },
  phoneNo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1000000000,
      max: 9999999999,
      isInt: true
    }
  },
  numberOfGuests: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  sequelize,
  modelName: 'reservation'
});

sequelize.sync().then(() => {
  console.log('reservation table linked successfully!');
}).catch((error) => {
  console.error('Unable to reservation table: ', error);
});


export default { reservation }