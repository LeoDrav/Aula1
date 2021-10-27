subtitulos = document.querrySelectorAll('h2');
topicos = new Array();
subtitulos.forEach(subtitulo => {
topicos.push(subtitulo.textContent);
});
			 
parag = document.querSelector('p');
parag.textContent = topicos;
