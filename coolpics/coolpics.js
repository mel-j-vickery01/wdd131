const button = document.querySelector('button');
const menuList = document.querySelector('ul');
const gallery = document.querySelector('#gallery');
const modalImage = document.querySelector('#modal img');
const modal = document.querySelector('#modal');


window.addEventListener('load', handleResize);
window.addEventListener('resize', handleResize);
button.addEventListener('click', showMenu);
gallery.addEventListener('click', showModal);

function showModal(event){
    const clicked = event.target.closest('img');
    
    const newSrc = clicked.src.split('-')[0] + '-full.jpeg';

    modalImage.src = newSrc
    console.log('ShowModal is runnig');
    modal.style.display = 'block'
};


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

