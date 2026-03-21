
num=0
num1 =0
operador = ''

tela = document.querySelector('#tela');

Digito0 = document.querySelector('#D0');
Digito1 = document.querySelector('#D1');
Digito2 = document.querySelector('#D2');
Digito3 = document.querySelector('#D3');
Digito4 = document.querySelector('#D4');
Digito5 = document.querySelector('#D5');
Digito6 = document.querySelector('#D6');
Digito7 = document.querySelector('#D7');
Digito8 = document.querySelector('#D8');
Digito9 = document.querySelector('#D9');

OperadorMInput = document.querySelector('#operadorM');
OperadorDInput = document.querySelector('#operadorD');
OperadorAInput = document.querySelector('#operadorA');
OperadorSInput = document.querySelector('#operadorS');

IgualdadeInput = document.querySelector('#igual')

ACinput = document.querySelector('#AC');

ACinput.addEventListener("click", () => {
    tela.innerText=0;
    LimpaTela();
})

IgualdadeInput.addEventListener("click", () =>{
    switch(operador){
        case 'A': tela.innerText = num+num1;break;
        case 'S': tela.innerText= num1-num; break;
        case 'M': tela.innerText = num1*num;break;
        case 'D': tela.innerText = num1/num;break;
        default: LimpaTela();break;
        
    }
})

OperadorMInput.addEventListener("click", () =>{
    operador='M'
    salvaValor()
})

OperadorDInput.addEventListener("click", () =>{
    operador='D'
    salvaValor()
})

OperadorAInput.addEventListener("click", () =>{
    operador='A'
    salvaValor()
})

OperadorSInput.addEventListener("click", () =>{
    operador='S'
    salvaValor()
})


Digito0.addEventListener("click", ()=>{
    adicionaNumero(0)
})

Digito1.addEventListener("click", ()=>{
    adicionaNumero(1)
})

Digito2.addEventListener("click", ()=>{
    adicionaNumero(2)
})

Digito3.addEventListener("click", ()=>{
    adicionaNumero(3)
})

Digito4.addEventListener("click", ()=>{
    adicionaNumero(4)
})

Digito5.addEventListener("click", ()=>{
    adicionaNumero(5)
})

Digito6.addEventListener("click", ()=>{
    adicionaNumero(6)
})

Digito7.addEventListener("click", ()=>{
    adicionaNumero(7)
})

Digito8.addEventListener("click", ()=>{
    adicionaNumero(8)
})

Digito9.addEventListener("click", ()=>{
    num = adicionaNumero(9)
})


function adicionaNumero(valor){
    num = num*10 + valor
    tela.innerText = num
    return num
}

function salvaValor(){
    num1 = num
    num = 0
}

function converteInt(valor)
{
    intValor= parseInt(valor);
    if(isNaN(intvalor))   //Nan se o valor é nulo
        intValor=0;
    return intValor;
}

function LimpaTela(){
    num=0
    num1=0
    operador=''
}