// ########################## Start ############################
// Get the modal Download Brochure
var modalForm = document.getElementById("myModalForm");

// Get the button that opens the modal
var btnForm = document.getElementById("myBtn");
var btnFormMob = document.getElementById("myBtnMob");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btnForm.onclick = function() {
  modalForm.style.display = "block";
}

btnFormMob.onclick = function() {
  modalForm.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalForm) {
    modalForm.style.display = "none";
  }
}
// ########################## End ############################





// ########################## Start ############################
// onscroll snap sticky navbar 
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    document.getElementById("navbar").style.marginTop = "-4.84vw";
    document.getElementById("navbar2").style.marginTop = "-4.84vw";
    // document.getElementById("dropdown-content").style.marginTop = "4.84vw";
    document.getElementById("navbarM").style.marginTop = "-18vw";
    document.getElementById("navbar2M").style.marginTop = "-18vw";
    // document.getElementById("dropdown-contentM").style.marginTop = "18vw";
    document.getElementById("getInTouchId").style.marginTop = "16vw";
  }
   else {
    document.getElementById("navbar").style.marginTop = "0";
    document.getElementById("navbar2").style.marginTop = "4.84vw";
    // document.getElementById("dropdown-content").style.marginTop = "0vw";
    document.getElementById("navbarM").style.marginTop = "0";
    document.getElementById("navbar2M").style.marginTop = "18vw";
    // document.getElementById("dropdown-contentM").style.marginTop = "0vw";
    document.getElementById("getInTouchId").style.marginTop = "5vw";
  }
}
// ########################## End ############################


// ########################## Start ############################
// menu-pages active function 
function menuFunc(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  // tabcontent = document.getElementsByClassName("tabcontent");
  // for (i = 0; i < tabcontent.length; i++) {
  //   tabcontent[i].style.display = "none";
  // }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks-menu");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active-menu", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active-menu";
}
// ########################## End ############################


// ########################## Start ############################
// Hamburger Menu working 
var btn = $('.btn11');

btn.on('click', function() {
$(this).toggleClass('active');
$(this).toggleClass('not-active');
});

$(document).ready(function() {
$('.box').on('click', function() {
$(this).toggleClass('active');
$('.top-nav').toggleClass('open');
});

$('.top-nav .nav-link').on('click', function() {
$('.btn11').toggleClass('not-active');
$('.top-nav').toggleClass('open');
});

$('nav a[href*="#"]').on('click', function() {
$('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top - 100
}, 2000);
});

$('#up').on('click', function() {
$('html, body').animate({
    scrollTop:0
}, 2000);
});
});
// ########################## End ############################


// ########################## Start ############################
// GetInTouch Function
        function getInTouch() {
            var touch = document.getElementById('getInTouchId');
            if (touch.style.display === 'none') {
                touch.style.display = 'block';
                touch.style.transition = '1s';
            } else {
                touch.style.display = 'none';
                touch.style.transition = '1s';
            }
        }
// ########################## End ############################

// ########################## Start ############################
// gsap navbar transition loading
gsap.timeline(".welcome h1", {
  ScrollTrigger: ".welcome h1",
  x: 150,
  duration: 1
});


TweenMax.from('.logo', 1, {
delay: 0.2,
opacity: 0,
y: 20,
ease: Expo.easeInOut
})

TweenMax.staggerFrom('.social-icons ul li .fa-facebook-f', 1, {
delay: 0.3,
opacity: 0,
y: 20,
ease: Expo.easeInOut
},)

TweenMax.staggerFrom('.social-icons ul li .fa-instagram', 1, {
delay: 0.35,
opacity: 0,
y: 20,
ease: Expo.easeInOut
},)

TweenMax.staggerFrom('.social-icons ul li .fa-linkedin-in', 1, {
delay: 0.4,
opacity: 0,
y: 20,
ease: Expo.easeInOut
},)

TweenMax.staggerFrom('.social-icons ul li .fa-twitter', 1, {
delay: 0.45,
opacity: 0,
y: 20,
ease: Expo.easeInOut
},)

TweenMax.from('.box', 1, {
y: 20,
delay: 0.4,
opacity: 0,
ease: Expo.easeInOut
});

TweenMax.from('#Exp-explore', 1, {
y: 20,
delay: 0.5,
opacity: 0,
ease: Expo.easeInOut
});

TweenMax.from('#Mplan', 1, {
y: 20,
delay: 0.6,
opacity: 0,
ease: Expo.easeInOut
});

TweenMax.from('#Gall-gallery', 1, {
y: 20,
delay: 0.7,
opacity: 0,
ease: Expo.easeInOut
});

TweenMax.from('#Amne', 1, {
y: 20,
delay: 0.8,
opacity: 0,
ease: Expo.easeInOut
});

TweenMax.from('#Cont', 1, {
y: 20,
delay: 0.9,
opacity: 0,
ease: Expo.easeInOut
});

TweenMax.from('.call, .num',  1, {
y: 20,
delay: 1,
opacity: 0,
ease: Expo.easeInOut
});

TweenMax.from('.numM',  1, {
y: 20,
delay: 1,
opacity: 0,
ease: Expo.easeInOut
});

TweenMax.from('.dropbtn', 1, {
y: 20,
delay: 1.1,
opacity: 0,
ease: Expo.easeInOut
});
// ########################## End ############################

// Smooth Scroll Start
$("a[href^='#']").click(function(e) {
	e.preventDefault();
	
    var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	} /* speed */ );
});
// Smooth Scroll End

// Animation On Scroll
AOS.init({
  easing: 'ease',
  duration: 500,
  once: false
})



