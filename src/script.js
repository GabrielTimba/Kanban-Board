const cards= document.querySelectorAll('.card');
const dropzones= document.querySelectorAll('.dropzone');


cards.forEach(card=>{
    card.addEventListener('dragstart',dragstart);
    card.addEventListener('drag',drag);
    card.addEventListener('dragend',dragend);
});

function dragstart(){
    //this=card
    dropzones.forEach(dropzone=>dropzone.classList.add('hightlight'));
    this.classList.add('is-dragging')
}

function drag(){
    console.log('>CARD:Is draggind');
}

function dragend(){
    //console.log('>CARD:Stop draggind');
    dropzones.forEach(dropzone=>dropzone.classList.remove('hightlight'));
    this.classList.remove('is-dragging')
}

dropzones.forEach(dropzone=>{
    dropzone.addEventListener('dragenter',dragenter);
    dropzone.addEventListener('dragover',dragover);
    dropzone.addEventListener('dragleave',dragleave);
    dropzone.addEventListener('drop',drop);
});

function dragenter(){
    console.log('>DROPZONE:enter in zone');
}

function dragover(){
    //this=dropzone
    this.classList.add('over');

    //get  dragging card
    const cardBeingDragged=document.querySelector('.is-dragging');
    this.appendChild(cardBeingDragged);
}

function dragleave(){
    //console.log('>DROPZONE:leave');
    this.classList.remove('over');
}

function drop(){
    this.classList.remove('over');
}