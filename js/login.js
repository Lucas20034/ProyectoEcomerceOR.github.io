const  nombre  = document.getElementById("correo");
const  pass    = document.getElementById("password");
const  form    = document.getElementById("form");
const  parrafo = document.getElementById("warnings");


window.localStorage.clear();


form.addEventListener("submit",function (event) {
    
    event.preventDefault();
    let warnings="";
    parrafo.innerHTML="";
    let entrar= false;

    if (nombre.value == null || nombre.value == "") {
        warnings += `Debe ingresar el usuario <br>`;
        entrar=true;
    }
    if (pass.value== null || pass.value=="") {
            warnings += `Debe ingresar la password<br>`;
            entrar=true;
    }

    if(entrar){
        parrafo.innerHTML=warnings;
    }else{

        
        localStorage.setItem('usuario',(nombre.value));
        


        window.location.href="login.html"

      
    
    }
});





