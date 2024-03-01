import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from '../../config/dbConfig';
import { employeeAttributes } from '../../utills/interface/interface'
import { Role } from "../../utills/enums/enum";



class employee extends Model<employeeAttributes> implements employeeAttributes {
    public name!: string;
    public email!: string;
    public password!: string;
    public isActive!: boolean;
    public address!: string;
    public role!: Role;
    public restaurantId!: number;
}

employee.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    address: {
        type: DataTypes.STRING,
    },
    role: {
        type: DataTypes.ENUM,
        values: Object.values(Role),
        allowNull: false
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
    modelName: 'employee'
});

sequelize.sync().then(() => {
    console.log('Employee table linked successfully!');
}).catch((error) => {
    console.error('Unable to create table: ', error);
});


export default { employee }