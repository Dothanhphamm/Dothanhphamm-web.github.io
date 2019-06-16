$(document).ready(function() {
        // Transition effect for navbar 
        $(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
          if($(this).scrollTop() > 500) { 
              $('.navbar').addClass('solid');
          } else {
              $('.navbar').removeClass('solid');
          }
        });
});




document.addEventListener("DOMContentLoaded",function(){
	var nut = document.querySelectorAll('div.nut ul li');
	// truy xuat phan tu cac nut
	var slide = document.querySelectorAll('.slide ul li');
	// truy xuat phan tu cac slide
	for(var i = 0; i < nut.length; i++){
		nut[i].addEventListener('click',function(){
			for(var i = 0; i < slide.length; i++  )
			{
				slide[i].classList.remove('hienra');
				// Bo cac class hien ra
			}

			var idcuaslide = this.getAttribute('data-tendata');
			// Lay id cua tung slide bang thuoc tinh data cua html 5;
			var slidenay = document.getElementById(idcuaslide);
			slidenay.classList.add('hienra');
		})
	}
},false)



/* MAILCHIMP  */
function showMailingPopUp() {
    require(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us11.list-manage.com","uuid":"YOUR_UUID_GOES_HERE","lid":"YOUR_LID_GOES_HERE"}) })
    document.cookie = "MCEvilPopupClosed=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
};

document.getElementById("open-popup").onclick = function() {showMailingPopUp()};