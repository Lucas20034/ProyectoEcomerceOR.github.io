document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});

//Para hacer que borre// 

const limpiar = document.getElementById ("")
 
document.getElementById('login').innerHTML = localStorage.usuario

limpiar.addEventListener("click", () => {
    limpiarItems();
});


function limpiarItems() {
    let usuario = document.getElementById("CerrarSesion");
    usuario.innerHTML = null;
    localStorage.removeItem('usuario'),
    login.innerHTML = "Iniciar Sesion"
}