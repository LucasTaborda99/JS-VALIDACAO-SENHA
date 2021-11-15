function validaSenha(){
   var campo1 = document.getElementById('password').value;
   var campo2 = document.getElementById('password1').value;
   if(campo1 == campo2){
    document.getElementById('resultado').innerHTML="As senhas são iguais";
    document.getElementById('resultado').style.color="#008B45";
    document.getElementById('resultado').style.fontWeight="bold";
   }else{
    document.getElementById('resultado').innerHTML="As senhas não correspondem";
    document.getElementById('resultado').style.color="#FF6347";
    document.getElementById('resultado').style.fontWeight="bold";
   }
}

function validar(){
    var campo1 = document.getElementById('password').value;
    var campo2 = document.getElementById('password1').value;
   if(campo1 == campo2){
        return true;
    }else{
        alert('As senhas são diferentes');
        return false;
    }
}