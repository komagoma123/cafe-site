const menuButtons = document.querySelectorAll('.menu-btn');
const menuCards = document.querySelectorAll('.menu-card');

menuButtons.forEach(button =>{ 
    button.addEventListener('click', () =>{

        menuButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const category = button.textContent; 

        menuCards.forEach(card =>{ 
            if(category === 'All'){
                card.classList.remove('is-hidden');
            } else if(category === 'Drink'){
                if (card.classList.contains('drink')){
                    card.classList.remove('is-hidden');
                } else{
                    card.classList.add('is-hidden');
                }
            } else if(category === 'Food'){
                if(card.classList.contains('food')){
                    card.classList.remove('is-hidden');
                } else{
                    card.classList.add('is-hidden');
                }
            }
        })

    })
})

const faqCards = document.querySelectorAll('.faq-card');

faqCards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('is-open');
    });
});

window.addEventListener('scroll', () =>{
    sessionStorage.setItem('scrollPos', window.scrollY);
});

window.addEventListener('load', () =>{
    const savedPos = sessionStorage.getItem('scrollPos');
    if (savedPos !== null){
        window.scrollTo(0, parseInt(savedPos, 10));
    }
});

$(function(){
    $(".hamburger-menu, .close-btn, .sp-menu a, .overlay").on("click", function(){

            $(".hamburger-menu").toggleClass("open");
            $("body").toggleClass("menu-open");
        
            let rightVal = $(".hamburger-menu").hasClass("open") ? 0 : -280;

        $(".sp-menu").stop().animate({
            right: rightVal
        }, 200);
    });
});

$(function(){
    $(window).on("scroll", function(){
        if ($(this).scrollTop() > 100) {
            $("#page-top").addClass("is-show"); 
        } else {
            $("#page-top").removeClass("is-show"); 
        }
    });

    $("#page-top").on("click", function(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
        return false;
    });
});