function numberGenerator() {
  // 1. Pegamos o valor como texto (sem Math.ceil ou Math.floor ainda!)
  const minInput = document.querySelector(".min-input").value;
  const maxInput = document.querySelector(".max-input").value;
  const statusMessage = document.getElementById("status-message");

  // 1. Verifica se AMBOS os campos estão vazios ao mesmo tempo
  if (minInput === "" && maxInput === "") {
    statusMessage.innerHTML = "Coloque os números para sortear";
    setTimeout(() => {
      statusMessage.innerHTML = "Sortear um número";
    }, 3000);
  }
  // 2. Se não forem os dois, verifica se APENAS o mínimo está vazio
  else if (minInput === "") {
    statusMessage.innerHTML = "Coloque o número minino para sortear";
    minInput.innerHTML = "red";
    setTimeout(() => {
      statusMessage.innerHTML = "Sortear um número";
    }, 3000);
  }
  // 3. Verifica se APENAS o máximo está vazio
  else if (maxInput === "") {
    statusMessage.innerHTML = "Coloque o número máximo para sortear";
    setTimeout(() => {
      statusMessage.innerHTML = "Sortear um número";
    }, 3000);
  }
  // 4. Se chegou aqui, nenhum está vazio. Segue para o sorteio!
  else {
    // 3. Somente aqui, se não estiverem vazios, transformamos em números
    const min = Math.ceil(minInput);
    const max = Math.floor(maxInput);

    // 4. Verificamos a ordem dos números
    if (min >= max) {
      statusMessage.innerHTML = "O número mínimo tem que ser menor que o máximo!";
      setTimeout(() => {
        statusMessage.innerHTML = "Sortear um número";
      }, 3000);
    } else {
      // 5. Fazemos o sorteio (com o + 1 para incluir o máximo) e mostramos na tela
      const result = Math.floor(Math.random() * (max - min + 1)) + min;
      statusMessage.innerHTML = "Resultado: " + result;
    }
  }
}
