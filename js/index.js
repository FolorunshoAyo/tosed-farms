$(function(){
    let $window = $(window);

    $window.on("scroll", () => {
        let headerMain = $(".header__main");

        headerMain[0].classList.toggle("sticky", $window[0].scrollY > 180);
    });
});