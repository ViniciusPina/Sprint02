dataDisplay.innerHTML = "";

function validar(){

    /* declarando as variáveis*/
    let usuario =document.getElementById("usuario").value
    let senha = document.getElementById("senha").value
    let email =document.getElementById('email').value
    let telefone = document.getElementById('telefone').value



    if(usuario =="" && senha ==""){
        alert('preencha os campos')
    }else{
        alert('Acesso Permitido')

        window.open('index.html');
        }
	
    if(telefone =="" && email ==""){
     	alert('por favor insira seu telefone e email')
    }else{
    	alert('Acesso Permitido')

    	window.open('index.html');
	}
	
}


function trocar(cor){
	trocar.getElementById(cor)
	document.body.style.background = cor
}  


