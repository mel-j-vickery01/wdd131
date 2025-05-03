let elem = document.querySelector('select');

elem.addEventListener('change', changetheme);

var image = document.querySelector('img');
function changetheme(){
    let current = elem.value;

    if (current == 'dark'){
        document.body.className = 'dark';
        document.h2.className = 'dark'
        image.className = 'byui-logo_white.png';
        image.src = 'byui-logo_white.png';
        document.getElementById("logo").src='byui-logo_white.png'
        document.getElementById("logo").className='byui-logo_white.png'
        // give body dark class
        // change img at bottom
    }else{
        document.body.className = 'light';
        document.h2.className = 'light';
        document.img.src = 'byui-logo_blue.webp';
        //remove class on body
        // change img back to origanal 
    }
}