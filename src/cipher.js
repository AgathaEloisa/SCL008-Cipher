//función que codifica mayusculas.
function encode (numb,text) {
  let resultado="";
  let ascii=0;
  //2) crear un loop.
  for(let i=0; i< text.length; i++){
  //3)aplicar codigo ascii.
    ascii = text.charCodeAt(i);
  //4)aplicar formula offset.
    if(ascii>=65 && ascii<=90){
    ascii=(ascii-65+parseInt(numb))%26+65;
    }
    if(ascii>=97 && ascii<=122){
      ascii=(ascii-97+parseInt(numb))%26+97;
    }
  //5)tomar ascii y usar. 
    resultado+=String.fromCharCode(ascii)
  }
  return resultado;
}

//Función que decondifica minusculas.
function decode (numb,text) {
  let resultado = "";
  let ascii = 0;
  for (let i=0; i<text.length;i++){
   ascii=text.charCodeAt(i);
    if(ascii>=65 && ascii<=90){
      ascii = (ascii-39-parseInt(numb))%26+65;
    }
    if(ascii>=97 && ascii<=122){
      ascii = (ascii-71-parseInt(numb))%26+97;
    }
      resultado += String.fromCharCode(ascii);
  }
  return resultado;
}