//1. fare un tabelal automatica che parta da 1 fino ad arrivare a 100
//2.al posto dei multipli di 3 deve stamapre FIZZ
//3.al posto dei multipli di 5 deve stampare BUZZ
//4.mentre per i multipli in comune del 3 e del 5 deve stamapre FIZZBUZZ

for (let i = 1; i <= 100; i++) {
    //-------SE E' UN MULTIPLO DI ENTRAMBI SCRIVO FIZZBUZZ-----
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('si è un multiplo di ENTRAMBI 3 e 5, quindi FIZZBUZZ');
    }
    //-------VERIFICO SE E' UN MULTIPLO DI 3 E SCRIVO FIZZ-------
    else{
        if (i % 3 == 0){
            console.log('si, è un multiplo di 3 quindi FIZZ');
        }
    //------ALTRIMENTI SE E' UN MULTIPLO DI 5 SCRIVO BUZZ---------    
        else if (i % 5 == 0){
            console.log('si, è un multiplo di 5 quindi BUZZ');
        }
    //-----ALTRIMENTI INSERISCO IL NUMERO NORMALE----------    
        else{
            console.log('qui niente, quindi inserisco numero normale:' + i);
        }
    }
}   