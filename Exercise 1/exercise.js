'use strict';

// get info from login page
console.log('1');
let Cusername = document.getElementById('username');
let Cpassword = document.getElementById('password');

window.addEventListener('submit', () =>{

    console.log('2');

    if(Cusername !== 'Rudy' && Cpassword !== 'Stuff'){
        alert('ya fucked up son, re-type that shit!');
    }
    openWindow();

    event.preventDefault();
})

function openWindow(){
    window.location('Welcome-page.html');
}