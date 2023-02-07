import {Request, Response} from 'express';
import { Produto } from '../models/Produto';
import { User } from '../models/User';
import {Op}from 'sequelize';

export const home = async (req: Request, res:Response)=>{
    let users = await User.findAll({
        //attributes:['nome']//pega somente 'nome' da tabela
        //where:{nome:'jhonatha'}
        where:{
            age:{
              
                 [Op.gte]:10 //mais
                // [Op.lte]:70//menos 
            }

            // [Op.or]:[
            //     {nome:'jhonatha'}
            // ]
        }
    });
    
   // console.log('USUARIOS',JSON.stringify(users));

    let show:boolean = false;
    let ex = Produto.getPriceAfter(10);
    let list = Produto.getAll();
    
    res.render('home',{
        name:'jhonatha',
        idade:21,
        show,
        produto:list,
        expensives:ex,
        users
    });
};