//vews
import { homeView }from './templates/home.js';
import { appView } from './templates/app.js';

const changeRoute = ( hash ) => {
    if (hash === '' || hash === '#/' || hash === '#/home' || hash === '#/app')
        return showViews(hash);    
    }

    export const showViews = ( hash ) => {
        const route = hash;
        const rootContainer = document.getElementById('screen').innerHTML = '';

        switch (route) {
            case '':
                homeView();
                break
            case '#/':
                homeView();
                break
            case '#/home':
                homeView();
                break
            case '#/app':
                appView();
                break
            default:
                rootContainer.innerHTML = `<p>Error 404</p>`
        }
    };

    export const router = () => {
        window.addEventListener('load', changeRoute(window.location.hash));
        if ('onhashchange' in window){
            window.onhashchange = () => {
                changeRoute(window.location.hash);
            }
        }
    };