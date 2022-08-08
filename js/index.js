$(function(){
    const $window = $(window);
    const enquireInputs = $("input");
    const enquireLabels = $("label");
    const slides = $(".header__slide");
    const burgerMenu = $(".burger-menu");
    const mobileNav = $(".mobile-nav");
    const contactForm = $("#contact-form");


    // Test Handler for contact form submit
    contactForm.on("submit", function (e) {
        e.preventDefault();

        const formData = $(this).serializeArray();

        let collatedInfo = "Collected data is\n";

        for(let formInputDetail of formData){
            collatedInfo += `${formInputDetail["name"]}: ${formInputDetail["value"]}\n`;
        }

        alert(collatedInfo);
    });

    // Event Handler for Burger Menu Toggle
    burgerMenu.on("click", () => {
        burgerMenu.toggleClass("active");
        mobileNav.toggleClass("active");
    });


    let slideIndex = 1;

    // Smooth scroll function declaration for handling smooth document fragmenting.
    const smoothScroll = (link, location, duration) => {
        $(link).each(function(){
            $(this).on("click", (e) => {
                e.preventDefault();
                if($(this).parent().parent().parent().hasClass("mobile-nav")){
                    burgerMenu.removeClass("active");
                    $(".mobile-nav").removeClass("active");
                }
                $([document.documentElement, document.body]).animate({
                    scrollTop: $(location).offset().top
                }, duration);
            });
        });
    };

    // Function to enable smooth scroll functionality on all anchor elements.
    function enableSmoothScroll(){
        smoothScroll(".home-link", "#home", 2500); 
        smoothScroll(".poultry-field-link", "#poultry-field", 2500); 
        smoothScroll(".services-link", "#services", 2500);
        smoothScroll(".products-link", "#featured-products", 2500);
        smoothScroll(".aboutus-link", "#about-us", 2500);
        smoothScroll(".gallery-link", "#gallery", 2500);
        smoothScroll(".contact-link", "#contact", 2500);
        smoothScroll(".enquiry-link", "#enquiry", 2500);
        // scrollFunctionMobile(".home-mobile", "#top", 2500);
        // scrollFunctionMobile(".about-mobile", "#about", 2500);
        // scrollFunctionMobile(".contact-mobile", "#contact", 2500);
        // scrollFunctionMobile(".join-us-mobile", "#join-us", 2500);
    } 

    enquireInputs.each((index, input) => {
        $(input).on("blur", () => {
            if(input.value){
                $(enquireLabels[index]).addClass("still");
            }else{
               $(enquireLabels[index]).removeClass("still");
            }
        });
    });

    // Jquery handler for displaying sticky header upon scroll.
    $window.on("scroll", () => {
        let headerMain = $(".header__main");

        headerMain[0].classList.toggle("sticky", $window[0].scrollY > 180);
    });

    // Slider animation for the hero section.
    setInterval(() => {
        let i;
        if (slideIndex > slides.length) {slideIndex = 1}
        if (slideIndex < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }

        slides[slideIndex - 1].style.display = "block";
        slideIndex++;
    }, 5000);

    enableSmoothScroll();
});