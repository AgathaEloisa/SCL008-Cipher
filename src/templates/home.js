import { appView } from './app.js';

// Manejo del DOM
//-------------- Pantalla uno ------------//
export const homeView = () => {
  let home = document.getElementById('screen').innerHTML = '';
  document.getElementById('screen').innerHTML += 
      
  `        
  <div id="part1">
      <!--funcionamiento y linkeo a información adicional en wikipedia-->
      <h2> Cómo funciona: </h2>
      <p> Esta app usa el metodo de 
      <a href="https://es.wikipedia.org/wiki/Cifrado_César" target=”_blank”> cifrado cesar </a> . <br>
        Una vez que escribas tu mensaje en la caja de texto, puedes cifrarlo o descifrarlo según sea el caso, y enviarlo a cualquier dirección de correo electrónico. <br>
        Lo que escribas no será archivado. Comparte secretos con tus amigos, organicen fiestas, paseos, etc. tu decides como usarla. <br>
        Puedes usar letras, números y caractéres; los espacios no se modificarán.    </p> 
    </div>
  </div>
  <div id="part2">
  <!--interacción con el usuario, petición de nombre-->
    <h1>¿cuál es tu nombre?</h1>
    <input type="text" id="username" placeHolder="tu nombre aquí">
    <input type="submit" id="btnenter" value="Entrar">
  </div>
  `

  document.getElementById('username').value='';
  document.documentElement.scrollTop=0;

  document.getElementById('btnenter').addEventListener('click', () => {
    window.location.hash = '#/app';
  });

};