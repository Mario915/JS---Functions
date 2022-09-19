const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]
//sem callback
let notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

// Com Callback
notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas2)

//Com callback
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)

/* 
Todos vão dar o mesmo resultado.
Só que são feitos de formas
diferentes justamente para mostrar e 
definir formas mais reduzidas e eficazes 
de demonstrar o mesmo resultado
*/