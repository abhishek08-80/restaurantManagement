import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from '../../config/dbConfig';
import { orderAttributes } from '../../utills/interface/interface'
import { orderStatus } from "../../utills/enums/enum";
import { Json } from "sequelize/types/utils";

class order extends Model<orderAttributes> implements orderAttributes {
    public id?: number;
    public itemName!: Json;
    public restaurantId!: number;
    public customerName!: string;
    public total?: number;
    public phoneNo!: number;
    public address?: string;
    public status?: orderStatus
}

order.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    itemName: {
        type: DataTypes.JSON,
        allowNull: false
    },
    //   type: DataTypes.STRING,
    //   allowNull: false
    // type: DataTypes.ARRAY(DataTypes.STRING),
    // allowNull: false,
    // type: DataTypes.ARRAY(DataTypes.TEXT),
    // defaultValue :[]

    customerName: {
        type: DataTypes.STRING,
    },
    restaurantId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'restaurants',
            key: 'id',
        }
    },
    status: {
        type: DataTypes.ENUM,
        values: Object.values(orderStatus),
        allowNull: false,
        defaultValue: orderStatus.preparing
    },
    total: {
        type: DataTypes.INTEGER,
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
    address: {
        type: DataTypes.STRING,
    }
}, {
    sequelize,
    modelName: 'order'
});

sequelize.sync().then(() => {
    console.log('order table linked successfully!');
}).catch((error) => {
    console.error('Unable to order table: ', error);
});


export default { order } 