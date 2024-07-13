// PRATICA GUIADA 01

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

    if( typeof Number(answer)=== typeof Number){
        return Number(answer)
    }else{
        return answer
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

// PRATICA GUIADA 02

/*
2. Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável. Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:
    
    a) Crie três novas variáveis, contendo as respostas
    
    b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. Por exemplo:
    Você está usando uma roupa azul hoje? - SIM
*/

const pergunta1 = "Voce usa agenda?"
const pergunta2 = "Voce usa aplicativos de organizacao"
const pergunta3 = "Voce conhece a metodologia agile"

const resposta1 = askByPrompt(pergunta1)
const resposta2 = askByPrompt(pergunta2)
const resposta3 = askByPrompt(pergunta3)


console.log(`
    ${pergunta1} : ${resposta1},
    ${pergunta2} : ${resposta2},
    ${pergunta3} : ${resposta3}
    `)

/*3. Suponha que temos duas variáveis `cao` e `gato`, cada uma com um valor inicial
    
    ```jsx
    let cao = "Mingau"
    let gato = "Bidu"
    ```
    
    Agora, queremos trocar os valores delas, de forma que `cao` passe a ter o valor de `gato` e `gato` passe a ter o valor de `cao.` 
    
    Ou seja, no caso desse exemplo acima, `cao` passaria a ser `“Bidu”` e `gato` passaria a ser `Mingau.`
    
    ```jsx
    let cao = "Mingau"
    let gato = "Bidu"
    
    // Aqui faremos uma lógica para trocar os valores
    
    // Depois de trocados, teremos o seguinte resultado:
    console.log("O novo valor de cao é", cao) // O novo valor de cao é Bidu
    console.log("O novo valor de gato é", gato) // O novo valor de gato é Mingau
    ```
    
    Crie a lógica que deve ser inserida no código para que os valores de `cao` e `gato` sejam trocados, independente de qual valor essas variáveis assumam inicialmente (ou seja: não basta dizer que `cao = "Bidu"` e `gato = "Mingau"` porque se os valores iniciais mudarem, a lógica do seu programa teria que mudar também).*/


export const makeCrossingOver = (value1, value2) =>{
    let v1 = value1;
    let intermediary = v1;
    let v2 = value2;

    v1 = v2
    v2 = intermediary

    console.log(v1, v2)
 }


 /* 4. Escreva um programa que pergunte ao usuário se ele gostaria de ser redirecionado para a página da Labenu. Use para isso um `confirm` e imprima a variável no console. Observe qual o valor recebido pela variável  quando apertamos o botão de `ok` e o de `cancelar`
    
    ```jsx
    const resposta = confirm(" SUA PERGUNTA AQUI ")
    ```
    
    5 . Agora avise o usuário que ele está no site da Labenu usando um `alert`. A mensagem deverá estar guardada em uma variável e esta variável deverá ser colocada dentro do alert
    */                                     


