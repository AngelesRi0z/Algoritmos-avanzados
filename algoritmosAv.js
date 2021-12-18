// Ejercicio 1
const numeros =[3,5,7,1,6];                        //Declaracion del arreglo
console.log("Los numeros ingresados son "+numeros);   //Se muestra en consola los elementos de los arreglos
numeros.sort(function(x,y){                          //Se utiliza el metodo .sort para ordenar los elementos del arreglo
    return x-y;
});
var valor=numeros.length-1;                               //Declaracion de variable 
console.log("el numero mas grande es "+ numeros[valor]);  //Imprimir en consola el valor esperado

// Ejercicio 2
numeros.sort(function(x,y){                 //Metodo .sort para ordenar         
    return y-x;                             //Retorna la funcion de manera descentente
});
console.log("Los numeros descendentes son "+numeros); //Imprime en consola el valor

//Ejercicio 3
/*Escriba un programa que tome dos listas y devuelva el mayor número de las dos listas. Sugerencia: llame a la función del ejercicio de clase n. ° 1 (el ejercicio n. ° 1 debe devolver un solo número, el número más grande de la lista).*/

let dos=[10,8,6,9,7];
dos.sort(function(x,y){
    return x-y;
}) 
let valorMayorDeDos=dos.length-1;
console.log("El numero mayor es:" +valorMayorDeDos);




//Matrices
//Ejercicio 1
var arr = ["This", "is", "a", "sentence."];
function printOutString() {
    console.log(arr[0]+" "+arr[1]+" "+arr[2]+" "+arr[3]); // 
}
printOutString();


 //Ejercicio 2
 /* Escribe una función que:
Toma una serie de números.
Duplica el valor de cada número de la matriz.
Imprime la nueva matriz actualizada.
Ejemplo: dada una matriz [1, 2, 4, 5]. La salida debe ser[2, 4, 8, 10]*/

let serie=[1,2,4,5];




//Ejercicio # 3
/*Escriba un programa para calcular la suma y el producto (multiplicación) de una matriz de números. Imprime la suma y el producto.
Ejemplo: dada una matriz [1, 2, 3, 4] La suma es 10. El producto es 24.*/
let producto = [1,2,3,4];
let  multi = producto.reduce((a,b)=>a*b); // funciones flecha
console.log(multi);
let suma= producto.reduce((a,b)=>a+b);
console.log(suma);

/*Ejercicio # 4
var student1Courses = ['Math', 'English', 'Programming'];
var student2Courses = ['Geography', 'Spanish', 'Programming'];
Cree un programa que recorra las 2 matrices; si hay cursos comunes, imprímalos en la consola.*/

var student1Courses = ['Math', 'English', 'Programming'];
var student2Courses = ['Geography', 'Spanish', 'Programming'];
const student3Courses = student1Courses.concat(student2Courses);
console.log(student3Courses);

