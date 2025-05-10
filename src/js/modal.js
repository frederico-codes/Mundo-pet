export const Modal = {
  wrapper:document.querySelector('.modal-wrapper'),
  // message:document.querySelector('.modal .title span'),
  buttonClose:document.querySelector('.modal-form img.close'),
  buttonOpen:document.querySelector('.container .new-schedule button'),
  open(){
      Modal.wrapper.classList.add('open')
  },
  close(){
      Modal.wrapper.classList.remove('open')
  }  
}
  
Modal.buttonClose.onclick = () => {
  Modal.close();    
}

Modal.buttonOpen.onclick = () => { 
  Modal.open();    
} 

window.addEventListener('keydown',handleKeydown)
 
function handleKeydown(){  
  if(event.key === 'Escape'){
      Modal.close();
  }
}