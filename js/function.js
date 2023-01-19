let mas_informacion = document.getElementById('mas_informacion');
let span_ingles = document.getElementById('span_ingles');
mas_informacion.addEventListener('click', toggleText);
function toggleText(){
    span_ingles.classList.toggle('show');
}