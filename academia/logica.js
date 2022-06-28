
function Verificar(){
   
   var altura=Number(window.document.getElementById('altura').value)
   var peso=Number(window.document.getElementById('peso').value)
   var resultado =window.document.getElementById('res')
   var imc=peso/(altura*altura)
   var tabela=window.document.getElementById('tabela')
    if(altura===0|| altura===null || peso===0 || peso ===null){
        alert('Preencha todos os campos')
    }
    else{
      
        if (altura%1==0) {
            alert('Coloque uma vírgula ou ponto  ao informar a altura ex:1.70 ou 1,70.')
        }
        else{
            if (imc>=30 && imc<=39.9) {
                resultado.style.textAlign='center'
                resultado.style.backgroundColor='#f7225a'
                resultado.style.borderRadius='5px'
                resultado.style.width='250px'
                resultado.style.display='block'
                resultado.style.margin='auto'
                resultado.innerHTML='Você esta com sobrepeso e deve comecar a perder peso '+imc.toFixed(2)
                
            }
            else if(imc<18.5){
                resultado.style.textAlign='center'
                resultado.style.textAlign='center'
                resultado.style.backgroundColor='#f7225a'
                resultado.style.borderRadius='5px'
                resultado.style.width='250px'
                resultado.style.display='block'
                resultado.style.margin='auto'
                resultado.innerHTML='Você esta em nivel de magreza 0 e deve comecar a ganhar peso. '+imc.toFixed(2)
                
            }
            else if(imc>=18.5 && imc<=24.9){
                resultado.style.textAlign='center'
                resultado.style.textAlign='center'
                resultado.style.backgroundColor='#f7225a'
                resultado.style.borderRadius='5px'
                resultado.style.width='250px'
                resultado.style.display='block'
                resultado.style.margin='auto'
                resultado.innerHTML='Você esta em nivel normal de peso. '+imc.toFixed(2)
            
            }
            else if(imc>=25 && imc<=29.9){
                resultado.style.textAlign='center'
                resultado.style.textAlign='center'
                resultado.style.backgroundColor='#f7225a'
                resultado.style.borderRadius='5px'
                resultado.style.width='250px'
                resultado.style.display='block'
                resultado.style.margin='auto'
                resultado.innerHTML='Você esta em nivel de sobrepeso I '+ imc.toFixed(2)
                
            }
            else if(imc>40){
                resultado.style.textAlign='center'
                resultado.style.textAlign='center'
                resultado.style.backgroundColor='#f7225a'
                resultado.style.borderRadius='5px'
                resultado.style.width='250px'
                resultado.style.display='block'
                resultado.style.margin='auto'
                
                res.innerHTML='você esta com obesidade grave III.'+ imc.toFixed(2)
                
            }
        }
            
    }
}




/*MENOR QUE 18,5	MAGREZA	0
ENTRE 18,5 E 24,9	NORMAL	0
ENTRE 25,0 E 29,9	SOBREPESO	I
ENTRE 30,0 E 39,9	OBESIDADE	II
MAIOR QUE 40,0	OBESIDADE GRAVE	III*/