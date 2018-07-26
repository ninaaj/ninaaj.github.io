$(document).on('click', "#menu.close-menu", function()
{
    $('.overlay').removeClass('open');
    $(this).removeClass("close-menu");
    $(this).addClass("open-menu");
})
$(document).on('click', "#menu.open-menu", function()
{
    $('.overlay').addClass('open');
    $(this).removeClass("open-menu");
    $(this).addClass("close-menu");
})
$(document).ready(function() {
    $('.close-menu').on('click', function() {
      $('.overlay').removeClass('open');
      $("#menu").removeClass("close-menu");
      $("#menu").addClass("open-menu");
    });
});
