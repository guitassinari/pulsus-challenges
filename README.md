# Desafios Pulsus

## Informações gerais
Todas as aplicações foram feitas em Javascript, para serem executados em ambiente NodeJS.
A versão do NodeJS utilizada foi a 8.11.1.

## Execução das aplicações
Cada aplicação será identificada por uma pasta na raiz do projeto. Dentro destas pastas
haverá o arquivo `mainTest.test.js` que pode ser executado através do `NodeJS` da seguinte maneira

```
node mainTest.test.js [parameters]
```

onde `parameters` são argumentos que podem ser passados para as aplicações
e variam de uma para a outra.

OBS: os arquivos denominados `_main.js` contém o fluxo principal da aplicação, enquanto
`main.test.jst.js` utiliza essa lógica e é responsável apenas por mostrar os resultados na tela.
Isto foi feito para que `_main.js` possa exportar este fluxo através e, portanto,
possibilitando que o mesmo seja testado.

## Testes
Por serem aplicações pequenas e isoladas, cada aplicação possui, em sua respectiva pasta,
uma pasta `tests` contendo todos os testes criados.

Para executá-los siga os seguintes passos:

1.  Na raiz do projeto, execute `npm install` para instalar as dependências necessárias para
a execução dos testes, como o [mocha](https://github.com/mochajs/mocha) e [expect](https://github.com/mjackson/expect).
2. Navegue até a pasta `tests` da aplicação desejada e execute
```
mocha [filepath]
```
onde `filepath` é o nome do arquivo de testes que deseja executar.

## Helpers

### Arguments
Criado especificamente para capturar os argumentos passados na execução da aplicação.

## Desafio 1: Sublista contígua de maior soma
A partir de uma lista de números, encontrar a sua sublista contígua de maior soma de seus elementos
e retornar o índice de início e fim.

### Algoritmo
O algoritmo escolhido foi o mais simples possível.
Iremos iterar sobre todas as possíveis sublistas da lista original, guardando sempre
os índices/posições e a soma da sublista com maior soma.
Ao fim da iteração, teremos as posições de início e fim da sublista desejada,
assim como a sua soma. 

### Design

#### Classes

##### NumberList
Responsável por encapsular uma lista de números e métodos úteis à solução
do problema, como `sum` (soma todos os valores da lista e retorna o resultado)
 e `getSublist` (retorna uma sublista da lista original entre os índices escolhidos)

##### ContiguousSublistIterator
Responsável por iterar sobre todas possíveis sublistas contíguas de uma NumberList.
Dentre os principais motivos para a criação dessa classe estão a separação de responsabilidades,
melhor leitura do código, e possibilidade de criarmos novos iteradores com outras
finalidades e performances, que poderiam ser utilizados facilmente no lugar do atual.

## Desafio 2: Maior cadeia de caracteres repetidos
A partir de uma string, encontrar a maior cadeia de caracteres repetidos
na mesma.

### Algoritmo
Javascript possui suporte a Expressões Regulares, que é uma ferramenta extremamente
útil para o desafio apresentado.
Através de expressões regulares iremos encontrar todas as repetições de letras na palavra
desejada. Depois apenas iremos buscar a maior dentre estas ocorrências. 

### Design

#### Classes

##### Word
Responsável por encapsular comportamentos da palavra passada. Será usada basicamente
para conter os métodos utilizados na procura e identificação das cadeias de caracteres.
