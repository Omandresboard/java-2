function notas() {
    let nota = new Number();
    let sumos = new Number();
    let valor = new Number();

    nota = parseInt(prompt("ingrese un numero"));

    // for (let i = 0; i < nota; i++) {
    //     if (nota <= 5){

    //         valor = parseInt(prompt(`Ingrese la nota ${i + 1} que desea`))

    //         if(valor <= 5){

    //         }
    //     }
        
    // }

    while (nota <= 0) {
        while (nota < 1.0 ) {
            alert("fuera de rango")
            let nota = new Number(prompt("ingrese un numero"));
            
        }
        if (nota < 3.0) {
            alert("pailas")
            break
        }
        if (nota > 2.9) {
            alert("si se pudo")
            break
        }
        br
    };

}
