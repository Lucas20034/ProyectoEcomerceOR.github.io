const currentAvatarImage = document.getElementById("currentAvatarImage");
const imaget = document.getElementById("imageInput");
const profileForm = document.getElementById("profileForm");
const firstName = document.getElementById("firstName");
const middleName = document.getElementById("middleName");
const lastName1 = document.getElementById("lastName1");
const lastName2 = document.getElementById("lastName2");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

document.getElementById("email").value = localStorage.getItem('usuario')


//Funcion que se encarga de mostrar todos los datos del usuario a partir de un objeto guardado en localStorage.
const showProfile = () => {
	let userProfile = JSON.parse(localStorage.getItem("user")) || {};

	firstName.value = userProfile.firstName || "";
	middleName.value = userProfile.middleName || "";
	lastName1.value = userProfile.lastName1 || "";
	lastName2.value = userProfile.lastName2 || "";
	phone.value = userProfile.phone || "";
};

//Funcion que se encarga de modificar el perfil del usuario para posteriormente guardar esas modificaciones en el localStorage.
const saveProfile = () => {
	let userProfile = JSON.parse(localStorage.getItem("user")) || {};

	userProfile.firstName = firstName.value;
	userProfile.middleName = middleName.value;
	userProfile.lastName1 = lastName1.value;
	userProfile.lastName2 = lastName2.value;
	userProfile.email = email.value;
	userProfile.phone = phone.value;

	localStorage.setItem("data", JSON.stringify(userProfile));
	showProfile();
};



	//Guardamos la imagen en local storage, la traemos y la usamos/modificamos cuando necesitemos.
	let userImage = localStorage.getItem("userImage");

	if (userImage) {
		currentAvatarImage.src = userImage;
	}

	imageInput.addEventListener("change", function () {
		const reader = new FileReader();

		reader.addEventListener("load", () => {
			const uploaded_image = reader.result;
			localStorage.setItem("userImage", uploaded_image);
			currentAvatarImage.src = uploaded_image;
		});

		if (this.files[0]) {
			reader.readAsDataURL(this.files[0]);
			document.querySelector(".alert2").style.display = "block";
		}
	});



	//Validaciones para el Formulario.
	profileForm.addEventListener("submit",	 (event) => {
		event.preventDefault();
		event.stopPropagation();

		if (profileForm.checkValidity()) {
			saveProfile();
			document.querySelector(".alert1").style.display = "block";
		}
	});

	(function () {
		'use strict'
		var forms = document.querySelectorAll('.needs-validation')
		Array.prototype.slice.call(forms)
		  .forEach(function (form) {
			form.addEventListener('submit', function (event) {
			  if (!form.checkValidity()) {
				event.preventDefault()
				event.stopPropagation()
			  }
			  
			  form.classList.add('was-validated')
			}, false)
		  })
	  })()