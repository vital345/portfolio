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


function validateForm(){
    var formName = document.forms['myForm']['name'].value;
    var formSubject = document.forms['myForm']['subject'].value;
    var formEmail = document.forms['myForm']['email'].value;
    var formMessage = document.forms['myForm']['message'].value;

    console.log(formSubject.length)

    if (formName.length == null || formName.length < 2){
        M.toast({html: "You have entered an invalid Name!!! itshould have more than three characters", classes: 'rounded'});
        return false;
    }

    if (formSubject.length == null || formSubject.length < 20){
        M.toast({html: "You have entered invalid subject!!! it should have more than 20 characters", classes: 'rounded'});
        return false;
    }

    if (formMessage.length == null || formMessage.length < 100){
        M.toast({html: "You have entered invalid message !!! it should have more than 100 character", classes: 'rounded'});
        return false;
    }
    else{
        return true;
    }
}

