alert("¡Bienvenido a Tu Calculadora Personal! \n\n\n\nOperaciones que puedes realizar +,-,*,/  \nSe recomienda abrir la consola con F12")

const signosValidos = ["+", "-", "*", "/"]


function calculadora(){

    const primerNumero = parseFloat(prompt("Ingrese Primer Número (Número Entero o Decimal)"))
    console.log("Primer Número Seleccionado:", primerNumero)

    if (isNaN(primerNumero)){

        alert("Ingrese Números")
        calculadora()
        return
    
    }
    
    const operacion = prompt("ingrese operación")
    console.log("Operación Seleccionado:", operacion)

    if (!signosValidos.includes(operacion)){
        
        alert("ingrese signo +,-,*,/")
        calculadora()
        return
        }
        


    const segundoNumero = parseFloat(prompt("Ingrese Segundo Número (Número Entero o Decimal)"))
    console.log("Segundo Número Seleccionado:", segundoNumero)

    if (isNaN(segundoNumero)) {

        alert("Ingrese Números")
        calculadora()
        return
        }
    
    else{
   
    switch(operacion){

        case("+"):

        let resultadoSuma =  primerNumero + segundoNumero
        console.log(resultadoSuma)
        alert(`la suma de ${primerNumero} + ${segundoNumero} es: ${resultadoSuma}`)

        break;

        case("-"):

        let resultadoResta =  primerNumero - segundoNumero
        console.log(resultadoResta)
        alert(`la resta de ${primerNumero} - ${segundoNumero} es: ${resultadoResta}`)

        break;

        case("*"):

        let resultadoMulti =  primerNumero * segundoNumero
        console.log(resultadoMulti)
        alert(`la multiplicación de ${primerNumero} * ${segundoNumero} es: ${resultadoMulti}`)

        break;

        case("/"):

        if (segundoNumero == 0) {
            alert("No se puede dividir por 0")
        }

        else {
        let resultadoDivision =  primerNumero / segundoNumero
        console.log(resultadoDivision)
        alert(`la división de ${primerNumero} / ${segundoNumero} es: ${resultadoDivision}`)
        }

        break;

        default:
            alert("Operación Invalida")

        }
        const otraOperacion = confirm("¿Deseas realizar otra operación?")
            if (otraOperacion) {
            calculadora()
        }
        }}

calculadora()


