
const botaoConverter = document.querySelector('.btn-converter')
const input = document.querySelector('.input-num')


input.addEventListener('keyup' , e =>{
    e.preventDefault();
    if(e.keyCode == 13){
        mostrarValorConvertido() 
    }
})
botaoConverter.addEventListener('click' , e => {
    e.preventDefault()
    mostrarValorConvertido()
})

function mostrarValorConvertido(){
    const inputValue = input.value
    if(inputValue !== ''){
        document.querySelector('#numero-extenso').innerHTML = transformarNumeroQuadrilhaoEmExtenso(inputValue)
    }else{
        document.querySelector('#numero-extenso').innerHTML = ''
    }
}



const transformarAlgarismoEmExtenso = (num) => {
    if(num == 0){
        return 'zero'
    }
    else if(num == 1){
        return 'um'
    }
    else if(num == 2){
        return 'dois'
    }
    else if(num == 3){
        return 'três'
    }
    else if(num == 4){
        return 'quatro'
    }
    else if(num == 5){
        return 'cinco'
    }
    else if(num == 6){
        return 'seis'
    }
    else if(num == 7){
        return 'sete'
    }
    else if(num == 8){
        return 'oito'
    }
    else if(num == 9){
        return 'nove'
    }
    else{
        return 'Algarismo inválido'
    } 
}

function transformarDezenaEmExtenso(num){
    if(num === '0'){
        return 'zero'
    }
    else if(num === '1'){
        return 'dez'
    }
    else if(num === '2'){
        return 'vinte'
    }
    else if(num === '3'){
        return 'trinta'
    }
    else if(num === '4'){
        return 'quarenta'
    }
    else if(num === '5'){
        return 'cinquenta'
    }
    else if(num === '6'){
        return 'sessenta'
    }
    else if(num === '7'){
        return 'setenta'
    }
    else if(num === '8'){
        return 'oitenta'
    }
    else if(num === '9'){
        return 'noventa'
    }
    else if(num == 10){
        return 'dez'
    }
    else if(num == 11){
        return 'onze'
    }
    else if(num == 12){
        return 'doze'
    }
    else if(num == 13){
        return 'treze'
    }
    else if(num == 14){
        return 'quatorze'
    }
    else if(num == 15){
        return 'quinze'
    }
    else if(num == 16){
        return 'dezesseis'
    }
    else if(num == 17){
        return 'dezessete'
    }
    else if(num == 18){
        return 'dezoito'
    }
    else if(num == 19){
        return 'dezenove'
    }
    else{
        return 'Algarismo inválido'
    } 
}

function transformarCentenaEmExtenso(num){
    if(num === '1'){
        return 'cento'
    }
    else if(num === '2' || num === '200'){
        return 'duzentos'
    }
    else if(num === '3' || num === '300'){
        return 'trezentos'
    }
    else if(num === '4' || num === '400'){
        return 'quatrocentos'
    }
    else if(num === '5' || num === '500'){
        return 'quinhentos'
    }
    else if(num === '6' || num === '600'){
        return 'seiscentos'
    }
    else if(num === '7' || num === '700'){
        return 'setecentos'
    }
    else if(num === '8' || num === '800'){
        return 'oitocentos'
    }
    else if(num === '9' || num === '900'){
        return 'novecentos'
    }
    else if(num == 100){
        return 'cem'
    }
    else{
        return 'algarismo inválido'
    }
}

function transformarPrimeiraLetraMaiuscula(palavra){
    return palavra[0].toUpperCase() + palavra.substring(1)
}

function transformarNumeroEmExtenso(num){
    const numString = `${num}`
    if (numString.length === 1) {
        return transformarPrimeiraLetraMaiuscula(transformarAlgarismoEmExtenso(num))
    } 
    
    else if(numString.length === 2){
        if(numString[0] == 1){
            return `${transformarPrimeiraLetraMaiuscula(transformarDezenaEmExtenso(num))}`
        }else{
            const primeiroNum = transformarDezenaEmExtenso(numString[0])
            const segundoNum = transformarAlgarismoEmExtenso(numString[1])
            if (numString[1] == 0) {
                return transformarPrimeiraLetraMaiuscula(primeiroNum)
            }else{
                return `${primeiroNum} e ${segundoNum}`
            }
        }        
    }

    else if(numString.length === 3){
        if(numString[1] == 0 && numString[2] == 0){
            return `${transformarCentenaEmExtenso(numString)[0].toUpperCase() + transformarCentenaEmExtenso(numString).substring(1)}`
        }
        else{
            const primeiroNum = transformarCentenaEmExtenso(numString[0])
            const terceiroNum = transformarAlgarismoEmExtenso(numString[2]) 
            if(numString[1] == 1){
                const segundoNum = transformarDezenaEmExtenso(numString[1] + numString[2])
                return `${transformarPrimeiraLetraMaiuscula(primeiroNum)} e ${segundoNum}`
            }
            else if(numString[1] == 0){
                return `${transformarPrimeiraLetraMaiuscula(primeiroNum)} e ${terceiroNum}`
            }
            else if(numString[2] == 0){
                const segundoNum = transformarDezenaEmExtenso(numString[1])
                return `${transformarPrimeiraLetraMaiuscula(primeiroNum)} e ${segundoNum}`
            }
            else{
                const segundoNum = transformarDezenaEmExtenso(numString[1])
                return `${transformarPrimeiraLetraMaiuscula(primeiroNum)} e ${segundoNum} e ${terceiroNum}`
            }  
        }
    }
}

function transformarNumeroMilharEmExtenso(num){
    const numString = `${num}`
    if(numString.length <= 3){
        return transformarNumeroEmExtenso(num)
    }
    else{
        if(numString.length <= 6){
            const tresPrimeirosNum = transformarNumeroEmExtenso(numString.substring(numString.length - 3 , -3))
            if(numString.substring(numString.length - 3)[0] != 0){
                const tresUltimosNum = transformarNumeroEmExtenso(numString.substring(numString.length - 3))
                return `${tresPrimeirosNum} mil ${tresUltimosNum}`
            }
            if(numString.substring(numString.length - 3)[1] != 0){
                const tresUltimosNum = transformarNumeroEmExtenso(numString.substring(numString.length - 2))
                return `${tresPrimeirosNum} mil ${tresUltimosNum}`
            }if(numString.substring(numString.length - 3)[2] != 0){
                const tresUltimosNum = transformarNumeroEmExtenso(numString.substring(numString.length - 1))
                return `${tresPrimeirosNum} mil ${tresUltimosNum}`
            }else{
                return `${tresPrimeirosNum} mil`
            }
        }
    }
}

function transformarNumeroMilhaoEmExtenso(num){
    const numTratado = parseInt(num)
    const numString = `${numTratado}`
    if(numString.length <= 6){
       return transformarNumeroMilharEmExtenso(numTratado)
    }
    else{
        if(numString.length <= 9){
            const tresPrimeirosNum = transformarNumeroEmExtenso(numString.substring(numString.length - 6 , -3))
            const unidade = numString[0] !== '1' || numString.substring(numString.length - 6, -3).length >= 2 ? 'milhões' : 'milhão' 
            const seisUltimosNum = numString.substring(numString.length - 6)
            const seisUltimosNumEmExtenso = transformarNumeroMilharEmExtenso(parseInt(seisUltimosNum))
            if(seisUltimosNum != '000000'){
                return `${tresPrimeirosNum} ${unidade} ${seisUltimosNumEmExtenso}`
            }
            else{
                return `${tresPrimeirosNum} ${unidade}`
            }
            
        }
    }
}

function transformarNumeroBilhaoEmExtenso(num) {
    const numTratado = parseInt(num)
    const numString = `${numTratado}`
    if(numString.length <= 9){
       return transformarNumeroMilhaoEmExtenso(numTratado)
    }
    else{
        if(numString.length <= 12){
            const tresPrimeirosNum = transformarNumeroEmExtenso(numString.substring(numString.length - 9 , -3))
            const unidade = numString[0] !== '1' || numString.substring(numString.length - 9, -3).length >= 2 ? 'bilhões' : 'bilhão' 
            const noveUltimosNum = numString.substring(numString.length - 9)
            const noveUltimosNumEmExtenso = transformarNumeroMilhaoEmExtenso(parseInt(noveUltimosNum))
            if(noveUltimosNum != '000000000'){
                return `${tresPrimeirosNum} ${unidade} ${noveUltimosNumEmExtenso}`
            }
            else{
                return `${tresPrimeirosNum} ${unidade}`
            }
            
        }
    }
}

function transformarNumeroTrilhaoEmExtenso(num) {
    const numTratado = parseInt(num)
    const numString = `${numTratado}`
    if(numString.length <= 12){
       return transformarNumeroBilhaoEmExtenso(numTratado)
    }
    else{
        if(numString.length <= 15){
            const tresPrimeirosNum = transformarNumeroEmExtenso(numString.substring(numString.length - 12 , -3))
            const unidade = numString[0] !== '1' || numString.substring(numString.length - 12, -3).length >= 2 ? 'trilhões' : 'trilhão' 
            const UltimosNum = numString.substring(numString.length - 12)
            const UltimosNumEmExtenso = transformarNumeroBilhaoEmExtenso(parseInt(UltimosNum))
            if(UltimosNum != '000000000000'){
                return `${tresPrimeirosNum} ${unidade} ${UltimosNumEmExtenso}`
            }
            else{
                return `${tresPrimeirosNum} ${unidade}`
            }
        }
    }
}

function transformarNumeroQuadrilhaoEmExtenso(num) {
    const numTratado = parseInt(num)
    const numString = `${numTratado}`
    if(numString.length <= 15){
       return transformarNumeroTrilhaoEmExtenso(numTratado)
    }
    else{
        if(numString.length <= 18){
            const tresPrimeirosNum = transformarNumeroEmExtenso(numString.substring(numString.length - 15 , -3))
            const unidade = numString[0] !== '1' || numString.substring(numString.length - 15, -3).length >= 2 ? 'quadrilhões' : 'quadrilhão' 
            const UltimosNum = numString.substring(numString.length - 15)
            const UltimosNumEmExtenso = transformarNumeroTrilhaoEmExtenso(parseInt(UltimosNum))
            if(UltimosNum != '000000000000000'){
                return `${tresPrimeirosNum} ${unidade} ${UltimosNumEmExtenso}`
            }
            else{
                return `${tresPrimeirosNum} ${unidade}`
            }
        }
    }
}