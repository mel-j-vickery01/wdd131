let elem = document.querySelector('select');

elem.addEventListener('change', changetheme);

var image = document.querySelector('img');

function changetheme(){
    
    let current = elem.value;

    if (current == 'dark'){
        document.body.className = 'dark';
        image.className = 'byui-logo_white.png';
        image.src = 'byui-logo_white.png';
        // give body dark class
        // change img at bottom
    }else{
        document.body.className = 'light';
        image.src = 'byui-logo_blue.webp';
        //remove class on body
        // change img back to origanal 
    }
}