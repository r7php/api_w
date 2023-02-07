import {Request, Response} from 'express';
import { cpuUsage } from 'process';
import { EmptyResultError } from 'sequelize';

import { Clientes } from '../models/Clientes'

export const ping = (req:Request, res:Response)=>{
    res.json({pong:true});
}

export const random = (req:Request, res:Response)=>{
    let rt: number = Math.floor(Math.random()*10);
    res.json({
        number:rt
    });
}

export const Nome = (req:Request, res:Response)=>{
    let nome: string = req.params.nome;
    let nu: number = 10;
    res.json({
        nome,
        nu
        
    });
}

export const buscaEmpresa = async(req:Request, res:Response)=>{
     let user = await Clientes.findAll();
     res.json({
       user
    });
}

export const createCliente = async (req:Request, res:Response)=>{
    let {name,doc,about,active,site} = req.body

    let newClientes = await Clientes.create({
        name,doc,about,active,site
    }); 
    res.json({
        id:newClientes, name, doc,about,active,site
    });


    // let {texto1,texto2} = req.body

    // let newClientes = await Clientes.create({
    //     texto1,texto2
    // }); 
    // res.json({
    //     id:newClientes, texto1,texto2
    // });



}