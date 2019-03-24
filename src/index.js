//DOM!!
document.getElementById ("screen") .innerHTML = " ";
document.getElementById ("screen") .innerHTML += 
`
    <!-- Pantalla home dividida en part1 y part2 respectivamente. -->
<section id = "part1">
    <!--funcionamiento y linkeo a información adicional en wikipedia-->
  <div>
    <h2> Cómo funciona: </h2>
    <p> Esta app usa el metodo de 
      <a href = "https://es.wikipedia.org/wiki/Cifrado_César" target=”_blank”> cifrado cesar </a> . <br>
Una vez que escribas tu mensaje en la caja de texto, puedes cifrarlo o descifrarlo según sea el caso, y enviarlo a cualquier dirección de correo electrónico. <br>
Lo que escribas no será archivado. Comparte secretos con tus amigos, organicen fiestas, paseos, etc. tu decides como usarla. </p> </div>
  </div>
</section>
<section id = "part2">
    <!--interacción con el usuario, petición de nombre-->
  <div>
    <h1>¿cuál es tu nombre?</h1>
    <input type="text" id="userName" placeHolder="tu nombre aquí">
    <input type="submit" id="btnEnter" value="Entrar">
  </div>
</section>
`


  //Función para pasar de pantalla 1 a 2.
const changeScreen = document.getElementById ("btnEnter") .addEventListener ('click', () => {
document.getElementById ("screen") .innerHTML = " ";
document.getElementById ("screen") .innerHTML += 
`
    <!--Pantalla n°2-->
    <!--Saludo personalizado con el nombre del usuario-->
  <div>
    <h2 id="greeting"></h2>
  </div>
  <div>
    <h2> N° de desplazamiento:  
      <input type="number" min="1" max="99" placeholder="N°" id="numbBox" value="0">
    </h2>
  </div>
  <div class="inpRadio"> 
      <h3>
        <input id="encode" type="radio" name="change" value="Codificar" checked>Codificar
      </h3>
      <h3>
        <input id="decode" type="radio" name="change" value="Decodificar">Decodificar
      </h3>
  </div>
    <!--Donde el usuario escribe el mensaje a decodificar-->
    <input type="text" id="text1">
    <!--Botón convertir, que codifica el texto que entrega el usuario-->
  <div>
      <input type="button" id="btnConvert" value="Convertir" onclick="takeValue()">
  </div>
    <!--Donde el usuario recibe su mensaje procesado-->
  <div>
  <h3>Resultado:</h3>
    <input type="text" id="text2">
  </div>
    <!--caja de texto donde va el correo-->
  <div>
      <input type="email" id="eMail" placeHolder="Ingresa correo"><input type="submit" id="btnSend" value="Enviar" onclick="sendMail()">
  </div>
  <div> 
    <!--Botón que envía a pag.1-->
      <input type="button" id="btnhome" value= "cambiar de usuario">
  </div>
`
});

  //Cambia el texto para saludar al usuario por su nombre.
const userGreeying = document.getElementById ("greeting") .addEventListener ("click", () => {
let aText = document.getElementById("greeting");
let name = document.getElementById("userName").value;
aText.innerHTML=`<h2> Hola ${name} comienza por elegir un número de desplazamiento y escribe lo que quieras </h2>` 
  //primera linea de la pantalla.
document.documentElement.scrollTop=0;
  //Limpia el campo.
document.getElementById("userName").value="";
});

//document.getElementById ("btnhome") .addEventListener("click", () => {

  //hay que darle la funcionalidad al botón "btnEnter"
  //document.getElementById("screen2").style.display="block";
  //document.getElementById("screen1").style.display="none";


//Función para pasar de pantalla 2 a 3 + saludo
function changeScreen2(){
  document.getElementById("screen1").style.display="block";
  document.getElementById("screen2").style.display="none";
    //primera linea de la pantalla.
    document.documentElement.scrollTop=0;
}
//tomando valores
function takeValue(){
  let number=parseInt(document.getElementById("numbBox").value);
  let text=document.getElementById("text1").value;
  if (document.getElementById("encode").checked){
     document.getElementById("text2").value=encode(number,text);
  }
  else{
      document.getElementById("text2").value=decode(number,text);
  }
  document.getElementById("text1").value="";
}
//Enviar el correo (en realidad sólo es limpiar el campo).
function sendMail() {
let eMail = document.getElementById("eMail").value;
document.getElementById("eMail").value="";
}
