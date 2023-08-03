//#################################################
// 01. Recapitulando

// vetoray literals
const vetor1 = [1, 2, 3]; // vetoray of numbers
const vetor2 = ["one", 2, "three"]; // nonhomogeneous vetoray
const vetor3 = [[1, 2, 3], ["one", 2, "three"]]; // vetoray containing vetorays
const vetor4 = [ // nonhomogeneous vetoray
    { 
        name: "Fred",
        type: "object",
        luckyNumbers = [5, 7, 13]
    },
    [
        { name: "Susan", type: "object" },
        { name: "Anthony", type: "object" },
    ],
    1,
    function() {
        return "vetorays can contain functions too";
    },
    "three",
];


// accessing elements
vetor1[0]; // 1
vetor1[2]; // 3
vetor3[1]; // ["one", 2, "three"]
vetor4[1][0]; // { name: "Susan", type: "object" }

// vetoray length
vetor1.length; // 3
vetor4.length; // 5
vetor4[1].length; // 2

// increasing vetoray size
vetor1[4] = 5;
vetor1; // [1, 2, 3, undefined, 5]
vetor1.length; // 5

// accessing (not assigning) an index larger than the vetoray
// does *not* change the size of the vetoray
vetor2[10]; // undefined
vetor2.length; // 3

// vetoray constructor (rarely used)
const vetor5 = new Array(); // empty vetoray
const vetor6 = new Array(1, 2, 3); // [1, 2, 3]
const vetor7 = new Array(2); // vetoray of length 2 (all elements undefined)
const vetor8 = new Array("2"); 

//#################################################
// 02. Manipulação do conteúdo de um vetor

// Adicionando ou removendo um único elemento do início ou final do vetor
// push, pop, unshift e shift
const arr = ["b", "c", "d"];
arr.push("e"); // returns 4; arr is now ["b", "c", "d", "e"]
arr.pop(); // returns "e"; arr is now ["b", "c", "d"]
arr.unshift("a"); // returns 4; arr is now ["a", "b", "c", "d"]
arr.shift(); // returns "a"; arr is now ["b", "c", "d"]

// Adicionando vários elemetos no final do vetor
const arr = [1, 2, 3];
arr.concat(4, 5, 6); // returns [1, 2, 3, 4, 5, 6]; arr unmodified
arr.concat([4, 5, 6]); // returns [1, 2, 3, 4, 5, 6]; arr unmodified
arr.concat([4, 5], 6); // returns [1, 2, 3, 4, 5, 6]; arr unmodified
arr.concat([4, [5, 6]]); // returns [1, 2, 3, 4, [5, 6]]; arr unmodified

// Criando um sub-vetor
const arr = [1, 2, 3, 4, 5];
arr.slice(3); // returns [4, 5]; arr unmodified
arr.slice(2, 4); // returns [3, 4]; arr unmodified
arr.slice(-2); // returns [4, 5]; arr unmodified
arr.slice(1, -2); // returns [2, 3]; arr unmodified
arr.slice(-2, -1); // returns [4]; arr unmodified

// Revertendo e ordenando vetores

// reverse
const arr = [1, 2, 3, 4, 5];
arr.reverse(); // arr is now [5, 4, 3, 2, 1]

// sort
const arr = [5, 3, 2, 4, 1];
arr.sort(); // arr is now [1, 2, 3, 4, 5]

const arr = [{ name: "Suzanne" }, { name: "Jim" },
 { name: "Trevor" }, { name: "Amanda" }];
arr.sort(); // arr unchanged
arr.sort((a, b) => a.name > b.name); // arr sorted alphabetically by name property
arr.sort((a, b) => a.name[1] < b.name[1]); // arr sorted reverse alphabetically by second letter of name property

//#################################################
// 03. Pesquisando em um vetor

// INDEXOF
const o = { name: "Jerry" };
const arr = [1, 5, "a", o, true, 5, [1, 2], "9"];
arr.indexOf(5); // returns 1
arr.lastIndexOf(5); // returns 5
arr.indexOf("a"); // returns 2
arr.lastIndexOf("a"); // returns 2
arr.indexOf({ name: "Jerry" }); // returns -1
arr.indexOf(o); // returns 3
arr.indexOf([1, 2]); // returns -1
arr.indexOf("9"); // returns 7
arr.indexOf(9); // returns -1
arr.indexOf("a", 5); // returns -1
arr.indexOf(5, 5); // returns 5
arr.lastIndexOf(5, 4); // returns 1
arr.lastIndexOf(true, 3); // returns -1

//FINDINDEX
const arr = [{ id: 5, name: "Judith" }, { id: 7, name: "Francis" }];
arr.findIndex(o => o.id === 5); // returns 0
arr.findIndex(o => o.name === "Francis"); // returns 1
arr.findIndex(o => o === 3); // returns -1
arr.findIndex(o => o.id === 17); // returns -1

//FIND
const arr = [{ id: 5, name: "Judith" }, { id: 7, name: "Francis" }];
arr.find(o => o.id === 5); // returns object { id: 5, name: "Judith" }
arr.find(o => o.id === 2); // returns null

// acessando o índice do elemento atual na pesquisa
const arr = [1, 17, 16, 5, 4, 16, 10, 3, 49];
arr.find((x, i) => i > 2 && Number.isInteger(Math.sqrt(x))); // returns 4


// especificando 'this' 

class Pessoa {
    static nextId = 0;
    constructor(name) {
        this.name = name;
        this.id = Pessoa.nextId++;
    }
}

const jamie = new Pessoa("Jamie"), juliet = new Pessoa("Juliet"), peter = new Pessoa("Peter"), jay = new Pessoa("Jay");

const arr = [jamie, juliet, peter, jay];
// option 1: direct comparison of ID:
arr.find(p => p.id === juliet.id); // returns juliet object
// option 2: using "this" arg:
arr.find(p => p.id === this.id, juliet); // returns juliet object


// SOME E EVERY

// some
const arr = [5, 7, 12, 15, 17];
arr.some(x => x%2===0); // true; 12 is even
arr.some(x => Number.isInteger(Math.sqrt(x))); // false; no squares

// every
const arr = [4, 6, 16, 36];
arr.every(x => x%2===0); // true; no odd numbers
arr.every(x => Number.isInteger(Math.sqrt(x))); // false; 6 is not square

//#################################################
// 04. Operações básicas de vetores: map e filter

// map
const carrinho = [ { nome: "Celular", preco: 800 }, { nome: "Computador", preco: 1500 }];
const nomes = carrinho.map(x => x.nome);
const precos = carrinho.map(x => x.preco);
const precosComDesconto = precos.map(x => x*0.8);
const nomesMinusculo = nomes.map(String.toLowerCase);

// quando a função é chamada, ela é chamada para cada um dos elementos, com três argumentos: o elemento em si, o índice do elemento, e o vetor completo
const itens = ["Widget", "Gadget"];
const precos = [9.95, 22.95];
const carrinho = itens.map((x, i) => ({ nome: x, preco: precos[i]}));


// filter

// create a deck of playing cards
const cartas = [];
for(let naipe of ['Copas', 'Paus', 'Ouro', 'Espadas']) // copas, paus, ouro, espadas
 for(let valor=1; valor<=13; valor++)
 cartas.push({ naipe, valor });


// get all cards with value 2:
cartas.filter(c => c.valor === 2); // [
 // { suit: 'H', value: 2 },
 // { suit: 'C', value: 2 },
// { suit: 'D', value: 2 },
// { suit: 'S', value: 2 }
// ]

// get all diamonds:
cartas.filter(c => c.naipe === 'D'); // length: 13
// get all face cards
cartas.filter(c => c.valor > 10); // length: 12
// get all face cards that are hearts
cartas.filter(c => c.valor > 10 && c.naipe === 'H'); // length: 3



// Combinando map e filter para selecionar cartas específicas e manipular elas
function cardToString(c) {

    const suits = { 'H': '\u2665', 'C': '\u2663', 'D': '\u2666', 'S': '\u2660' };
    const values = { 1: 'A', 11: 'J', 12: 'Q', 13: 'K' };
    // constructing values each time we call cardToString is not very
    // efficient; a better solution is a reader's exercise
    for(let i=2; i<=10; i++) values[i] = i;
    return values[c.value] + suits[c.suit];
}

// get all cards with value 2:
cards.filter(c => c.value === 2)
.map(cardToString); // [ "2♥", "2♣", "2♦", "2♠" ]

// get all face cards that are hearts
cards.filter(c => c.value > 10 && c.suit === 'H')
.map(cardToString); // [ "J♥", "Q♥", "K♥"    

//#################################################
// 05. Magia com vetores: reduce

// soma dos valores de um vetor
const arr = [5, 7, 2, 4];
const somaDoVetor = arr.reduce((a, x) => a += x, 0);


// se o acumulador inicial não for definido, reduce() pega o primeiro elemento do vetor como sendo o valor inicial e inicia chamando a função a partir do segundo elemento
const arr = [5, 7, 2, 4];
const somaDoVetor = arr.reduce((a, x) => a += x);


// usando um objeto como acumulador. Criando agrupando palavras a partir da primeira letra
const palavras = ["Beachball", "Rodeo", "Angel",
 "Aardvark", "Xylophone", "November", "Chocolate",
 "Papaya", "Uniform", "Joker", "Clover", "Bali"];

const alfabetico = palavras.reduce((a, x) => {
    // Se não houver uma lista com letra, cria a lista
    if(!a[x[0]]) a[x[0]] = [];
    // Adiciona palavra à lista
    a[x[0]].push(x);
    // Retorna a lista para a próxima iteração
    return a;
}, {});


// Criando uma frase somente com palavras longas (mais de 6 caracteres)
const palavras = ["Beachball", "Rodeo", "Angel",
 "Aardvark", "Xylophone", "November", "Chocolate",
 "Papaya", "Uniform", "Joker", "Clover", "Bali"];

const palavrasLongas = palavras.reduce((a, palavra) => palavra.length>6 ? a+" "+palavra : a, "").trim();


//#################################################
// 06. Métodos de vetores e elementos nunca-definidos (ou apagados)

// map, filter, e reduce não invocam a função para elementos que não foram inicializados ou apagados

const vetor = Array(10).map(function(x) { return 5 }); // um vetor com todos elementos 'undefined'

// se você apagar um elemento vetor e chamar o método map(), isso resulta em um vetor com um "buraco"
const arr = [1, 2, 3, 4, 5];
delete arr[2];
arr.map(x => 0); // [0, 0, <1 empty slot>, 0, 0]


//#################################################
// 07. Concatenação de strings

const arr = [1, null, "hello", "world", true, undefined];
delete arr[3];
arr.join(); // "1,,hello,,true,"
arr.join(''); // "1hellotrue"
arr.join(' -- '); // "1 -- -- hello -- -- true --"

// Array.prototype.join pode ser usado para criar listas HTML
const itens = ["Café", "Pão", "Queijo"];
const html = '<ul><li>' + itens.join('</li><li>') + '</li></ul>';
