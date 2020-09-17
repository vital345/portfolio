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


// function validateForm(){
//     var formName = document.forms['myForm']['name'].value;
//     var formSubject = document.forms['myForm']['subject'].value;
//     var formEmail = document.forms['myForm']['Email'].value;
//     var formMessage = document.forms['myForm']['Message'].value;

//     if (ValidateEmail(formEmail)){
//         return true;
//     }
//     if (formName.length > 2 && formName.length < 25 ){
//         return true;
//     }
//     if (formSubject.length > 2 && formSubject.length < 100){
//         return true;
//     }
//     if (formMessage.length > 2 && formMessage.length < 250){
//         return true;
//     }
//     else{
//         return false
//     }
// }

// function ValidateEmail(mail) 
// {
//  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.emailAddr.value))
//   {
//     return (true)
//   }
//     alert("You have entered an invalid email address!")
//     return (false)
// }
