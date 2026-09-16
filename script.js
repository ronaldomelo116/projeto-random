function numberGenerator() {
  // Pegamos o valor como texto (sem Math.ceil ou Math.floor ainda!)
  const minInput = document.querySelector(".min-input").value;
  const maxInput = document.querySelector(".max-input").value;
  const statusMessage = document.getElementById("status-message");
  const backgroundMin = document.querySelector(".min-input");
  const backgroundMax = document.querySelector(".max-input");

  // Verifica se AMBOS os campos estão vazios ao mesmo tempo
  if (minInput === "" && maxInput === "") {
    statusMessage.innerHTML = "Coloque os números para sortear";
    
    backgroundMin.style.background = "rgba(255, 0, 0, 0.2)";
    backgroundMax.style.background = "rgba(255, 0, 0, 0.2)";

    backgroundMin.classList.add("error-shake");
    backgroundMax.classList.add("error-shake");

    setTimeout(() => {
      statusMessage.innerHTML = "Sortear um número";

      document.title = "Dev Sorteio";

      backgroundMin.style.background = "";
      backgroundMax.style.background = "";

      backgroundMin.classList.remove("error-shake");
      backgroundMax.classList.remove("error-shake");

    }, 3000);
  }
  // Se não forem os dois, verifica se APENAS o mínimo está vazio
  else if (minInput === "") {
    statusMessage.innerHTML = "Coloque o número minino para sortear";

    backgroundMin.style.background = "rgba(255, 0, 0, 0.2)";

    backgroundMin.classList.add("error-shake");

    setTimeout(() => {
      statusMessage.innerHTML = "Sortear um número";

      backgroundMin.style.background = "";

      backgroundMin.classList.remove("error-shake");
    }, 3000);
  }
  // Verifica se APENAS o máximo está vazio
  else if (maxInput === "") {
    statusMessage.innerHTML = "Coloque o número máximo para sortear";
    backgroundMax.style.background = "rgba(255, 0, 0, 0.2)";

    backgroundMax.classList.add("error-shake");

    setTimeout(() => {
      statusMessage.innerHTML = "Sortear um número";

      backgroundMax.style.background = "";

      backgroundMax.classList.remove("error-shake");
    }, 3000);
  }
  // Se chegou aqui, nenhum está vazio. Segue para o sorteio!
  else {
    //Somente aqui, se não estiverem vazios, transformamos em números
    const min = Math.ceil(minInput);
    const max = Math.floor(maxInput);

    //Verificamos a ordem dos números
    if (min === max) {
      statusMessage.innerHTML = "Os números precisam ser diferentes!";

      backgroundMin.style.background = "rgba(255, 0, 0, 0.2)";
      backgroundMax.style.background = "rgba(255, 0, 0, 0.2)";

      backgroundMin.classList.add("error-shake");
      backgroundMax.classList.add("error-shake");

      backgroundMin.value = "";
      backgroundMax.value = "";

      setTimeout(() => {
        statusMessage.innerHTML = "Sortear um número";
        backgroundMin.style.background = "";
        backgroundMax.style.background = "";
        backgroundMin.classList.remove("error-shake");
        backgroundMax.classList.remove("error-shake");
      }, 3000);
      // verifica apenas se o mínimo é MAIOR que o máximo
    } else if (min > max) {
      statusMessage.innerHTML = "O mínimo tem que ser menor que o máximo!";

      backgroundMin.style.background = "rgba(255, 0, 0, 0.2)";
      backgroundMax.style.background = "rgba(255, 0, 0, 0.2)";

      backgroundMin.classList.add("error-shake");
      backgroundMax.classList.add("error-shake");

      backgroundMin.value = "";
      backgroundMax.value = "";

      setTimeout(() => {
        statusMessage.innerHTML = "Sortear um número";

        backgroundMin.style.background = "";
        backgroundMax.style.background = "";

        backgroundMin.classList.remove("error-shake");
        backgroundMax.classList.remove("error-shake");
      }, 3000);
    } else {
      // Fazemos o sorteio (com o + 1 para incluir o máximo) e mostramos na tela
      const result = Math.floor(Math.random() * (max - min + 1)) + min;
      statusMessage.innerHTML = "Resultado: " + result;

      document.title = "Dev Sorteio | " + result;

      setTimeout(() => {
        document.title = "Dev Sorteio";
      }, 5000);
    }
  }
}
