$(document).ready(() => {
    //page top button
    let scrollHeight, mainVisual;
    $(".page-top").hide();
    $(document).on("scroll", function () {
        scrollHeight = $(window).scrollTop();
        mainVisual = $(".banner").height();
        if (scrollHeight > mainVisual) {
            $(".page-top").fadeIn();
        } else {
            $(".page-top").fadeOut();
        }
    })

    // theme change
    var r = document.querySelector(':root');
    $('.dropup-content li span').each(function () {
        $(this).css("backgroundColor", "#" + $(this).parent().attr('id'));
    });

    $('.dropup-content li').click(function () {
        r.style.setProperty('--common-color', '#' + $(this).attr('id')); 
        r.style.setProperty('--secondary-bg-color', '#' + $(this).attr('id') +"3b"); 
    })

})