let themeDots = document.getElementsByClassName('theme-dot')
// console.log(themeDots)

for(var i=0; i<themeDots.length; i++){
    themeDots[i].addEventListener('click', function(){
        console.log(this.getAttribute('data-mode'));
        let modes = this.getAttribute('data-mode');
        setTheme(modes);
        
    })
    
}

function setTheme(mode){
    let cssID = document.getElementById('theme-style');
    switch (mode) {
        case 'light' :
            cssID.href = './static/css/style.css';
            break;
        case 'blue' :
            cssID.href = './static/css/blue.css';
            break;
        case 'dark' :
            cssID.href = './static/css/dark.css';
            break;

        default :
            cssID.href = './static/css/style.css';
            break;

    }

}



const text = document.querySelector('.fancy');
const strText = text.textContent;
const splitText = strText.split('');
text.textContent = '';
for(let i=0; i < splitText.length; i++){
    text.innerHTML += '<span>' + splitText[i] + '</span>';
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){
    const spanchar = text.querySelectorAll('span')[char];
    spanchar.classList.add('faded');
    char ++;
    if (char === splitText.length){
        complete();
        return;
    }
}

function complete(){
    clearInterval(timer);
    timer = null;
}



