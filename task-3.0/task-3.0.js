var mickiewicz = 'Litwo, ojczyzno moja, ty jesteś jak zdrowie'

console.log('Mamy zdanie: ', mickiewicz)

var spacja = mickiewicz.indexOf(' ')

var drugaSpacja = mickiewicz.indexOf(' ', spacja + 1)

var slowo = mickiewicz.slice(++spacja, drugaSpacja)

console.log('Drugie słowo tego zdania to: ', slowo)

console.log('Czy drugie słowo zawiera literę "a"?', slowo.indexOf('a') !== -1)