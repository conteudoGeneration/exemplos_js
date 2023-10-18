try {
    
    const resultado = converte(123);

    console.log(resultado);

} catch (error) {
     console.log(Object.getPrototypeOf(error));
}

export function converte(conteudo: any){
    conteudo.toUpperCase();
}