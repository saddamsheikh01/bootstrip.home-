const $next =document.querySelector('.next');
const $prev =document.querySelector('.prev');

$next.addEventListener('click', ()=>{
    const $first =document.querySelector('.slide .item');
    $first.classList.remove('active');
    $first.nextElementSibling.classList.add('active');
})

$prev.addEventListener('click', ()=>{
    const $first =document.querySelector('.slide .item');
    $first.classList.remove('active');
    $first.previousElementSibling.classList.add('active');
})
