/**
 * Created by Mohammad Niksefat on 20/08/2016.
 */
$(document).ready(function(){
    /*var link = document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'http://www.stackoverflow.com/favicon.ico';
    document.getElementsByTagName('head')[0].appendChild(link);*/
    var windowWidth = (($(window).width()- 1269).toString())+"px";
    /*$(".c-wrapper").css("margin-left",windowWidth);*/
    alert(windowWidth);
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
    $('.speed').on({
        'mouseenter':function() {
            $(this).attr("src","src/images/speed12changed.png");
        },
        'mouseleave':function(){
            $(this).attr("src","src/images/speed12.png");
        }
    });
    /*$(window).scroll(function() {
        if ($(document).scrollTop() > 600 && $(document).scrollTop() < 730) {
            $("#Nav").hide("slow");
        } else {
            $("#Nav").show("slow");
        }
    });*/
    $(window).scroll(function() {
         if ($(document).scrollTop() > 600) {
            $(".navbar").css("background-color","rgba(198, 198, 198, 0.49)");
        } else {
             $(".navbar").css("background-color","transparent");
         }
     });
    var tabs = $('.tabs ul li');
    var interval;
    var timer = function(){
        interval = setInterval(function() {

            //get currently-on tab
            var onTab = tabs.filter('.current');

            //click either next tab, if exists, else first one
            var nextTab = onTab.index() < tabs.length-1 ? onTab.next() : tabs.first();
            nextTab.click();
        }, 5000);
    };
    timer();
    tabs.click(function(){
        var tab_id = $(this).attr('data-tab');

        tabs.removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
        clearInterval(interval);
        timer();
    });

});

(function($) {
    $(function() {
        $('.jcarousel')
            .jcarousel({
                wrap: 'circular'
            })
            .jcarouselAutoscroll({
                target: '+=1',
                interval: 4000
            });
    });
})(jQuery);