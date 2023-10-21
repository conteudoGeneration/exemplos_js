function listarPessoa(nome: string, idade: number) {
    return {
      nome,
      idade,
    };
  }
  
  const pessoa: [string, number] = ['Márcia da Silva', 30];
  
  const resultado = listarPessoa(...pessoa);
  
  console.log(resultado);
  