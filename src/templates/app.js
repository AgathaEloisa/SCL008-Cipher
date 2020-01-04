//views
import { homeView } from './home.js';

// Manejo del DOM
//-------------- Pantalla dos ------------//
export const appView = () => {
    // document.getElementById('btnenter').addEventListener('click', () => {
        // let name = document.getElementById('username').value;
        document.getElementById('screen').innerHTML = '';
        document.getElementById('screen').innerHTML += 
        
        `
        <h2 id="greeting"> Hola ${ name } comienza por elegir un número de 
        desplazamiento y escribe lo que quieras </h2>

        <h2> N° de desplazamiento:  
        <input type="number" min="1" max="99" placeholder="N°" id="numbbox" value="0">
        </h2>

        <div class="inpradio"> 
        <h3>
            <input id="encode" type="radio" name="change" value="Codificar" checked>Codificar
        </h3>
        <h3>
            <input id="decode" type="radio" name="change" value="Decodificar">Decodificar
        </h3>
        </div>

        </div>
            <!--Donde el usuario escribe el mensaje a decodificar-->
            <input type="text" id="text1">
        <div>

            <!--Botón convertir, que codifica el texto que entrega el usuario-->
            <!-- Trigger/Open The Modal -->
        <input type="submit" id="btnconvert" value="Convertir">

        <div>
        <h2 class="textresult">Resultado:</h2>
            <p id="text2"></p>
        </div>

            <!--caja de texto donde va el correo-->
        <div>
            <input type="email" id="email" placeHolder="Ingresa correo"><input type="submit" id="btnsend" value="Enviar">
        </div>

            <!--Botón que envía a pag.1-->
            <input type="submit" id="btnhome" value="cambiar de usuario">
        `


        // Función que toma valores y, codifica o decodifica seún el radio button seleccionado.
    document.getElementById('btnconvert').addEventListener('click', () => {
        let number = parseInt(document.getElementById('numbbox').value);
        let text = document.getElementById('text1').value;

        if(number === 0){
            alert('por favor selecciona un número de desplazamiento');

        } else {
            if (document.getElementById('encode').checked) {
            document.getElementById('text2').innerHTML = `${encode(number,text)}`;
            } else {
            document.getElementById('text2').innerHTML = `${decode(number,text)}`;
            }
        };

        document.getElementById('text1').value = '';
        document.documentElement.scrollTop=0;
    });

        document.documentElement.scrollTop=0;

        //volviendo a la pantalla principal
    document.getElementById('btnhome').addEventListener('click', () => {
        window.location.hash = '#/home';

        document.documentElement.scrollTop=0;
    });

    // función que "envía correo"
    document.getElementById('btnsend').addEventListener('click', () => {
        document.getElementById('email').value;
        document.getElementById('email').value = '';
    });
    
    // });
    console.log('holo app');
};
