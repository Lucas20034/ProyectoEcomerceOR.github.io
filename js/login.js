// delcaro las variables //

var Formulario = document.getElementById('form');

var correo  = document.getElementById('correo');

var  password = document.getElementById('password');

const buttoni = document.getElementById('buttoni');






//function// 




//login//




function Validacion(){

if(correo.value !='' && password.value !='' ){

	

	
alert("A ingresado correctamente los datos  ")
, document.location.href="login.html"
; 


} 


else { alert('Datos incorrectos') 







}
}
//other//
function login(){
    if(nombre.value == "Iniciar Sesion" && contraseña.value == null){
       
        window.location = "login.html";
       
    } else{
        alert("usuario o contraseña incorrecta");
    }

}
//other//

// Enter//
function entrar()

{
    
const usu = document.getElementById('correo').value;
const pass = document.getElementById('password').value;
console.log(usu, pass);

    if(usu == "Lucas Cardozo" && pass == "1234"){
       
        alert("Bienvenido Lucas Cardozo");
        window.location = "login.html";
        localStorage.usuario = usu
       
    } else{
        alert("Usuario no registrado , prueba  con :Usuario Lucas Cardozo , password 1234");
    }

}

//enter//



buttoni.addEventListener ( 'click' , (e) => {



	e.preventDefault()
	const data = {
		correo: correo.value,
		password: password.value

	}


	
	
});





