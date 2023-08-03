//#################################################
// 01. Introdução

function dizerOla() {
    // este é o corpo da função; ele começa com abre chaves...
    console.log("Olá, mundo!")
    console.log("Hello world!");
    console.log("¡Hola mundo!");
    console.log("Hallo wereld!");
    // ...e termina com fecha chaves
}

dizerOla();

//#################################################
// 02. Valores de retorno

// A palavra chave 'return' encerra a função imediatamente e retorna o valor especificado para o programa

function criarMensagem() {
    return "Olá, Brasil!"
}

// A linha abaixo é substituída por "Olá, Brasil!"
criarMensagem();

// Eu posso atribuir o valor de retorno da função à uma constante e usar a constante
const mensagem = criarMensagem();
console.log(mensagem)

// Eu também posso usar a função como sendo o próprio valor
console.log(criarMensagem());

// 03. Chamar a função VS. Referenciar a função

console.log(criarMensagem());
console.log(criarMensagem);

const funcao = criarMensagem;
funcao();

// Atribuindo uma função à propriedade de um objeto
const objeto = {};
objeto.funcao = criarMensagem;
objeto.funcao();

// Atribuindo uma função ao elemento de um vetor
const vetor = [1, 2, 3];
vetor[1] = criarMensagem;
vetor[1]();

//#################################################
// 04. Argumentos da função

function media(a, b) {
    return (a+b)/2;
}

media(5,10);

// Os argumentos de uma função só existem dentro dela

const a = 5, b = 10;
avg(a, b);


function f(x) {
    console.log(`dentro de f: x=${x}`);
    x = 5;
    console.log(`dentro de f: x=${x} (após atribuição)`);
}

let x = 3;
console.log(`antes de chamar f: x=${x}`);
f(x);
console.log(`depois de chamar f: x=${x}`);
   

// 04-b. Desestruturando argumentos

function criarFrase({ sujeito, verbo, objeto }) {
    return `${sujeito} ${verbo} ${objeto}`;
}
const o = {
    sujeito: "Eu",
    verbo: "amo",
    objeto: "JavaScript",
};

criarFrase(o); 

function criarFrase([ sujeito, verbo, objeto ]) {
    return `${sujeito} ${verbo} ${objeto}`;
}
const palavras = [ "Eu", "amo", "JavaScript" ];

criarFrase(palavras); // "Eu amo JavaScript"


// Usando o operador espalhamento (...) para receber argumentos adicionais
function adicionarPrefixo(prefixo, ...palavras) {

    const palavrasComPrefixo = [];

    for(let i=0; i<palavras.length; i++) {
        palavrasComPrefixo[i] = prefixo + palavras[i];
    }

    return palavrasComPrefixo;
}

adicionarPrefixo("pre", "tensão", "posição", "conceito"); 


// 04-c. Argumentos padrão

function f(a, b = "valor-padrão", c = 3) {
    return `${a} - ${b} - ${c}`;
}

f(5, 6, 7); // "5 - 6 - 7"
f(5, 6); // "5 - 6 - 3"
f(5); // "5 - valor-padrão - 3"
f(); // "undefined - valor-padrão - 3"
   

//#################################################
// 05. Funções como sendo propriedades de objetos

// Quando uma função é uma propriedade de um objeto, ela é chamada de método

const cachorro = {
    nome: 'Fred', // propriedade de tipo primitivo
    latir: function() { return 'Au!'; }, // propriedade função (método)
}

// ES6 introduz uma nova sintaxe para criar métodos

const cachorro2 = {
    nome: 'Fred', // primitive property
    latir() { return 'Au!'; }, // function property (method)
}
   

//#################################################
// 06. A palavra-chave this

const pessoa = {
    nome: 'Ramon',
    falar() { return `Meu nome é ${this.nome}!`; },
}

pessoa.falar(); // "My name is Wallace!

const falar = pessoa.falar;
falar === pessoa.falar; // true; both variables refer to the same function
falar(); // "My name is !"




const pessoa2 = {

    nome: 'Julia',

    dizerOiAoContrario: function() {

        function criarNomeAoContrario() {
            let nomeAoContrario = '';
            for(let i=this.nome.length-1; i>=0; i--) {
                nomeAoContrario += this.nome[i];
            }
            return nomeAoContrario;
        }

        return `${criarNomeAoContrario()} é emon uem ,iO`;
    },
};

pessoa2.dizerOiAoContrario();


const pessoa3 = {

    nome: 'Julia',

    dizerOiAoContrario: function() {
        const self = this;

        function criarNomeAoContrario() {
            let nomeAoContrario = '';
            for(let i=self.nome.length-1; i>=0; i--) {
                nomeAoContrario += self.nome[i];
            }
            return nomeAoContrario;
        }

        return `${criarNomeAoContrario()} é emon uem ,iO`;
    },
};

pessoa3.dizerOiAoContrario();

//#################################################
// 07. Expressões de funções e funções anônimas


//#################################################
// 08. Notação de seta

// Funções seta permitem simplificar a sintaxe de três maneiras:
/*
1. Omitir o comando 'function'
2. Se a função recebe apenas um argumento, você pode omitir os parênteses
3. Se o corpo da função for uma única expressão, você pode omitir as chaves e o comando 'return'
*/

const f1 = function() { return "olá!"; }
// OU const f1 = () => "hello!";
const f2 = function(name) { return `Olá, ${name}!`; }
// OU const f2 = name => `Hello, ${name}!`;
const f3 = function(a, b) { return a + b; }
// OU const f3 = (a,b) => a + b;

// Funções flecha dentro de objetos têm acesso à propriedade 'this'

const pessoa4 = {
    nome: 'Julia',
    dizerOiAoContrario: function() {
        const criarNomeAoContrario = () => {
            let nomeAoContrario = '';
            for(let i=this.nome.length-1; i>=0; i--) {
                nomeAoContrario += this.nome[i];
            }
            return nomeAoContrario;
        }
        return `${criarNomeAoContrario()} é emon uem ,iO`;
    },
};


//#################################################
// 09. Métodos call, apply, e bind

const bruce = { name: "Bruce" };
const madeline = { name: "Madeline" };
// this function isn't associated with any object, yet
// it's using 'this'!
function greet() {
 return `Hello, I'm ${this.name}!`;
}
greet(); // "Hello, I'm !" - 'this' not bound
greet.call(bruce); // "Hello, I'm Bruce!" - 'this' bound to 'bruce'
greet.call(madeline); // "Hello, I'm Madeline!" - 'this' bound to 'madeline'

// O primeiro argumento do método 'call' é o valor que é vinculado a 'this', e os argumentos restantes se tornam os argumentos da função

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}
update.call(bruce, 1949, 'singer');
// bruce is now { name: "Bruce", birthYear: 1949,
// occupation: "singer" }
update.call(madeline, 1942, 'actress');
// madeline is now { name: "Madeline", birthYear: 1942,
// occupation: "actress" }
   



// apply

update.apply(bruce, [1955, "actor"]);
 // bruce is now { name: "Bruce", birthYear: 1955,
 // occupation: "actor" }
update.apply(madeline, [1918, "writer"]);
 // madeline is now { name: "Madeline", birthYear: 1918,
 // occupation: "writer" }

const numeros = [2, 3, -5, 15, 7];
Math.min.apply(null, numeros); // -5
Math.max.apply(null, numeros); // 15


// Com o operador de espalhamento (...), nós podemos conseguir o mesmo resultado que com o método 'apply'

const newBruce = [1940, "martial artist"];
update.call(bruce, ...newBruce); // equivalent to apply(bruce, newBruce)
Math.min(...arr); // -5
Math.max(...arr); // 15

// bind

const updateBruce = update.bind(bruce);
updateBruce(1904, "actor");
// bruce is now { name: "Bruce", birthYear: 1904, occupation: "actor" }
updateBruce.call(madeline, 1274, "king");
// bruce is now { name: "Bruce", birthYear: 1274, occupation: "king" };
// madeline is unchanged



const updateBruce1949 = update.bind(bruce, 1949);
updateBruce1949("singer, songwriter");
 // bruce is now { name: "Bruce", birthYear: 1949,
 // occupation: "singer, songwriter" }
