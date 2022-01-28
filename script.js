console.log("Crie um array que receba 5 itens e exiba no console.")
let jogos = ['World of warcraft', 'Ragnarok', 'Tibia', 'Mario', 'TheSims']
console.log(jogos)


// Utilize um método para adicionar um nome ao inicio do array.

let _jogos = ['World of warcraft', 'Ragnarok', 'Tibia', 'Mario', 'TheSims']
_jogos.unshift('League of legends')
console.log(_jogos)
// Utilize um método para remover o último nome do array.
let $jogos = ['League of legends', 'World of warcraft', 'Ragnarok', 'Tibia', 'Mario', 'TheSims']
$jogos.pop()
console.log($jogos)

// Utilize um método para adicionar dois nomes ao fim do array.
let _jogos_ = ['League of legends', 'World of warcraft', 'Ragnarok', 'Tibia', 'Mario']
_jogos_.push('Alice Madness Returns', 'Minecraft')
console.log(_jogos_)


// Utilize um método para remover o primeiro nome do array.
let jogo = ['League of legends', 'World of warcraft', 'Ragnarok', 'Tibia', 'Mario', 'Alice Madness Returns', 'Minecraft']
jogo.shift()
console.log(jogo)

// Utilize um método para organizar em ordem crescente o seguinte array:
const numbers = [7,5,6,3,8,9,2,1,4]
numbers.sort()
console.log(numbers)