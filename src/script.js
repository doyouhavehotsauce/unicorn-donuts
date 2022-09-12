document.addEventListener("DOMContentLoaded", function(){
    
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

    // const userScroll = document.getElementById('desktop-nav')
    // userScroll.addEventListener('scroll', (e) => {
    //     console.log(userScroll.scrollTop)

    // }, { passive: true });
    window.addEventListener('scroll', () => {
        let grabNav = document.querySelector('.desktop-logo')
        console.log('scrolling' + window.scrollY)
        if(window.scrollY >= 100){
            grabNav.classList.add('navScrollDown')
            grabNav.classList.remove('navScrollUp')
        } else {  
            grabNav.classList.add('navScrollUp')
            grabNav.classList.remove('navScrollDown')
        }
    })
    
    
    

    
    
    
    }); //close dom listner