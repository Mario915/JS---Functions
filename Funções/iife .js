// IIFE = Immediately Invoked Function Expression
// Para evitar usar o escopo global é necessário criar um escopo local 
// Isso é basicamente para evitar bugs

(function(){
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()