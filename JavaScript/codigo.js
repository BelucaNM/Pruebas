//alert ("Soy el primer JC");

/*
console.log ( meses);
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
         "Julio", "Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
console.log ( meses);

for (let $i=0; $i< meses.length; $i++){ 
    const element = meses [$i] 
    console.log ( element)}

if ("hola"> "adios mundo") {alert ("hola es mayor")}
else {alert ("adios es mayor ")}
*/

// Ejercicio 4

var valores = [true, 5, false, "hola", "adios", 2];

var elMayor = "";
var elNumero1 =0;
var elNumero2 =0;
var encontradoPrimero = false
for (let $i=0; $i< valores.length ;$i++){ 
     if ((typeof valores[$i] == 'string') && (valores[$i]> elMayor))
     {elMayor = valores[$i]}
     if  ( typeof valores[$i] == 'number') 
        if ( !encontradoPrimero )   { elNumero1 = valores[$i]; encontradoPrimero = true; }
        else { elNumero2 = valores[$i];}
    }

    console.log ( "la Suma de los numeros es =" + (elNumero1 + elNumero2))
    console.log ( "la resta de los numeros es =" + (elNumero1 - elNumero2))
    console.log ( "El producto de los numeros es =" + elNumero1 * elNumero2)


console.log ( "el String mayor es "+ elMayor)



// Ejercicio 5
var numero1 = 5;
var numero2 = 8;
if ( numero1 <= numero2 ) {
alert("numero1 no es mayor que numero2");
}
if( numero2 > 0) {
alert("numero2 es positivo");
}
if (numero1<0 || numero1 != 0){
alert("numero1 es negativo o distinto de cero");
}
if(numero1++ < numero2) {
alert("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
} 


