const boxBody = document.querySelector('.box-body');
const boxBodyImg = document.querySelector('.box-body .img');

boxBody.addEventListener('click', function(){
  console.log('hello');
  boxBody.classList.add('hover');
})


boxBody.addEventListener('transitionend', function(event){
  console.log(event);
  boxBodyImg.style.opacity = 1;
})
