"use strict"
$(function () {

    let swiper = new Swiper(".mySwiper", {
        loop: true,
    })

    let scrollSection = document.getElementById("scroll-section");
   

    window.onscroll = function() {scrollFunction()};
 
    function scrollFunction() {
      if (document.body.scrollTop > 195|| document.documentElement.scrollTop > 195) {
         scrollSection.style.top = "0";
      } else {
         scrollSection.style.top = "-200px";
         $("div").removeClass("inActive");
      }
    }
});





let dropdownBtnn= document.querySelectorAll(".dropdown-btnn")
   
dropdownBtnn.forEach( element=>{
   element.addEventListener("click", function(){
      console.log(this.nextElementSibling)
      this.nextElementSibling.classList.toggle("drop-show")
   })
  })




function openTabMenu(evt, TabMenu) {
   var i, tabcontent, tablinks;
   tabcontent = document.getElementsByClassName("tabcontent");
   for (i = 0; i < tabcontent.length; i++) {
     tabcontent[i].style.display = "none";
   }
   tablinks = document.getElementsByClassName("tablinks");
   for (i = 0; i < tablinks.length; i++) {
     tablinks[i].className = tablinks[i].className.replace(" active", "");
   }
   document.getElementById(TabMenu).style.display = "block";
   evt.currentTarget.className += " active";
 }


var swiper1 = new Swiper("#tab-menu .mySwiper1", {
   slidesPerView: 4,
   spaceBetween: 10,
   loop: true,
   autoplay: {
     delay: 4000,
   },
 });
 
 var swiper3 = new Swiper("#tab-menu .mySwiper3", {
   slidesPerView: 4,
   spaceBetween: 30,
 
 });
 
 var swiper4 = new Swiper("#tab-menu .mySwiper4", {
   slidesPerView: 4,
   spaceBetween: 30,
 });






 
 var swiper = new Swiper(".mySwiper2", {
   slidesPerView:5,
   loop:true,
   spaceBetween:20,
   autoplay:{
       delay:3000,
       disableOnInteraction:false,
   },
   breakpoints:{
       0:{
           slidesPerView:1,
       },
       550:{
           slidesPerView:2,
       },
       800:{
           slidesPerView:4,
       },
       1000:{
           slidesPerView:5,
       },
   },
   pagination:{
       el:".swiper-pagination",
       clickable:true,
   }
 });
