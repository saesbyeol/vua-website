const subheader = "#subheader";

// SLOW LOAD NEW HEADER PARTS ON ABOUT US PAGE
$(function(){
    setTimeout(() => {
        console.log($(subheader))
        $(subheader).load("../../components/_subheader.html"); 
    }, 100);
});