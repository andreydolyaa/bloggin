'use strict';


function onOpenMenu(){
    document.body.classList.toggle('open-menu');
}

function onReadMore(){
    var modal = document.querySelector('.modal');
    modal.style.display = 'block';
    document.body.classList.toggle('open-modal')
}

function onCloseModal(){
    var modal = document.querySelector('.modal');
    modal.style.display = 'none';
    document.body.classList.toggle('open-modal')
}