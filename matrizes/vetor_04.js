let vetorstring = [
    "Boxer",
    "Pastor Alemão",
    "Pinscher",
    "Husky Siberiano",
    "Corgi"
  ];
  
  console.log("Listar Itens do vetor: \n");

  for (let indice = 0; indice < vetorstring.length; indice++)
  {
      console.log(`${indice + 1}º elemento: ${vetorstring[indice]}`);
  }
  
  console.log("\nO tamanho do seu vetor é: " + vetorstring.length);