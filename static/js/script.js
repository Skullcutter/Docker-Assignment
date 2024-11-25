'use strict';
const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const btnCloseModal=document.querySelector('.close-modal');
const btnsOpenModel=document.querySelectorAll('.show-modal');
console.log(btnsOpenModel);
const openModal=function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
for(let i=0;i<btnsOpenModel.length;i++)
btnsOpenModel[i].addEventListener('click',openModal)

const closeModel=function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
btnCloseModal.addEventListener('click',closeModel);
overlay.addEventListener('click',closeModel);
document.addEventListener('keydown',function(event){
    console.log(event.key);
    if(event.key==='Escape'&& !modal.classList.contains('hidden'));
    closeModel();
})
