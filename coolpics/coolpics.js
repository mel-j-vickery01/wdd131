const button = document.querySelector('button');
const menuList = document.querySelector('ul');
const gallery = document.querySelector('#gallery');

window.addEventListener('load', handleResize);
window.addEventListener('resize', handleResize);
button.addEventListener('click', showMenu);
gallery.addEventListener('click', showModal(event.target.closest('img')));


function showMenu(){
    menuList.classList.toggle("hide");
}
function handleResize(){
    if (innerWidth >= 1001){
        menuList.classList.remove("hide");
    }else{
        menuList.classList.add("hide");
    }
}
function showModal(){
    const img = document.querySelector('#modal img').src;
    const modal = document.querySelector('#modal')
    img.split('-')[0]+'-full.jpeg'
    modal.style.display = 'block'
    console.log('ShowModal is runnig')
}
