# 🎲 DevSorteio

Um gerador de números aleatórios simples, interativo e com validações de interface, projetado para oferecer uma excelente experiência ao usuário (UX) através de feedbacks visuais dinâmicos.

## 🚀 Funcionalidades

* **Sorteio em Intervalo Customizado:** O usuário define o valor mínimo e máximo para realizar o sorteio.
* **Validações Inteligentes:** O sistema verifica automaticamente e bloqueia o sorteio se:
  * Ambos ou apenas um dos campos estiverem em branco.
  * Os números inseridos forem idênticos.
  * O número mínimo informado for maior que o número máximo.
* **Feedback Visual e Animado:** Em caso de erro de preenchimento, os campos de input ganham um fundo vermelho translúcido, executam uma animação de tremor (*shake*) para capturar a atenção, e os valores errados são apagados automaticamente.
* **Notificação na Aba do Navegador:** O resultado do sorteio atualiza dinamicamente o título da aba da página, facilitando a visualização.
* **Feedback Temporizado:** Avisos de erro, estilos visuais e instruções retornam ao estado original automaticamente após 3 segundos, mantendo a interface sempre limpa e pronta para o próximo uso.

## 🛠️ Tecnologias Utilizadas

* `HTML5` (Estrutura Semântica)
* `CSS3` (Responsividade e Animações com `@keyframes`)
* `JavaScript (Vanilla)`

## 💡 Lógica e Aprendizados

Neste projeto, foram aplicados conceitos essenciais de JavaScript voltados para a interação com o usuário e Clean Code:
* **Manipulação Avançada do DOM:** Uso de `document.querySelector` e `.innerHTML` para atualizar textos; manipulação de `.style` e `classList.add() / .remove()` para injetar feedbacks visuais e animações em tempo real; e controle da propriedade `.value` para limpar inputs.
* **Boas Práticas de Código:** Declaração eficiente de constantes apontando para elementos do DOM no topo da função, evitando repetições e otimizando a leitura do código.
* **Temporizadores:** Implementação do `setTimeout` para resetar mensagens de status e remover classes de erro sem a necessidade de recarregar a página.
* **Matemática no JS:** Utilização do objeto `Math` (`Math.random`, `Math.ceil`, `Math.floor`) para garantir o arredondamento correto e a geração aleatória dentro do intervalo exato.
* **Controle de Fluxo:** Estruturas condicionais (`if`, `else if`, `else`) e operadores lógicos (`&&`, `===`) meticulosamente desenhadas para garantir que todas as regras de negócio e exceções tivessem respostas específicas para o usuário.