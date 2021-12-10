let numeroDeAlunos = 10;
let contador = 0
while (contador <= numeroDeAlunos) {
if (contador == 0) {
    console.log ("O número atual é zero")
}else if(contador % 2 != 0){
    console.log ("o número " + contador + " é Impar")
}else{
    console.log(`O número ${contador} é Par`)
}
contador++;
}