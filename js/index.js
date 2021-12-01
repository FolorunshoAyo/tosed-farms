$(function(){
    const $window = $(window);
    const enquireInputs = $("input");
    const enquireLabels = $("label");

    const smoothScroll = (link, location, duration) => {
        $(link).on("click", function () {
            $([document.documentElement, document.body]).animate({
                scrollTop: $(location).offset().top
            }, duration);
        });
    };

    enquireInputs.each((index, input) => {
        $(input).on("blur", () => {
            if(input.value){
                $(enquireLabels[index]).addClass("still");
            }else{
               $(enquireLabels[index]).removeClass("still");
            }
        });
    });

    $window.on("scroll", () => {
        let headerMain = $(".header__main");

        headerMain[0].classList.toggle("sticky", $window[0].scrollY > 180);
    });
});