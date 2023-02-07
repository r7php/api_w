import {http}from './config'

export default{
    listar:()=>{
        return http.get('buscaEmpresa')
    }
    ,

    // salvar:(insert)=>{
    //     return http.post('inserirData')
    // }
}