import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";



export interface Userinstance extends Model{
    id:number;
    nome:string;
}

export const User = sequelize.define<Userinstance>("User",{
    id:{
        primaryKey:true,
        type:DataTypes.INTEGER
    },
    nome:{
        type:DataTypes.STRING
    }

},{
    tableName:'Users',
    timestamps:false
});