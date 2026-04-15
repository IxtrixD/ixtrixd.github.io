const formulario = document.querySelector('#mensagem');

function validarMensagem(event) {
    event.preventDefault();

    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;
    const msg = document.querySelector('#msg').value;

    if (nome === "" || email === "" || msg === "") {
        alert("Preencha todos os campos antes de enviar.");
    } else {
        alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso`);
        formulario.reset();
    }
}
//waw
formulario.addEventListener('submit', validarMensagem);

const botaoTema = document.querySelector('#botao-tema');
const body = document.body;
const imagem = document.getElementById('tema-imagem');

function mudarTema() {
    body.classList.toggle('tema-vermelho');

    if (body.classList.contains('tema-vermelho')) {
        botaoTema.innerText = "Azul";
        imagem.src = 'Imgs/Teto.jpg';
    } else {
        botaoTema.innerText = "Vermelho";
        imagem.src = 'Imgs/Miku.jpg';
    }
}
botaoTema.addEventListener('click', mudarTema);

const meusProjetos = [
    {
        titulo: "Projeto 1 - UnitOdonto",
        descriçao: "Um aplicativo para o agendamento de consultas em clinicas.",
        link: "https://github.com/IxtrixD/UnitOdonto"
    },
    {
        titulo: "Projeto 2 - Calculadora Simples",
        descriçao: "Apenas uma calculadora.",
        link: "https://github.com/IxtrixD/Calculadora_Simples"
    }
];
function mostrarProjetos() {
    const container = document.querySelector('.container-projetos');

    container.innerHTML = "";

    meusProjetos.forEach(projeto => {
        const cardHTML = `
            <article class="card-projeto">
                <h3>${projeto.titulo}</h3>
                <p>${projeto.descriçao}</p>
                <a href="${projeto.link}" target="_blank">Ver no GitHub</a>
            </article>
        `;
        container.innerHTML += cardHTML;
    })
}
mostrarProjetos();
