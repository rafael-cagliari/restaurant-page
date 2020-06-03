const pageLoad = () => {   
    let div=document.querySelector('#content');
    let main = document.createElement('div');
    main.id = 'main';
    main.classList.add('background')
    div.appendChild(main);
    const background = ()=>{
        let text = document.createElement('div');
        text.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum quis lectus eu rhoncus. Vestibulum suscipit velit sapien, nec accumsan ante feugiat ac. Donec venenatis nunc consectetur mollis efficitur."
        text.classList.add('main-text');
        text.id = 'main-text'
        div.appendChild(text)
    }
    return { background }
}

const home = () =>{
    let main = document.querySelector("#main")
    let text = document.querySelector("#main-text")
    text.innerText = 'Home'
}


const menu = () =>{
    let main = document.querySelector("#main")
    let text = document.querySelector("#main-text")
    text.innerText = 'This is the menu!'
}

const info = () =>{
    let main = document.querySelector("#main")
    let text = document.querySelector("#main-text")
    text.innerText = 'info'
}

export { pageLoad, menu, info, home }
