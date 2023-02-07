import { Model, DataTypes } from "sequelize";
import {sequelize} from "../instances/conn";


export interface ClientesInstance extends Model{
    id:number;
    name:Text;
    doc:Text;
    about:Text;
    active:Text;
    site:Text;
}

export const Clientes = sequelize.define<ClientesInstance>('Clientes',{
    id:{
        primaryKey:true,
        type:DataTypes.INTEGER        
    },
    // texto1:{
    //     type:DataTypes.STRING
    // },
    // texto2:{
    //     type:DataTypes.STRING
    // }
    name:{
        type:DataTypes.STRING
    },
    doc:{
        type:DataTypes.STRING
    },
    about:{
        type:DataTypes.STRING
    },
    active:{
        type:DataTypes.STRING
    },
    site:{
        type:DataTypes.STRING
    }
},{
    tableName:'tb_cadastro_clientes',
    timestamps:false
});
    
