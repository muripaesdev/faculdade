
// Muda a cor baseado no valor
if (contador > 0) {
display.style.color = "#27ae60"; // Verde para positivo
} else if (contador < 0) {
display.style.color = "#e74c3c"; // Vermelho para negativo
} else {
display.style.color = "#2c3e50"; // Cinza para zero
}
// EVENTO: Botão +
btnMais.addEventListener("click", function() {
contador++; // Incrementa em 1
atualizarDisplay(); // Atualiza a tela
});
// EVENTO: Botão −
btnMenos.addEventListener("click", function() {
contador--; // Decrementa em 1
atualizarDisplay();
});
// EVENTO: Botão Reset
btnReset.addEventListener("click", function() {
contador = 0; // Volta para zero
atualizarDisplay();
});