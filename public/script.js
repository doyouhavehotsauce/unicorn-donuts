document.addEventListener("DOMContentLoaded", function(){
    
    const hamburgerToggle = document.getElementById('hamburger')
    let loadCount = 0
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
        console.log(window.scrollY)
        let grabNav = document.querySelector('.desktop-logo')

        // when page loads - load count = 0 and pageLoad class is in place
        // once you scroll past 100 remove pageLoad class and add scrolldown class
        // if you scroll back up and scrollY is less than 100 remove scroll down class and add scroll up

        if(window.scrollY > 100 && loadCount == 0){
            grabNav.classList.add('navScrollDown')
            grabNav.classList.remove('navScrollLoad')
            loadCount += 1
        } else if(window.scrollY < 100 && loadCount >= 1){
            grabNav.classList.add('navScrollUp')
            grabNav.classList.remove('navScrollDOwn')
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