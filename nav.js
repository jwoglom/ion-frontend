$(document).ready(function() {
    $(".nav a").click(function(e) {e.preventDefault();
        $(".nav .selected").removeClass("selected");
        $(this).parent().addClass("selected");
    });

    $(".header h1").click(function(e) {e.preventDefault();
        $(".nav .selected").removeClass("selected");
        $(".nav li").slice(0,1).addClass("selected");
    });
});