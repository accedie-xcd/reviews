

const portraits = ['images/1.jpg', 'images/2.png', 'images/3.jpg', 'images/4.jpg', 'images/5.png', 'images/6.jpg', 'images/7.jpg', 'images/8.jpg']
let index = 1;

const portrait = document.getElementById("portrait");
const leftArrow = document.getElementById('left');

leftArrow.addEventListener('click', function(){
  index = indexDecrement(index);
  portrait.src = portraits[index];
})

function indexDecrement(index){
  if (index===0){
    return (portraits.length-1);
  }

  return (index - 1);
}