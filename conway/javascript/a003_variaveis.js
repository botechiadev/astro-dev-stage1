/*
    1. Construa um programa, seguindo os seguintes passos:
        
        a) Declare uma variável para armazenar um nome, sem atribuir um v
        
        b) Declare uma variável para armazenar uma idade, sem atribuir um
        
        c) Imprima na tela o tipo dessas variáveis que acabou de criar, u
comando `typeof`.
        
        d) Reflita: por que esse tipo foi impresso? Escreva a resposta em
comentário de código.
        
        e) Pergunte ao usuário seu nome e sua idade, atribuindo esses doi
variáveis que acabou de criar.
                
        f) Novamente, imprima na tela o tipo dessas variáveis. O que você
Escreva em um comentário de código.
        
        g) Para finalizar, imprima na tela a mensagem: "Olá `nome`,  você tem `idade` anos". 
        Onde `nome` e `idade` são os valores que o usuário inseriu
*/

let nome, idade;

console.log(typeof nome, typeof idade)

// nao foi atribuido nenhum valor a essas logo imprime como undefined

export const askByPrompt = (question)=>{
    let answer = prompt(question)

    if(Number(answer)=== NaN){
        return answer
    }else{
        return Number(answer)
    }
}

idade = askByPrompt('Insira sua idade')
nome = askByPrompt('Insira seu nome')

console.log(typeof nome, typeof idade)

let msg2Print = `"Olá ${nome},  você tem ${idade} anos".`

export const printMsg = (msg)=>{
    console.log(msg)
}

printMsg(msg2Print)