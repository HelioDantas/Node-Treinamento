let competitors = [
    {
        id: 'Americanas',
        price_to: 1000.
    },
    {
        id: 'Walmart',
        price_to: 500.
    },
    {
        id: 'Magalu',
        price_to: 800
    },
    {
        id: 'Amazon',
        price_to: 700.
    }
]

const LISTA_CONCORRENTES = ['WALMART', 'MAGALU']


const result = competitors.filter((obj) => {
    return LISTA_CONCORRENTES.includes(obj.id.toUpperCase())
})

 const menorprice = (lista, callback) =>{
    let menorItem = lista[0];
    lista.map(elemento => {
      // console.log(menorItem)
        if (menorItem.price_to > elemento.price_to) {
         menorItem = elemento;
         // console.log(menorItem)   
        }
        // console.log(menorItem)
        return callback(null, menorItem)
    })
}
const teste = result
//console.log(teste[0].price_to)
//console.log(result)
let tt;
menorprice(result, (erro, data) =>{
    tt = data;


})

console.log(tt);