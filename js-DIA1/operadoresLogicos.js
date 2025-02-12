// operadores lógicos sao baseados em ideias booleanas, entao sao apenas true or false
//comparação
console.log(1 == "1");
//o resultado será true pois == compara de forma básica

console.log( 1 ==="1");
//sera false pois o === tambem compara o tipo 

console.log(1 >= 1); // maior ou igual
console.log(1 <= 0); // menor ou igual
console.log(1 > 1); // maior
console.log(1 < 0); // menor

let testeE = (3 > 2) && (3 > 1); // nesse caso so é true se ambos estiverem certos (&&) 
let testeOU = (3 > 2) || (1 > 2); // nesse caso é true se um dos dois estiverer certos (||)
console.log(testeE);
console.log(testeOU);

let SIM = true
let testNAO = !SIM;// ele inverte
console.log(testNAO);

//OUTRA FORMA DE USAR
let texto = "texto"; // true pois existe
let vazia = "0"; //true pois por mais q seja zero, é uma string
let numero = 1 //true
let zero = 0 //false

!texto; //false
!!texto; //true

console.log(vazia || texto);// ele mostra ou um ou outro valor, logo o q é true


//--------------------------------------------------------------------------------
// tabela verdade

true || true;    // true
true || false;   // true
false || true;   // true
false || false;  // false

true && true;    // true
true && false;   // false
false && true;   // false
false && false;  // false

!true;           // false
!false;          // true



