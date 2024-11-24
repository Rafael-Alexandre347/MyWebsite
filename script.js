document.addEventListener("DOMContentLoaded", function(){
    const hamburguer = document.querySelector('.hamburguer')
    hamburguer.addEventListener('click', function(){
        menu.classList.toggle('show')
    })
})