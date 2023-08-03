//#################################################
// 01. Variáveis e Constantes

let nome_usuario = "joão";

let nome_usuario1 = "pedro", nome_usuario2 = "gabriel";

//#################################################
// 02. Regras para nomes de variáveis


// NÚMEROS
let numero = 10;
let numero_decimal = 50.27;
let numeroGrande = 999999999999;
let numeroPequeno = 0.00000000000000001
const infinito = Infinity;
const infinito_negativo = -Infinity;


// STRINGS
let palavra = "laranja";

let frase = "Eu comi uma " + palavra;
let frase_maior = frase + ". Mas eu não gosto de laranjas.";
let palavra2 = "maçã", palavra3 = "abacate";
let frase2 = `Eu fui na feira e comprei uma ${maçã} e um ${abacate}.`;

let usuario = "Ramon"
let mensagem_para_usuario = `Olá, ${usuario}! Seja bem-vindo.`;

let string_com_aspas = 'esta string possui " aspas " no meio dela.';
let string_com_aspas2 = "Esta string possui \" aspas \" no meio dela.";


// BOOLEANO
let emailAutenticado = true;
let senhaCorreta = false;

// Qualquer tipo valor pode ser tratado como verdadeiro ou falso
let string_vazia = "";
let numero_zero = 0;
let string_qualquer = "abc";
let numero_positivo = 50;


// OBJETOS


const dicionario = {
    uber: "Meio de transporte moderno",
    urubu: "É um pássaro preto.",
    uva: "É uma fruta roxa ou verde.",    
}

const pessoa1 = {
    nome: "Pedro",
    idade: 20,
    profissao: "estudante",
}

const pessoa2 = { nome: "Pedro", idade: 20, profissao: "estudante"};

console.log(`Oi, meu nome é ${pessoa1.nome}. Eu tenho ${pessoa1.idade} anos. Eu sou ${pessoa1}.`);

const pessoa3 = {
    nome: "Carlos",
    idade: 25,
    profissao: "pedreiro",

    apresentar() {
        return `Oi, meu nome é ${this.nome}. Eu tenho ${this.idade} anos. Eu sou ${this.profissao}.`
    }
}

console.log(pessoa3.apresentar());

const cachorro1 = {
    nome: "Fred",
    corDoPelo: "marrom",
    raca: "chihuahua",
    possuiRabo: false,
    tamanho: 30,

    latir() {
        console.log("Au au");
    },

    rosnar() {
        console.log("Grrrr");
    },

    rosnar_e_latir() {
        this.rosnar();
        this.latir();
    }
}

cachorro1.rosnar_e_latir();


// VETORES
let vetor_numeros = [1, 2, 3, 4, 5];
let vetor_legumes = ["cenoura", "batata", "abóbora"];
let vetor_misto = [50, "Ramon", true, 2, "pão"];
let vetor_pessoas = [
    {nome: "Maria", idade: 30},
    {nome: "João", idade: 28},
    {nome: "José", idade: 31},
]

// Os índices do vetor começam a partir de 0
let legume1 = vetor_legumes[0];
let legume2 = vetor_legumes[1];

let nomeDaTerceiraPessoa = vetor_pessoas[2].nome;

// NULL e UNDEFINED


// tanto null quanto undefined representam um valor que não existe
// undefined é reservado pelo computador
// null deve ser usado pelo programador

let variavelNaoDefinida;
console.log(variavelNaoDefinida);

let nomeDoProfessor;
nomeDoProfessor = "Ramon";
nomeDoProfessor = null;
// não recomendado
nomeDoProfessor = undefined;


let precoProduto;
precoDoProduto = 50;
precoDoProduto = null; // isto é diferente de dizer que precoDoProduto = 0


//#################################################
// 03. Variáveis vs Constantes: Qual usar


