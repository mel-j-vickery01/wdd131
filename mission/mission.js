let elem = document.querySelector('select');

let img = document.querySelector('.logo');

elem.addEventListener('change', changetheme);

function changetheme(){
    let current = elem.value;

    if (current == 'dark'){
        document.body.className = 'dark';
        document.h2.className = 'dark'
        document.img.src = 'byui-logo_white.png';
        // give body dark class
        // change img at bottom
    }else{
        document.body.className = '';
        document.h2.className = '';
        document.img.src = 'byui-logo_blue.webp';
        //remove class on body
        // change img back to origanal 
    }
}