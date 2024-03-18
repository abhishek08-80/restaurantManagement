import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from '../../config/dbConfig';
import { ordersAttributes } from '../../utills/interface/interface'
import { orderStatus } from "../../utills/enums/enum";
import { Json } from "sequelize/types/utils";

class orders extends Model<ordersAttributes> implements ordersAttributes {
    public id?: number;
    public itemName!: Json;
    public restaurantId!: number;
    public customerName!: string;
    public phoneNo!: number;
    public address?: string;
    public status?: orderStatus;
    public amount?: number;
    public source!: string;
    public customerEmail!: string;
}

orders.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    itemName: {
        type: DataTypes.JSON,
        allowNull: false
    },
    amount:{
        type: DataTypes.NUMBER,
        allowNull:false
    },
    source:{
        type:DataTypes.STRING,
        allowNull: false
     },
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
    phoneNo: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
    },
    customerEmail: {
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


export default { orders } 

    //   type: DataTypes.STRING,
    //   allowNull: false
    // type: DataTypes.ARRAY(DataTypes.STRING),
    // allowNull: false,
    // type: DataTypes.ARRAY(DataTypes.TEXT),
    // defaultValue :[]
