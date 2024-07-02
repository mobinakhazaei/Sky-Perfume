const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
function showModal(){
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}
function closeModal(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}
for(let i=0; i<showModal.length ; i++){
    showModal[i].addEventlistener('click',showModal)
}