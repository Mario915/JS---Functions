// Função em Java Script é First - Class Object (Citizens)
// Higher - order function

// criar de forma literal
function fun1() { }

//armazenar em uma variável
const fun2 = function () { }

// Armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

// Armazenart em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj. falar())

//passar uma função como param
function run(fun) {
    fun()
}

run(function () { console.log('Executado...') })

//Uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma (2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)