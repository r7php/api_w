import { Request, Response } from "express";

export const nome = (req:Request, res:Response)=>{
    let mostrar:boolean = false;
    let idade:number=0;
    if(req.query.ano){
        let anoNascimento:number = parseInt(req.query.ano as string);
        let anoatual:number = new Date().getFullYear();
        idade = anoatual-anoNascimento;
        mostrar = true;
        res.render('/nome',{
            idade,
            mostrar
        });
    }
};
export const idade = (req:Request, res:Response)=>{

};