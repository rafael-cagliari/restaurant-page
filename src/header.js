const headerLoader = ()=>{
    let div=document.querySelector('#content');
    const header = () =>{
        const header = document.createElement('div');
        header.classList.add('header');
        header.id='header'
        div.appendChild(header);
    }
    
    const restaurantName = (name)=>{
        const restaurant_name = document.createElement('div')
        restaurant_name.innerText = name
        restaurant_name.classList.add('restaurant-name')
        let head = document.querySelector('#header');
        head.appendChild(restaurant_name)
    }

    const button = (button_name, icon)=>{
        const button = document.createElement('button');
        button.innerText = button_name;
        let head = document.querySelector('#header');
        button.innerHTML="<button class ='"+icon+"' id='"+button_name.toLowerCase()+"'>"+ "  "+button_name+"</button>";
        head.appendChild(button);
    }
return { header, button, restaurantName }
}

export { headerLoader }