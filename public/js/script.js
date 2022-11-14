document.addEventListener("DOMContentLoaded", function(){

    const hamburgerToggle = document.getElementById('hamburger-toggle')
    let loadCount = 0
    hamburgerToggle.addEventListener('click', () => {
        
            const getNav = document.getElementById('mobile-nav-menu')
            const hamburger = document.getElementById('hamburger')
            
            if(getNav.classList.contains('show-nav') ){
                getNav.classList.remove('show-nav')
                getNav.classList.add('hide-nav')
                hamburger.classList.remove('showX')
                console.log('hello')

            } else {
                getNav.classList.remove('hide-nav')
                getNav.classList.add('show-nav')

                hamburger.classList.add('showX')

                console.log('hello')

            }
    })

    // const userScroll = document.getElementById('desktop-nav')
    // userScroll.addEventListener('scroll', (e) => {
    //     console.log(userScroll.scrollTop)

    // }, { passive: true });
    window.addEventListener('scroll', () => {
        let grabNav = document.querySelector('.desktop-logo')

        // when page loads - load count = 0 and pageLoad class is in place
        // once you scroll past 100 remove pageLoad class and add scrolldown class
        // if you scroll back up and scrollY is less than 100 remove scroll down class and add scroll up

        if(window.scrollY > 100 && loadCount == 0){
            grabNav.classList.add('navScrollDown')
            grabNav.classList.remove('navScrollLoad')
            grabNav.classList.remove('navScrollUp')
            loadCount += 1
        } else if(window.scrollY < 100 && loadCount >= 1){
            grabNav.classList.add('navScrollUp')
            grabNav.classList.remove('navScrollDown')
            grabNav.classList.remove('navScrollLoad')
            loadCount += 1
        } else if (window.scrollY > 100 && loadCount >= 1){
                grabNav.classList.add('navScrollDown')
                grabNav.classList.remove('navScrollUp')
                grabNav.classList.remove('navScrollLoad')
                loadCount += 1
            };
    })
    
    
    

    
    
    
    }); //close dom listner