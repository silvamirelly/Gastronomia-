document.addEventListener('DOMContentLoaded', () => {
    const caixaPerguntas = document.querySelector(".caixa-perguntas");
    const caixaAlternativas = document.querySelector(".caixa-alternativas");
    const caixaResultado = document.querySelector(".caixa-resultado");
    const textoResultado = document.querySelector(".texto-resultado");
    const botaoJogarNovamente = document.querySelector(".novamente-btn");
    const botaoIniciar = document.querySelector(".iniciar-btn");

    const perguntas = [
        {
            enunciado: "Qual ingrediente é essencial para a preparação de um prato típico chamado "paella" em sua versão tradicional?",
            alternativas: [
                {
                    texto: "Peito de frango!",
                    afirmacao: "você errou. "
                },
                {
                    texto: "Frutos do mar!",
                    afirmacao: "para bem você acertou👏."
                }
            ]
        },
        {
            enunciado: "Qual dessas opções é uma especialidade francesa que utiliza fígado de pato ou ganso?",
            alternativas: [
                {
                    texto: "Coq au Vin.",
                    afirmacao: "na próxima você consegue ."
                },
                {
                    texto: "Foie Gras.",
                    afirmacao: "eu sabia que você eria acertar 😄."
                }
            ]
        },
        {
            enunciado: "Em que prato italiano é comum utilizar queijo feito de leite de búfala?",
            alternativas: [
                {
                    texto: "Lasagna.",
                    afirmacao: "não fica triste na próxima você acerta😕."
                },
                {
                    texto: "Mozzarella di Bufala.",
                    afirmacao: "você é inteligente ❤️."
                }
            ]
        },
        {
            enunciado: "Qual tipo de peixe é utilizado para preparar o tradicional "sushi" japonês?",
            alternativas: [
                {
                    texto: "Salmão.",
                    afirmacao: "você acertou continua assim."
                },
                {
                    texto: "Atum.",
                    afirmacao: "resposta errada😬!"
                }
            ]
        },
        {
            enunciado: "Qual tipo de carne é tradicionalmente usada para fazer "prosciutto" italiano? ",
            alternativas: [
                {
                    texto: "Carne de porco.",
                    afirmacao: "right answer😄👏."
                },
                {
                    texto: "Carne de cordeiro.",
                    afirmacao: "wrong answer🥲. "
                }
            ]
        },
    ];

    let atual = 0;
    let perguntaAtual;
    let historiaFinal = "";

    function mostraPergunta() {
        if (atual >= perguntas.length) {
            mostraResultado();
            return;
        }
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
        caixaAlternativas.innerHTML = ""; 
        mostraAlternativas();
    }

    function mostraAlternativas() {
        for (const alternativa of perguntaAtual.alternativas) {
            const botaoAlternativas = document.createElement("button");
            botaoAlternativas.textContent = alternativa.texto;
            botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
            caixaAlternativas.appendChild(botaoAlternativas);
        }
        caixaPerguntas.classList.remove('hidden');
        caixaAlternativas.classList.remove('hidden');
    }

    function respostaSelecionada(opcaoSelecionada) {
        const afirmacoes = opcaoSelecionada.afirmacao;
        historiaFinal += afirmacoes + " ";
        atual++;
        mostraPergunta();
    }

    function mostraResultado() {
        caixaPerguntas.classList.add('hidden');
        caixaAlternativas.classList.add('hidden');
        caixaResultado.classList.remove('hidden');
        textoResultado.textContent = historiaFinal;
    }

    function iniciarQuestionario() {
        botaoIniciar.classList.add('hidden');
        caixaPerguntas.classList.remove('hidden');
        caixaAlternativas.classList.remove('hidden');
        mostraPergunta();
    }

    botaoJogarNovamente.addEventListener("click", () => {
        atual = 0;
        historiaFinal = "";
        caixaResultado.classList.add('hidden');
        botaoIniciar.classList.remove('hidden'); 
    });

    botaoIniciar.addEventListener("click", iniciarQuestionario);

   
    caixaPerguntas.classList.add('hidden');
    caixaAlternativas.classList.add('hidden');
});
