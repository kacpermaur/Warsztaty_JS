'use strict';

//Zadanie1
document.addEventListener('DOMContentLoaded', function () {
    var showMenuDOM = document.querySelector('.for-dropdown');
    var menuDOM = document.querySelector('.dropdown');
    
    
    showMenuDOM.addEventListener('mouseover', function () {
        menuDOM.style.display = 'block';
        //console.log(showMenuDOM, menuDOM);
    });

    showMenuDOM.addEventListener('mouseout', function () {
        menuDOM.style.display = 'none';
    });

    
    
    
});





