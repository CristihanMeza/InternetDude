//Barra de Navegación Fijada
const nav = document.querySelector('.nav');

    window.addEventListener('scroll', function(){
        nav.classList.toggle('active', window.scrollY > 0)
    })
const div = document.querySelector('.space');

    window.addEventListener('scroll', function(){
        div.classList.toggle('active', window.scrollY > 0)
    })

//Animación Escritura de Texto
const typed = new Typed('.typed',{
    strings: [
        '<i class="Words">para Programar</i>',
        '<i class="Words">para Aprender</i>',
        '<i class="Words">sobre Mitologia</i>',
        '<i class="Words">sobre Filosofía</i>',
        '<i class="Words">sobre Música</i>',
        '<i class="Words">sobre Libros</i>',],

    stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 500, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	backDelay: 2000, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: 5, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: false, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
})

//animation counter