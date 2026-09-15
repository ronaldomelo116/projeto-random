# 🎲 DevSorteio

Um gerador de números aleatórios simples, interativo e com validações de interface, projetado para oferecer uma boa experiência ao usuário através de feedbacks dinâmicos na tela.

## 🚀 Funcionalidades

* **Sorteio em Intervalo Customizado:** O usuário define o valor mínimo e máximo para realizar o sorteio.
* **Validações Inteligentes:** O sistema verifica automaticamente se:
  * Ambos os campos estão em branco.
  * Apenas um dos campos (mínimo ou máximo) não foi preenchido.
  * O número mínimo informado é maior ou igual ao número máximo.
* **Feedback Temporizado:** Avisos de erro ou instruções temporárias retornam ao texto original automaticamente após 3 segundos, mantendo a interface limpa e intuitiva.

## 🛠️ Tecnologias Utilizadas

* `HTML5`
* `CSS3`
* `JavaScript (Vanilla)`

## 💡 Lógica e Aprendizados

Neste projeto, foram aplicados conceitos essenciais de JavaScript voltados para a interação com o usuário:
* **Manipulação do DOM:** Uso de `document.querySelector` e `.innerHTML` para atualizar textos na tela em tempo real.
* **Temporizadores:** Implementação do `setTimeout` para resetar mensagens de status sem a necessidade de recarregar a página.
* **Matemática no JS:** Utilização do objeto `Math` (`Math.random`, `Math.ceil`, `Math.floor`) para garantir o arredondamento correto e a geração aleatória dentro do intervalo exato.
* **Controle de Fluxo:** Estruturas condicionais (`if`, `else if`, `else`) e operadores lógicos (`&&`) para garantir que todas as regras de negócio e exceções fossem cobertas.
