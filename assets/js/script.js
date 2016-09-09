// Toggle classes in responsive menu
var anchor = document.getElementById('toggle-menu');
        
var open = false;
anchor.onclick = function(event) {
    event.preventDefault();
    if(!open){
        this.classList.add('close');
        open = true;
    } else {
        this.classList.remove('close');
        open = false;
    }
}

$(function () {

    $('#toggle-menu').click(function() {
        if(!$(this).hasClass('close')) {
           $('.main-nav').removeClass('show');
        } else {
            $('.main-nav').addClass('show');
        }
    });


});