const pageLoad = () => {   
    let div=document.querySelector('#content');
    let main = document.createElement('div');
    main.id = 'main';
    main.classList.add('background');
    div.appendChild(main);
    const background = ()=>{
        let text = document.createElement('div');
        text.innerText = "The authentic Uruguayan Parrilla";
        text.classList.add('main-text');
        text.id = 'main-text';
        div.appendChild(text);
    }
    return { background }
}

const home = () =>{
    let main = document.querySelector("#main");
    let text = document.querySelector("#main-text");
    text.classList.remove('menu','info')
    text.classList.add('main-text');
    text.innerText = 'The authentic Uruguayan Parrilla';
}

const menu = () =>{
    let main = document.querySelector("#main");
    let text = document.querySelector("#main-text");
    text.innerText = 'Menu';
    text.classList.remove('info');
    text.classList.add('menu');
    let container = document.createElement('div');
    container.classList.add('menu-container');
    text.appendChild(container);
    let drinks = document.createElement('div');
    let meals = document.createElement('div');
    drinks.classList.add('menu-options');
    meals.classList.add('menu-options');
    container.appendChild(drinks);
    container.appendChild(meals);
    let menu_header_drinks = document.createElement('p');
    let menu_content_drinks = document.createElement('p');
    menu_header_drinks.innerText = 'Drinks'
    menu_content_drinks.innerHTML = '<p>Cerveza Patricia <br>Tannat Tinto <br>Fernet <br>Caipirinha Brasilena <br>Whiskey<br>Soda<br>Water</p>'
    menu_header_drinks.classList.add('menu-header');
    menu_content_drinks.classList.add('menu-content');
    drinks.appendChild(menu_header_drinks)
    drinks.appendChild(menu_content_drinks);

    let menu_header_meals = document.createElement('p');
    let menu_content_meals = document.createElement('p');
    menu_header_meals.innerText = 'Meals'
    menu_content_meals.innerHTML = '<p>Bife de Chorizo <br>Ojo de Bife <br>Punta de Anca <br>Lomito de Cerdo<br>Churrasco</p>'
    menu_header_meals.classList.add('menu-header');
    menu_content_meals.classList.add('menu-content');
    meals.appendChild(menu_header_meals)
    meals.appendChild(menu_content_meals);
}

const info = () =>{
    let main = document.querySelector("#main")
    let text = document.querySelector("#main-text")
    text.classList.add('info')
    text.innerText = 'Info'
    let info = document.createElement('p')
    info.innerHTML = '<p> Founded by Don Ramon Sanchez in 1921 at the Porto region in Montevideu, the Parrillero is one of the most established Parrilla restaurants in the whole world according to critics and public alike.'
    text.appendChild(info);
    info.classList.add('info-text')
    let location = document.createElement('p');
    location.innerHTML = '<p style="margin-left:23px; text-align:left; text-shadow:none; font-size:2.2vw; font-style:italic">Location: Somewhere in Montevideu <br>Phone: 234 44312 28473<br>parrillero.restaurant@gmail.com</p>'
    text.appendChild(location);

}

export { pageLoad, menu, info, home }
