import {Router, Request, Response} from 'express';

import * as homeController  from '../controllers/homeController';

import * as infoController from '../controllers/infoController';


const router = Router();

router.get('/',homeController.home);

router.get('/contato',infoController.contato);

router.get('/sobre',infoController.sobre);







router.get('/post',(req:Request, res:Response)=>{
      res.render('post');  
});


router.get('/nome',(req:Request, res:Response)=>{
    let nome:string = req.query.nome as string;
    let idade:string = req.query.idade as string;
    res.render('nome',{
        nome,
        idade
    });
});


router.get('/idade',(req:Request, res:Response)=>{
    let mostrar:boolean = false;
    let idade:number=0;
    if(req.query.ano){
        
        let anoNascimento:number = parseInt(req.query.ano as string);
        let anoatual:number = new Date().getFullYear();
        idade = anoatual-anoNascimento;
        mostrar = true;
     

    }
    res.render('/nome',{
        idade,
        mostrar

    });
    
  



});

router.post('/post',(req:Request, res:Response)=>{
    let mostrar:boolean = false;
    let idade:number=0;
    if(req.body.ano){
        
        let anoNascimento:number = parseInt(req.body.ano as string);

        let anoatual:number = new Date().getFullYear();
        idade = anoatual-anoNascimento;
        mostrar = true;
   

    }

    res.render('post',{
        idade,
        mostrar

    });
    
  



});



export default router;