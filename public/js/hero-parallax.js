document.addEventListener("DOMContentLoaded", function(){

    let wWidth = window.innerWidth
    console.log('window width is ' + wWidth + 'px')

    window.addEventListener('scroll', () => {

        let wScroll = window.scrollY
        let parallaxTitle = document.getElementById('parallax-title')
        let donut1 = document.querySelector('[data-parallax-donut-1]')
        let donut2 = document.querySelector('[data-parallax-donut-2]')
        let donut3 = document.querySelector('[data-parallax-donut-3]')
        let donut4 = document.querySelector('[data-parallax-donut-4]')
        let donut5 = document.querySelector('[data-parallax-donut-5]')
        
        if(wWidth <= 764){
            parallaxTitle.style.transform = 'translate(0px, ' + wScroll /2 + '%)';
            donut1.style.transform = 'translate(0px, '+ wScroll  /5 + '%) scale(0.9)';
            donut2.style.transform = 'translate(0px, -' + wScroll /2 + '%) scale(0.75)';
            donut3.style.transform = 'translate(0px, -'+ wScroll /5 + '%) scale(0.75)';
            donut4.style.transform = 'translate(0px, -' + wScroll /7 + '%)';
        }
        if(wWidth <= 1100 && wWidth >= 765){
            parallaxTitle.style.transform = 'translate(0px, ' + wScroll /2 + '%)';
            donut1.style.transform = 'translate(0px, '+ wScroll  /5 + '%) scale(0.9)';
            donut2.style.transform = 'translate(0px, -' + wScroll /2 + '%) scale(0.75)';
            donut3.style.transform = 'translate(0px, -'+ wScroll /5 + '%) scale(0.75)';
            donut4.style.transform = 'translate(0px, -' + wScroll /7 + '%)';
        }
        

    });

});