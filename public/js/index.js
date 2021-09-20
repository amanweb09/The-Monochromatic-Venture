let menuButton =  document.querySelector("#menu-icon");
let mobileNav =  document.querySelector(".nav-list");
let links = document.querySelectorAll('nav-links');
let menuButtonText = document.querySelectorAll("#menu-button-text");    
let activate = false;

menuButton.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
    document.querySelectorAll('.intro-text-headings').classList.toggle('open');
    document.querySelectorAll('intro-text').classList.toggle('open');
    menuButton.classList.toggle('open');
    activate = true;

    links.addEventListener('click', () => {
        open == false;
              
    })
})

