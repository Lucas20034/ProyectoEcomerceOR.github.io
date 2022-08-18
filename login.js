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





buttoni.addEventListener ( 'click' , (e) => {



	e.preventDefault()
	const data = {
		correo: correo.value,
		password: password.value

	}


	
	
});