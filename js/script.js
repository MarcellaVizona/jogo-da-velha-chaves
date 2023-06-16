/* Variaveis*/
let btn1 = 0;
let btn2 = 0;
let btn3 = 0;
let btn4 = 0;
let btn5 = 0;
let btn6 = 0;
let btn7 = 0;
let btn8 = 0;
let btn9 = 0;
let controle = 0;
let jogada = 0;
let FinalJogo = false;

// Jogadores
let jogador1 = null;
let jogador2 = null;

// Personagens
let chaves = "url('./img/chaves.png')";
let kiko = "url('./img/kiko.png')";
let chiquinha = "url('./img/chiquinha.png')";
let donaflorinda = "url('./img/donaflorinda.png')";
let seumadruga = "url('./img/seumadruga.png')";
let bruxa71 = "url('./img/bruxa.png')";
let donaneves = "url('./img/donaneves.png')";
let seubarriga = "url('./img/seubarriga.png')";
let popis = "url('./img/popis.png')";
let nhonho = "url('./img/nhonho.png')";
let jaiminho = "url('./img/jaiminho.png')";
let professor = "url('./img/professor.png')";

// Atribui imagens para escolha do personage
let chaves1 = document.getElementById('chaves1');
let chaves2 = document.getElementById('chaves2');
let chaves3 = document.getElementById('chaves3');
let chaves4 = document.getElementById('chaves4');
let chaves5 = document.getElementById('chaves5');
let chaves6 = document.getElementById('chaves6');
let chaves7 = document.getElementById('chaves7');
let chaves8 = document.getElementById('chaves8');
let chaves9 = document.getElementById('chaves9');
let chaves10 = document.getElementById('chaves10');
let chaves11 = document.getElementById('chaves11');
let chaves12 = document.getElementById('chaves12');

chaves1.style.backgroundImage = chaves;
chaves2.style.backgroundImage = kiko;
chaves3.style.backgroundImage = chiquinha;
chaves4.style.backgroundImage = donaflorinda;
chaves5.style.backgroundImage = seumadruga;
chaves6.style.backgroundImage = bruxa71;
chaves7.style.backgroundImage = donaneves;
chaves8.style.backgroundImage = seubarriga;
chaves9.style.backgroundImage = popis;
chaves10.style.backgroundImage = nhonho;
chaves11.style.backgroundImage = jaiminho;
chaves12.style.backgroundImage = professor;

// Container
let sectionPersonagens = document.getElementById('containerPersonagens');
let sectionTabuleiro = document.getElementById('containerTabuleiro');
let sectionReiniciar = document.getElementById('containerReiniciar');
let sectionVoltar = document.getElementById('containerVoltar');

sectionTabuleiro.style.display = 'none';


/* Click botão 1 */
function clickBtn1() {

    let btn = document.getElementById('btn1');

    if (btn.value == " " && !FinalJogo) {
        jogada++;
        if (controle == 0) {
            controle = 1;
            btn.style.backgroundImage = jogador1;
            btn1 = "X";
        } else {
            controle = 0;
            btn.style.backgroundImage = jogador2
            btn1 = "O";
        }
    }
    VerificarGanhador();
}

/* Click botão 2 */
function clickBtn2() {

    let btn = document.getElementById('btn2');

    if (btn.value == " " && !FinalJogo) {
        jogada++;
        if (controle == 0) {
            controle = 1;
            btn.style.backgroundImage = jogador1;
            btn2 = "X";
        } else {
            controle = 0;
            btn.style.backgroundImage = jogador2;
            btn2 = "O";
        }
    }
    VerificarGanhador();
}

/* Click botão 3 */
function clickBtn3() {

    let btn = document.getElementById('btn3');

    if (btn.value == " " && !FinalJogo) {
        jogada++;
        if (controle == 0) {
            controle = 1;
            btn.style.backgroundImage = jogador1;
            btn3 = "X";
        } else {
            controle = 0;
            btn.style.backgroundImage = jogador2;
            btn3 = "O";
        }
    }
    VerificarGanhador();
}

/* Click botão 4*/
function clickBtn4() {
    let btn = document.getElementById('btn4');

    if (btn.value == " " && !FinalJogo) {
        jogada++;
        if (controle == 0) {
            controle = 1;
            btn.style.backgroundImage = jogador1;
            btn4 = "X";
        } else {
            controle = 0;
            btn.style.backgroundImage = jogador2;
            btn4 = "O";
        }
    }
    VerificarGanhador();
}

/* Click botão 5 */
function clickBtn5() {

    let btn = document.getElementById('btn5');

    if (btn.value == " " && !FinalJogo) {
        jogada++;
        if (controle == 0) {
            controle = 1;
            btn.style.backgroundImage = jogador1;
            btn5 = "X";
        } else {
            controle = 0;
            btn.style.backgroundImage = jogador2;
            btn5 = "O";
        }
    }
    VerificarGanhador();
}

/* Click botão 6 */
function clickBtn6() {

    let btn = document.getElementById('btn6');

    if (btn.value == " " && !FinalJogo) {
        jogada++;
        if (controle == 0) {
            controle = 1;
            btn.style.backgroundImage = jogador1;
            btn6 = "X";
        } else {
            controle = 0;
            btn.style.backgroundImage = jogador2;
            btn6 = "O";
        }
    }
    VerificarGanhador();
}

/* Click botão 7 */
function clickBtn7() {

    let btn = document.getElementById('btn7');

    if (btn.value == " " && !FinalJogo) {
        jogada++;
        if (controle == 0) {
            controle = 1;
            btn.style.backgroundImage = jogador1;
            btn7 = "X";
        } else {
            controle = 0;
            btn.style.backgroundImage = jogador2;
            btn7 = "O";
        }
    }
    VerificarGanhador();
}

/* Click botão 8 */
function clickBtn8() {
    let btn = document.getElementById('btn8');

    if (btn.value == " " && !FinalJogo) {
        jogada++;
        if (controle == 0) {
            controle = 1;
            btn.style.backgroundImage = jogador1;
            btn8 = "X";
        } else {
            controle = 0;
            btn.style.backgroundImage = jogador2;
            btn8 = "O";
        }
    }
    VerificarGanhador();
}
/* Click botão 9 */
function clickBtn9() {

    let btn = document.getElementById('btn9');

    if (btn.value == " " && !FinalJogo) {
        jogada++;
        if (controle == 0) {
            controle = 1;
            btn.style.backgroundImage = jogador1;
            btn9 = "X";
        } else {
            controle = 0;
            btn.style.backgroundImage = jogador2;
            btn9 = "O";
        }
    }
    VerificarGanhador();
}

/*Verificar ganhador*/
function VerificarGanhador() {
    let lblJogador = document.getElementById("lblJogador");
    let lblJogadas = document.getElementById("lblJogadas");

    /*Verificar se jogador X ganhou */
    if (btn1 == 'X' && btn2 == 'X' && btn3 == 'X') {
        FinalJogo = true;
        lblJogador.innerText = 'O jogador 1 ganhou';
        lblJogadas.innerText = '';
        return;

    }
    if (btn4 == 'X' && btn5 == 'X' && btn6 == 'X') {
        FinalJogo = true;
        lblJogador.innerText = 'O jogador 1 ganhou';
        lblJogadas.innerText = '';
        return;

    }
    if (btn7 == 'X' && btn8 == 'X' && btn9 == 'X') {
        FinalJogo = true;
        lblJogador.innerText = 'O jogador 1 ganhou';
        lblJogadas.innerText = '';
        return;

    }
    if (btn1 == 'X' && btn4 == 'X' && btn7 == 'X') {
        FinalJogo = true;
        lblJogador.innerText = 'O jogador 1 ganhou';
        lblJogadas.innerText = '';
        return;

    }
    if (btn2 == 'X' && btn5 == 'X' && btn8 == 'X') {
        FinalJogo = true;
        lblJogador.innerText = 'O jogador 1 ganhou';
        lblJogadas.innerText = '';
        return;

    }
    if (btn3 == 'X' && btn6 == 'X' && btn9 == 'X') {
        FinalJogo = true;
        lblJogador.innerText = 'O jogador 1 ganhou';
        lblJogadas.innerText = '';
        return;

    }
    if (btn1 == 'X' && btn5 == 'X' && btn9 == 'X') {
        FinalJogo = true;
        lblJogador.innerText = 'O jogador 1 ganhou';
        lblJogadas.innerText = '';
        return;

    }
    if (btn3 == 'X' && btn5 == 'X' && btn7 == 'X') {
        FinalJogo = true;
        lblJogador.innerText = 'O jogador 1 ganhou';
        lblJogadas.innerText = '';
        return;

    }


    /*Verificar se jogador O ganhou */
    if (btn1 == 'O' && btn2 == 'O' && btn3 == 'O') {
        FinalJogo = true;
        lblJogador.innerText = 'O jogador 2 ganhou';
        lblJogadas.innerText = '';
        return;
    }

    if (btn4 == 'O' && btn5 == 'O' && btn6 == 'O') {
        FinalJogo = true;
        lblJogador.innerText = 'O jogador 2 ganhou';
        lblJogadas.innerText = '';
        return;

    }
    if (btn7 == 'O' && btn8 == 'O' && btn9 == 'O') {
        FinalJogo = true;
        lblJogador.innerText = 'O jogador 2 ganhou';
        lblJogadas.innerText = '';
        return;

    }
    if (btn1 == 'O' && btn4 == 'O' && btn7 == 'O') {
        FinalJogo = true;
        lblJogador.innerText = 'O jogador 2 ganhou';
        lblJogadas.innerText = '';
        return;

    }
    if (btn2 == 'O' && btn5 == 'O' && btn8 == 'O') {
        FinalJogo = true;
        lblJogador.innerText = 'O jogador 2 ganhou';
        lblJogadas.innerText = '';
        return;

    }
    if (btn3 == 'O' && btn6 == 'O' && btn9 == 'O') {
        FinalJogo = true;
        lblJogador.innerText = 'O jogador 2 ganhou';
        lblJogadas.innerText = '';
        return;

    }
    if (btn1 == 'O' && btn5 == 'O' && btn9 == 'O') {
        FinalJogo = true;
        lblJogador.innerText = 'O jogador 2 ganhou';
        lblJogadas.innerText = '';
        return;

    }
    if (btn3 == 'O' && btn5 == 'O' && btn7 == 'O') {
        FinalJogo = true;
        lblJogador.innerText = 'O jogador 2 ganhou';
        lblJogadas.innerText = '';
        return;

    }
    /* Verifica se aconteceu empate*/
    if (jogada == 9) {
        FinalJogo = true;
        lblJogador.innerText = 'Empate';
        lblJogadas.innerText = ' ';
        return;

    }

    if (controle == 0) {
        lblJogador.innerText = 'Jogador 1';
    } else {
        lblJogador.innerText = 'Jogador 2'
    }

    lblJogadas.innerText = '(' + (jogada + 1) + 'ª jogada)';
}

/* Click do botão reiniciar*/
function clickReiniciar() {
    btn1 = 0;
    btn2 = 0;
    btn3 = 0;
    btn4 = 0;
    btn5 = 0;
    btn6 = 0;
    btn7 = 0;
    btn8 = 0;
    btn9 = 0;
    controle = 0;
    jogada = 0;
    FinalJogo = false;
    let b1 = document.getElementById('btn1');
    let b2 = document.getElementById('btn2');
    let b3 = document.getElementById('btn3');
    let b4 = document.getElementById('btn4');
    let b5 = document.getElementById('btn5');
    let b6 = document.getElementById('btn6');
    let b7 = document.getElementById('btn7');
    let b8 = document.getElementById('btn8');
    let b9 = document.getElementById('btn9');

    b1.style.backgroundImage = null;
    b2.style.backgroundImage = null;
    b3.style.backgroundImage = null;
    b4.style.backgroundImage = null;
    b5.style.backgroundImage = null;
    b6.style.backgroundImage = null;
    b7.style.backgroundImage = null;
    b8.style.backgroundImage = null;
    b9.style.backgroundImage = null;

    /*Reiniciar Label*/
    let lblJogador = document.getElementById('lblJogador');
    let lblJogadas = document.getElementById('lblJogadas');
    lblJogador.innerText = 'Jogador 1'
    lblJogadas.innerText = '( 1ª Jogada)'

}

function clickchaves(pokemonSelecionado) {
    let jogadorSelecionado = null;

    if (pokemonSelecionado == 'chaves') {
        jogadorSelecionado = chaves;
    } else if (pokemonSelecionado == 'kiko') {
        jogadorSelecionado = kiko;
    } else if (pokemonSelecionado == 'chiquinha') {
        jogadorSelecionado = chiquinha;
    } else if (pokemonSelecionado == 'donaflorinda') {
        jogadorSelecionado = donaflorinda;
    } else if (pokemonSelecionado == 'seumadruga') {
        jogadorSelecionado = seumadruga;
    } else if (pokemonSelecionado == 'bruxa71') {
        jogadorSelecionado = bruxa71;
    } else if (pokemonSelecionado == 'donaneves') {
        jogadorSelecionado = donaneves;
    } else if (pokemonSelecionado == 'seubarriga') {
        jogadorSelecionado = seubarriga;
    } else if (pokemonSelecionado == 'popis') {
        jogadorSelecionado = popis;
    } else if (pokemonSelecionado == 'nhonho') {
        jogadorSelecionado = nhonho;
    } else if (pokemonSelecionado == 'jaiminho') {
        jogadorSelecionado = jaiminho;
    } else if (pokemonSelecionado == 'professor') {
        jogadorSelecionado = professor;
    }

    if (jogadorSelecionado == null) {
        alert('Erro ao selecionar o personagem');
        return;
    }

    let lblOrdemPersonagem = document.getElementById('ordemPersonagem');
    if (jogador1 == null) {
        jogador1 = jogadorSelecionado;
        lblOrdemPersonagem.innerText = '2º'
    } else {
        jogador2 = jogadorSelecionado;
        sectionPersonagens.style.display = 'none'
        sectionTabuleiro.style.display = 'block';
        sectionReiniciar.style.display = 'block';
        sectionVoltar.style.display = 'block';
        document.getElementById('btnReiniciar').removeAttribute('hidden')
        document.getElementById('btnVoltar').removeAttribute('hidden')
    }
}

