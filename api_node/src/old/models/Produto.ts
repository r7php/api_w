type Produto ={
    title:string,
    price:number
};


const data: Produto[] = [
    {title:'produto x',price:10},
    {title:'produto y',price:5}
];

export const Produto = {
    getAll: (): Produto[]=>{
        return data;
    },
    getPriceAfter:(price:number):Produto[]=>{
        return data.filter(item=>item.price>=price);
    }
}