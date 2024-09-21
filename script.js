const tomada_tempo_button = document.getElementsById('button_tempo');
const index = document.getElementsByClassName('index')[0];
const botoes_iniciais = document.getElementById('button_index');

function mostrarTempo() {
    tomada_tempo_button.style.display = 'block';
    index.style.display = 'none';
    botoes_iniciais.style.display = 'none';
}
