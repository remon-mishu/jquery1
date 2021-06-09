$(document).ready(function(){

    // Alert
    $('.f_btn').click(function(){
        alert("Hello SSB - 332")
    });

    // Hide
    $('.h_btn').click(function(){
        $('h1').hide("slow");
    });

    // Show
    $('.s_btn').click(function(){
        $('h1').show("slow");
    });

    // Toggle
    $('.t_btn').click(function(){
        $('h1').toggle("slow");
    });

    // Fade out
    $('.fo_btn').click(function(){
        $('h1').fadeOut(2000);
    });

    // Fade In
    $('.fi_btn').click(function(){
        $('h1').fadeIn(2000);
    });

    // Fade Toggle
    $('.ft_btn').click(function(){
        $('h1').fadeToggle(2000);
    });

    // Fade To
    $('.fto_btn').click(function(){
        $('h1').fadeTo('', 0.5);
    });

});
