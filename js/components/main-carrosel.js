
const elements=document.querySelector('.elements');
const btnRigth=document.querySelector('.Button-Arrow.-right');
const btnLeft=document.querySelector('.Button-Arrow.-Left')
var pixels=10

btnRigth.addEventListener('click', function(){
    pixels=pixels + 10;
    elements.style =` transform: translateX(${pixels}px)`;
});

btnLeft.addEventListener('click', function(){
    pixels=pixels -10;
    elements.style =` transform: translateX(${pixels}px)`;
})