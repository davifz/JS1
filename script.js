alert('Seja bem-vindo ao nosso jogo!');
  let numeroSecreto = 6;
  let chute;
  let tentativas = 0;
  while (chute != numeroSecreto) {
    chute = parseInt(prompt('Escolha um número entre 1 e 10'));
    tentativas++;

    if (chute == numeroSecreto) {
      alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} na tentativa ${tentativas}.`);
    } else if (chute > numeroSecreto) {
      alert(`O número secreto é menor que ${chute}. Tente novamente.`);
    } else {
      alert(`O número secreto é maior que ${chute}. Tente novamente.`);
    }
  }
}
