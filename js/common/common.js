// Spinner
var spinner = function () {
    setTimeout(function () {
        if ($('#spinner').length > 0) {
            $('#spinner').removeClass('show');
        }
    }, 1);
};

$(function () {
    $("#spinner").load("common/spinner.html", function () {
        $("#header").load("common/header.html", function () {
            let url = window.location.pathname;
            url = url.substring(url.lastIndexOf("/") + 1);
        
            $(".nav-link").removeClass("active");        
            $('.nav-link[href="' + url + '"]').addClass("active");

            $(".sub-nav-link").removeClass("active");        
            $('.sub-nav-link[href="' + url + '"]').addClass("active");
        });
        $('#footer').load('common/footer.html', function () {
            $('#currYear').html(new Date().getFullYear());
            spinner();
        });
    });
});