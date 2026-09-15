function numberGenerator() {
    // 1. Pegamos o valor como texto (sem Math.ceil ou Math.floor ainda!)
    const minInput = document.querySelector('.min-input').value;
    const maxInput = document.querySelector('.max-input').value;
    
    const win = document.getElementById('win');

    // 2. Verificamos se os textos estão vazios
    if (minInput === "" || maxInput === "") {
        win.innerHTML = "coloque os numeros para sortear";
    } else {
        // 3. Somente aqui, se não estiverem vazios, transformamos em números
        const min = Math.ceil(minInput);
        const max = Math.floor(maxInput);

        // 4. Verificamos a ordem dos números
        if (min >= max) {
            win.innerHTML = "O número mínimo tem que ser menor que o máximo!";
        } else {
            // 5. Fazemos o sorteio (com o + 1 para incluir o máximo) e mostramos na tela
            const result = Math.floor(Math.random() * (max - min + 1)) + min;
            win.innerHTML = result;
        }
        // 4. Fazemos o sorteio (com o + 1 para incluir o máximo) e mostramos na tela
        const result = Math.floor(Math.random() * (max - min + 1)) + min;
        win.innerHTML = "Resultado: " + result;
    }
    
}