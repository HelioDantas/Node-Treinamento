

function buscarUsuario (callback){
     setTimeout( function () {
        return callback(null,{
            id:1,
            nome:'Alibaba',
            data : new Date()

        }


     )}, 1000);
}


function obterUsuario (){
    setTimeout( function () {
     return   {
           nome:'Alibaba',
           data : new Date()

         }


        }, 1000);
}

function obterTelefone(id, callback) {

   setTimeout(() => {
    return callback(null, {
        telefone :'1111',
        dd:'21'
    })

   }, 2000);
}

function obterEnd(id, callback) {

    setTimeout(() => {
    
        return callback(null, {
            end : 'efsdfsd',
        });
    
       }, 2000);

}

buscarUsuario((erro, usuario) => {
    console.log(usuario);
    obterTelefone(usuario.id, (erro, telefone) => {
        console.log(telefone);

    })
    obterEnd(usuario.id, (erro, end) => {

        console.log(end);
    })
});





function buscarU(erro, usuario) {

    console.log(usuario);
};
buscarUsuario(buscarU);

obterTelefone(1, (erro, data) =>
{
console.log(data);

} );

/*const telefone = obterTelefone(usuario.id);
const end = obterEnd(usuario.id);

console.log(usuario);
console.log(usuario);
console.log(usuario);*/


//console.log(result);
const  jj = obterUsuario();

console.log('jj', jj);