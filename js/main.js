let ubicacionPrincipal = window.pageYOffset; //0

  AOS.init();

window.addEventListener("scroll", function(){
    let desplazamientoActual = window.pageYOffset; //180
    if(ubicacionPrincipal >= desplazamientoActual){ // 200 > 180
        document.getElementsByTagName("nav")[0].style.top = "0px"
    }else{
        document.getElementsByTagName("nav")[0].style.top = "-100px"
    }
    ubicacionPrincipal= desplazamientoActual; //200

})

// Menu

let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click", function(){
    if(semaforo){
        document.querySelectorAll(".hamburguer")[0].style.color ="#fff";
        semaforo= false;
    }else{
        document.querySelectorAll(".hamburguer")[0].style.color ="#000";
        semaforo= true;
    }

    enlacesHeader.classList.toggle("menudos")
})
// Obtiene la miniatura y la imagen ampliada por su ID
const miniatura = document.getElementById('miniatura');
const imagenAmpliada = document.getElementById('imagen-ampliada');
const fondoSemitransparente = document.getElementById('imagen-ampliada-fondo');

// Agrega un evento clic a la miniatura para abrir la imagen ampliada
miniatura.addEventListener('click', () => {
    imagenAmpliada.style.display = 'block';
    fondoSemitransparente.style.display = 'block';
});

// Agrega un evento clic al fondo semitransparente para cerrar la imagen ampliada
fondoSemitransparente.addEventListener('click', () => {
    imagenAmpliada.style.display = 'none';
    fondoSemitransparente.style.display = 'none';
});


// Obtén el elemento del botón
const btnJobber = document.querySelector('.textos-header_1 .btn-jobber');

// Añade un event listener para el evento 'mouseenter'
btnJobber.addEventListener('mouseenter', () => {
    // Añade la clase 'lifted' al botón cuando el ratón entra en el botón
    btnJobber.classList.add('lifted');
});

// Añade un event listener para el evento 'mouseleave'
btnJobber.addEventListener('mouseleave', () => {
    // Remueve la clase 'lifted' cuando el ratón sale del botón
    btnJobber.classList.remove('lifted');
});
