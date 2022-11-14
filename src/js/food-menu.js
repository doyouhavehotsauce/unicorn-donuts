document.addEventListener("DOMContentLoaded", function(){


    const coffeeBtn = document.getElementById('coffee')
    const coffeeMenu = document.getElementById('coffee-tbl')
    const donutBtn = document.getElementById('donuts')
    const donutMenu = document.getElementById('donuts-tbl')
    const juiceBtn = document.getElementById('juice')
    const juiceMenu = document.getElementById('juice-tbl')
        
    
    
    
    coffeeBtn.addEventListener('click', () => {
        console.log('coffee click')
        coffeeBtn.removeAttribute('class')
        donutBtn.removeAttribute('class')
        juiceBtn.removeAttribute('class')
    
        coffeeBtn.classList.add('active-menu')
    
        
        coffeeMenu.removeAttribute('class')
        donutMenu.removeAttribute('class')
        juiceMenu.removeAttribute('class')
    
    
        coffeeMenu.classList.add('show-menu')
        donutMenu.classList.add('hide-menu')
        juiceMenu.classList.add('hide-menu')
        
    
    })
    donutBtn.addEventListener('click', () => {
        console.log('donuts click')
        coffeeBtn.removeAttribute('class')
        donutBtn.removeAttribute('class')
        juiceBtn.removeAttribute('class')
    
        donutBtn.classList.add('active-menu')
        
        coffeeMenu.removeAttribute('class')
        donutMenu.removeAttribute('class')
        juiceMenu.removeAttribute('class')
    
        coffeeMenu.classList.add('hide-menu')
        donutMenu.classList.add('show-menu')
        juiceMenu.classList.add('hide-menu')
    })
    juiceBtn.addEventListener('click', () => {
        coffeeBtn.removeAttribute('class')
        donutBtn.removeAttribute('class')
        juiceBtn.removeAttribute('class')
    
        juiceBtn.classList.add('active-menu')
        
        coffeeMenu.removeAttribute('class')
        donutMenu.removeAttribute('class')
        juiceMenu.removeAttribute('class')
    
        coffeeMenu.classList.add('hide-menu')
        donutMenu.classList.add('hide-menu')
        juiceMenu.classList.add('show-menu')
    })
    
    
    
    
    }); //close dom listner