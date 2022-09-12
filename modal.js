'use strict'
const modal =document.querySelector('.modal');
const overlay= document.querySelector('.overlay');
const btnCloseModal= document.querySelector('.close-modal');


const btnsOpenModal =document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);
  //Implementation of dryp---AKA dont repeat yourself
const openModal=function(){
  	console.log('Button Clicked');
  	modal.classList.remove('hidden');
  	overlay.classList.remove('hidden');
   } 

for(let i =0; i< btnsOpenModal.length; i++){
  btnsOpenModal[i].addEventListener('click',openModal);
}


const closeModal =function(){
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
}


btnCloseModal.addEventListener('click',closeModal);

overlay.addEventListener('click',closeModal);

document.addEventListener('keydown',function(e){
 	// console.log('A key was pressed');
 	console.log(e.key);

 });


//close modal
//how to respond to keyboard event  they are called global event
//we usually listen on the whole document

 
  














