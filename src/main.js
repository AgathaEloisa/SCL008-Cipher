import { router } from './router.js';

function initApp() {
    router();
}

window.addEventListener('load', initApp);