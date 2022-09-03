document.addEventListener("DOMContentLoaded", function(){
console.log('src')

    
    const hamburgerToggle = document.getElementById('hamburger')
    hamburgerToggle.addEventListener('click', () => {
        
            const getNav = document.getElementById('nav-menu')
            if(getNav.classList.contains('show-nav') ){
                getNav.classList.remove('show-nav')
                getNav.classList.add('hide-nav')
            } else {
                getNav.classList.remove('hide-nav')
                getNav.classList.add('show-nav')
            }
    })
    
    
    

    
    
    
    }); //close dom listner