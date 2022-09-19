const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
        /*
        Para estar acessando a variável "saudacao" 
        é necessário colocar o "this." caso contrário 
        vai aparecer um código de erro.
        */
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcikonal e 00
const falarDePessoa = pessoa.falar.bind(pessoa)
//o bind é o método responsável por amarrar um determinado 
//objeto para ser o dono da execução daquele método
falarDePessoa()  