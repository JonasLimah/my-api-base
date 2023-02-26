import {DataTypes,Model} from 'sequelize'
import { sequelize } from "../module/mysql";


export interface UserInstance extends Model {
    id: number,
    email:string,
    password: string
}

export const User = sequelize.define<UserInstance>("mysql",{
    id:{
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement:true
    },
    email:{
        type:DataTypes.STRING
    },
    password:{
        type:DataTypes.STRING
    }
},
{
    tableName: "users",
    timestamps:false
})