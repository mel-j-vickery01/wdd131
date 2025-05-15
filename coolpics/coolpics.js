const button = document.querySelector('button');

button.addEventListener('click', showMenu)

function showMenu(){
    const menuList = document.querySelector('ul')
    menuList.classList.remove ("hide");
    menuList.classList.add("visable");
}
