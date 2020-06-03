import { pageLoad } from "./page_load";
import { menu } from "./page_load";
import { home } from "./page_load";
import { info } from "./page_load";
import { headerLoader } from "./header"
console.log('okkkkkk');
headerLoader().header();
headerLoader().restaurantName('Parrillero');
headerLoader().button('Home', 'fa fa-home');
headerLoader().button('Menu', 'fa fa-glass');
headerLoader().button('Info', 'fa fa-info');
pageLoad().background();


document.getElementById('menu').addEventListener('click', function(e){
    menu()
})

document.getElementById('home').addEventListener('click', function(e){
    home();
})

document.getElementById('info').addEventListener('click', function(e){
    info()
})