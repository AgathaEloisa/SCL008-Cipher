//DOM!!

//Función para pasar de pantalla 1 a 2.
changeScreen = btnEnter.addEventListener('onclick', () => {
  //hay que darle la funcionalidad al botón "btnEnter"
  document.getElementById("screen2").style.display="block";
  document.getElementById("screen1").style.display="none";
 //Cambia el texto para saludar al usuario por su nombre.
  let aText = document.getElementById("greeting");
  let name = document.getElementById("userName").value;
  aText.innerHTML="Hola " + name +" comienza por elegir un número de desplazamiento y escribe lo que quieras."; 
  //primera linea de la pantalla.
document.documentElement.scrollTop=0;
  //Limpia el campo.
  document.getElementById("userName").value="";
});

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