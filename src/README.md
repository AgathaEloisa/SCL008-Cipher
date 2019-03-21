# ¡Bienvenido a Onda Retro!

<img src="img/Onda_Retro.png" alt = "imagen pantalla principal o logo"/>


# contenidos

<ul>
	<li>Qué es Onda Retro
	<li>Modo de uso
	<li>Especificaciones técnicas
	<li>Testeo (prototipo de baja y alta fidelidad, encuesta)
	<li>Miembros del equipo
	<li>Links de interes
	<li>Historia de usuario
</ul><br>

## ¿Qué es Onda Retro?

Esta es una interfaz centrada en entregar información de películas estrenadas entre los años 1940 y 1960, para un público adulto mayoritariamente de 21 a 40 años, Aquí podrás filtrar por año, género e idioma (español, inglés y portugués). además podrás ver algunas recomendaciones en el extremo inferior de la página.<br>
Rescatando las películas de antaño, te presentamos Onda Retro.
<br>
## Modo de uso

Para empezar a usar la interfaz, sólo debes clickear el icono central con la frase "realizar busqueda", esta acción te dirigirá a la pantalla dónde se encuentran las opciones de busqueda, puedes filtrar por año, género, y ademáspodrás filtrar por el idioma en el que quieres leer la información (español, inglés y portugués). Aparecerán en pantalla la o las imagenes que coincidan con tu busqueda. Para acceder a la información de la pelicula haz click en la imágen y se desplegará la información adicional.
<br>

## Especificaciones técnicas

<br>

### Organización

En la organización utilizamos trello, delimitamos tareas y trabajamos con la metodología "pair programing".

<br>

### Metodos utilizados

<ul>
	<li>HTML5 para mostrar la página al usuario y unir los script de JavaScript y <li>links de CSS, Materialize (incluyendo link al cdn de jquery para usar sus funciones)
	<li>Uso de HTML5 dinámico desde el main.js
	<li>Manejo del DOM desde main.js
	<li>Uso de API OMDB y TMDB.
	<li>Manejo de estilos CSS para la página de escritorio y responsivo, usando media <li>query para celulares y Tablet.
	<li>Trabajo colaborativo mediante el uso de Git y GitHub
</ul>

<br>

## Historia de usuario
Queremos dar a conocer al usuario las películas de las quedispone según el año de interés. pensando en que estás películas están casi en el olvido y es poco probable que conozcan los títulos,

## Testeo

### Encuesta
Antes que nada, fabricamos una encuesta para saber qué tipo de información espera obtener la gente de una interfaz como la nuestra, y aproximar un rango de edad al que dirigirnos.

<img src = "img/grafico_etario.png" alt = "Gráfico de torta, por edades"/><br>
Viendo que en su mayoría, quienes usan este tipo de páginas son personas de entre 21 a 40 años, desidimos enfocarnos en ese rango etario.

<img src = "img/grafico_preferencias_paginas_de_peliculas.png" alt = "Gráfico en barra de intereses informativos de una película"/><br>
Queríamos enfocarnos en tres filtros, las alternativas eran: título, año, duración, clasificación, género e idioma; y en base a lo que se muestra en el gráfico y nuestro proposito, desidímos hacerlo por género y duración, no descartando las otras posibilidades para el futuro.

<img src = "img/grafico_recomendacion_peliculas.png" alt = "Gráfico de torta, espectativas de recomendaciones de películas"/><br>
Un 98.2% está interesado en obtener recomendaciones dentro de la interfaz.

<img src = "img/grafico_reseña.png" alt = "Gráfico de torta, espectativas de reseña"/><br>
El 86% quiere tener a disposición una reseña de la película.

<img src = "img/grafico_puntuacion_pelicula.png" alt = "Gráfico de torta, puntuación de una película"/><br>
El 71% está interesado en saber la puntuación de las películas.

<img src = "img/grafico_otra_informacion.png" alt = "Gráfico en barras, de otros intereses informativos"/><br>
Esta ultima pregunta, tiene a intención de saber qué podemos implementar más adelante, teniendo como prioridad, información sobre actores y directores de cada película, así como ambién el filtro por títulos.

### Prototipo de baja fidelidad

Este prototipo se hizo de manera simple pero consisa y entendible.

<img src = "img/pantallas.png" alt = "Pantalla 1"><br>

### Prototipo de alta fidelidad

Hecho en Figma.<br>
<img src = "img/figma.png" alt = "4 pantallas en Figma">

## Miembros del equipo

<ul>
	<li> 
		<strong> Lorena Miranda: </strong>
		<br>&emsp;
		Para esta interfaz, Lorena estuvo encargada de los aspectos relacionado con UX, creando en papel el prototipo de alta fidelidad y, en figma, el prototipo de alta fidelidad y testeos en video, usando Loom.
</ul>

<ul>
	<li>
		<strong> Yaniza Molina, Fabiola Orellana y Paula Sáez: </strong>
		<br>&emsp; 
		Creadoras en conjunto de las historias de usuario, generamos filtros, modales e hicimos el readme.
</ul> 



## Links de interes
<ul>
	<li> <strong> Github: </strong>  https://github.com/faog/SCL008_hackaton_peliculas 
	<li> <strong> Figma: </strong>https://www.figma.com/file/YBT047WUrg8QaMZzMMmcMCiT/Hackathon-Onda-Retro?node-id=0%3A1
	<li> <strong> Loom: </strong>
	<li> <strong> Trello: </strong> https://trello.com/b/P3vXqQyX/hackathon-de-peliculas
</ul>
