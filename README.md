# Desafios Pulsus

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

##### NumberListContiguousSublistIterator
Responsável por iterar sobre todas possíveis sublistas contíguas de uma NumberList.
Dentre os principais motivos para a criação dessa classe estão a separação de responsabilidades,
melhor leitura do código, e possibilidade de criarmos novos iteradores com outras
finalidades e performances, que poderiam ser utilizados facilmente no lugar do atual.

## Desafio 2: Maior cadeia de caracteres repetidos
A partir de uma string, encontrar a maior cadeia de caracteres repetidos
na mesma.
