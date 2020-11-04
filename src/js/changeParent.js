function StreamAdd() {
    $('.liverubi').attr("src",`https://player.twitch.tv/?channel=rub1gg&parent=${window.location.hostname}`)
    $('.dots li').click(function(){
        $('.active').removeClass('active');
        $(this).addClass('active');
    });
    AOS.init();
}  