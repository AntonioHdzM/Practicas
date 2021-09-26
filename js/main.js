const btnSwitch = document.querySelector('#switch');



const btndark = document.querySelector('#bdark'); 
//Cambiar Fondo
btndark.addEventListener('click', () => {document.body.classList.toggle('darkmode'); 

	// Guardamos el modo en localstorage.
	if(document.body.classList.contains('darkmode')){
		localStorage.setItem('dark-mode', 'true');
        document.getElementById('imagenlogo').src="img/logooscuro.png";
	} else {
		localStorage.setItem('dark-mode', 'false');
        document.getElementById('imagenlogo').src="img/logo.png";
	};
});
// Obtenemos el modo actual.
if(localStorage.getItem('dark-mode') === 'true'){
	document.body.classList.add('darkmode');
    document.getElementById('imagenlogo').src="img/logooscuro.png";
} else {
	document.body.classList.remove('darkmode');
    document.getElementById('imagenlogo').src="img/logo.png";
}