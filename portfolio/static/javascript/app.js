let themeDots = document.getElementsByClassName('theme-dot')
// console.log(themeDots)

for(var i=0; i<themeDots.length; i++){
    themeDots[i].addEventListener('click', function(){
        console.log(this.getAttribute('data-mode'));
        let modes = this.getAttribute('data-mode');
        setTheme(modes);
        
    })
    // console.log(themeDots[i].getAttribute('data-mode'));
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

// for(var i=0; i<themeDots.length ; i++){
//     themeDots[i].addEventListener('click', () =>{
//         // let modes = this.dataset.mode
//         console.log(`cliked item is ${themeDots}`)
//     })
// }