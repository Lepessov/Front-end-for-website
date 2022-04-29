

$(document).ready(function() {
    $(window).scroll(function(){
    
        if ($(this).scrollTop() > 10) {
           $('.tablichka').addClass('active');
        } else {
            $('.tablichka').removeClass('active');
        }
        
        if($(this).scrollTop() > 800)  {
            $('.tablichka1').addClass('active');
        }else {
            $('.tablichka1').removeClass('active');
        }
    
        if($(this).scrollTop() > 1600)  {
            $('.tablichka2').addClass('active');
        }else {
            $('.tablichka2').removeClass('active');
        }
    
        if($(this).scrollTop() > 2000)  {
            $('.tablichka3').addClass('active');
        }else {
            $('.tablichka3').removeClass('active');
        }
    
        if($(this).scrollTop() > 2800)  {
            $('.tablichka4').addClass('active');
        }else {
            $('.tablichka4').removeClass('active');
        }
        
        // end of animation
    
        if ($(this).scrollTop() > 2000) {
            $('.vid1').addClass('active1');
            $('.vid2').addClass('active1');
         } else {
             $('.vid1').removeClass('active1');
             $('.vid2').removeClass('active1');
         }
    
    
        if($(this).scrollTop() > 900)  {
            $('.comment').addClass('active2');
        }else {
            $('.comment').removeClass('active2');
        }
    
        if($(this).scrollTop() > 800)  {
            $('.client-info').addClass('active3');
        }
    
        
        
    });
    });