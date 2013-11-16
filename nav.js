$(document).ready(function() {
    $("a").click(function(e) {
        l = $(this).attr('data-loc');
        if(l != null) {
            e.preventDefault();
            setTimeout(function(l) { return function() {
                window.location.href = l + '.html';
            } }($(this).attr('data-loc')), 200);
        }
    });
    $(".nav a").click(function(e) {
        $(".nav .selected").removeClass("selected");
        $(this).parent().addClass("selected");
    });

    $(".header h1").click(function(e) {e.preventDefault();
        $(".nav .selected").removeClass("selected");
        $(".nav li").slice(0,1).addClass("selected");
    });
});