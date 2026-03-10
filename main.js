alert("¡Bienvenido a Tu Calculadora Personal! \n\n\n\nOperaciones que puedes realizar +,-,*,/  \nSe recomienda abrir la consola con F12")

function calculadora(){

    const primerNumero = prompt("Ingrese Número Entero o Decimal")
    console.log("Primer Número Seleccionado:", primerNumero)
    

    const operacion = prompt("ingrese operación")
    console.log("Operación Seleccionado:", operacion)


    const segundoNumero = prompt("Ingrese Número Entero o Decimal")
    console.log("Segundo Número Seleccionado:", segundoNumero)
   

    switch(operacion){

        case("+"):

        let resultadoSuma =  parseFloat(primerNumero) + parseFloat(segundoNumero)
        console.log(resultadoSuma)

        break;

        case("-"):

        let resultadoResta =  parseFloat(primerNumero) - parseFloat(segundoNumero)
        console.log(resultadoResta)

        break;

        case("*"):

        let resultadoMulti =  parseFloat(primerNumero) * parseFloat(segundoNumero)
        console.log(resultadoMulti)

        break;

        case("/"):

        let resultadoDivision =  parseFloat(primerNumero) / parseFloat(segundoNumero)
        console.log(resultadoDivision)

        break;

        default:
            alert("Operación Invalida")

    }
}

calculadora()


