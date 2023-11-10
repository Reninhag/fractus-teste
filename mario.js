
const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
var isjumping = false;
var morreu = false
const jump = ()=>{
  if(isjumping == false)
  {
    isjumping = true;
  mario.classList.add('jump')

  setTimeout(() => {

    mario.classList.remove('jump');

    isjumping = false;
  }, 500);
}
};
const loop = setInterval(() =>{
const PipePosition = pipe.offsetLeft;
const MarioPosition = window.getComputedStyle(mario).bottom.replace('px', '')
if( PipePosition <= 120 && PipePosition > 0 && MarioPosition < 80)
{
  pipe.style.animation = 'none';
  pipe.style.left =`${PipePosition}px`;

  mario.style.animation = 'none';
  mario.style.bottom =`${MarioPosition}px`;

  mario.src = 'imgs/game-over.png';
  mario.style.width = '75px';
  mario.style.marginLeft = '50px';
}
});
document.addEventListener("keydown", jump);
