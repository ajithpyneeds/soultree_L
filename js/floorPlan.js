// ########################## Start #############################
// floor plan tab functions
function serenityFunc(evt,blocks) {
    var i, planView, tablinks;
    planView = document.getElementsByClassName("tabcontent");
    for (i = 0; i < planView.length; i++) {
      planView[i].style.display = "none";
      planView[i].className = "planView tabcontent hidden";
  
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("active-spec", " ");
    }
    document.getElementById(blocks).style.display = "block";
    document.getElementById(blocks).className = "planView tabcontent";
    evt.currentTarget.className += " active-spec";
  }
// ########################## End ############################

// ########################## Start #############################
// floor plan fiter
var serenityBHKS = 1
var serenityFACES = 'east'
var serenityBLOCKS = 'A'

function serenityFloorFunction(elmnt, id) {
    // console.log(id)
    // alert(id)
    if (id == "serenity1BHK"){
        document.getElementById(id).classList.add('active');
        if ( document.getElementById("serenity2BHK").classList.contains('active') ) {
            document.getElementById("serenity2BHK").classList.remove('active')
        }
        if ( document.getElementById("serenity3BHK").classList.contains('active') ) {
            document.getElementById("serenity3BHK").classList.remove('active')
        }
        serenityBHKS = 1
    }
    if (id == "serenity2BHK"){
        document.getElementById(id).classList.add('active');
        if ( document.getElementById("serenity1BHK").classList.contains('active') ) {
            document.getElementById("serenity1BHK").classList.remove('active')
        }
        if ( document.getElementById("serenity3BHK").classList.contains('active') ) {
            document.getElementById("serenity3BHK").classList.remove('active')
        }
        serenityBHKS = 2
    }
    if (id == "serenity3BHK"){
        document.getElementById(id).classList.add('active');
        if ( document.getElementById("serenity2BHK").classList.contains('active') ) {
            document.getElementById("serenity2BHK").classList.remove('active')
        }
        if ( document.getElementById("serenity1BHK").classList.contains('active') ) {
            document.getElementById("serenity1BHK").classList.remove('active')
        }
        serenityBHKS = 3
    }
    simpAnother()
    // alert(serenityBHKS)
    // document.getElementById(id).classList.add('active');
    // document.getElementById("demo").innerHTML = "Hello World";
  }

  function serenityFaceFunction(elmnt) {
    serenityFACES = document.getElementById("serenitySelectFacing").value;
    // alert(serenityFACES)
    simpAnother()
  }

  function serenityBlockFunction(elmnt) {
    serenityBLOCKS = document.getElementById("serenitySelectBlock").value;
    // alert(serenityFACES)
    simpAnother()
  }

  function simpAnother(){
      console.log(serenityBHKS,serenityFACES,serenityBLOCKS)
  }
// ########################## End ############################



// ########################## Start ############################
// carousel images modal #################################################
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var img2 = document.getElementById("myImg2");
var img3 = document.getElementById("myImg3");
var img4 = document.getElementById("myImg4");
var img5 = document.getElementById("myImg5");
var img6 = document.getElementById("myImg6");
var img7 = document.getElementById("myImg7");
var img8 = document.getElementById("myImg8");
var img9 = document.getElementById("myImg9");
var img10 = document.getElementById("myImg10");
var img11 = document.getElementById("myImg11");
var img12 = document.getElementById("myImg12");
var img13 = document.getElementById("myImg13");
var img14 = document.getElementById("myImg14");
var img15 = document.getElementById("myImg15");
var img16 = document.getElementById("myImg16");
var img17 = document.getElementById("myImg17");
var img18 = document.getElementById("myImg18");
var img19 = document.getElementById("myImg19");
var img20 = document.getElementById("myImg20");
var img21 = document.getElementById("myImg21");
var img22 = document.getElementById("myImg22");
var img23 = document.getElementById("myImg23");
var img24 = document.getElementById("myImg24");


var img25 = document.getElementById("myImg25");
var img26 = document.getElementById("myImg26");
var img27 = document.getElementById("myImg27");
var img28 = document.getElementById("myImg28");
var img29 = document.getElementById("myImg29");
var img30 = document.getElementById("myImg30");
var img31 = document.getElementById("myImg31");
var img32 = document.getElementById("myImg32");
var img33 = document.getElementById("myImg33");
var img34 = document.getElementById("myImg34");
var img35 = document.getElementById("myImg35");
var img36 = document.getElementById("myImg36");
var img37 = document.getElementById("myImg37");
var img38 = document.getElementById("myImg38");
var img39 = document.getElementById("myImg39");
var img40 = document.getElementById("myImg40");
var img41 = document.getElementById("myImg41");
var img42 = document.getElementById("myImg42");
var img43 = document.getElementById("myImg43");
var img44 = document.getElementById("myImg44");
var img45 = document.getElementById("myImg45");
var img46 = document.getElementById("myImg46");
var img47 = document.getElementById("myImg47");
var img48 = document.getElementById("myImg48");
var img49 = document.getElementById("myImg49");
var img50 = document.getElementById("myImg50");
var img51 = document.getElementById("myImg51");
var img52 = document.getElementById("myImg52");
var img53 = document.getElementById("myImg53");
var img54 = document.getElementById("myImg54");
var img55 = document.getElementById("myImg55");
var img56 = document.getElementById("myImg56");
var img57 = document.getElementById("myImg57");
var img58 = document.getElementById("myImg58");
var img59 = document.getElementById("myImg59");
var img60 = document.getElementById("myImg60");
var img61 = document.getElementById("myImg61");
var img62 = document.getElementById("myImg62");
var img63 = document.getElementById("myImg63");
var img64 = document.getElementById("myImg64");
var img65 = document.getElementById("myImg65");
var img66 = document.getElementById("myImg66");
var img67 = document.getElementById("myImg67");
var img68 = document.getElementById("myImg68");
var img69 = document.getElementById("myImg69");
var img70 = document.getElementById("myImg70");
var img71 = document.getElementById("myImg71");
var img72 = document.getElementById("myImg72");
var img73 = document.getElementById("myImg73");
var img74 = document.getElementById("myImg74");
var img75 = document.getElementById("myImg75");
var img76 = document.getElementById("myImg76");
var img77 = document.getElementById("myImg77");
var img78 = document.getElementById("myImg78");
var img79 = document.getElementById("myImg79");


var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

img2.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

img3.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

img4.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

img5.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

img6.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

img7.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

img8.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

img9.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

img10.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img11.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img12.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img13.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img14.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img15.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img16.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img17.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img18.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img19.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img20.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img21.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img22.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img23.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img24.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img25.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img26.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img27.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img28.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img29.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img30.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img31.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img32.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img33.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img34.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img35.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img36.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img37.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img38.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img39.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img40.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img41.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img42.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img43.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img44.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img45.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img46.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img47.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img48.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img49.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img50.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img51.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img52.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img53.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img54.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img55.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img56.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img57.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img58.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img59.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img60.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img61.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img62.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img63.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img64.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img65.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img66.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img67.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img68.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img69.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img70.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img71.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img72.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img73.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img74.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img75.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img76.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img77.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img78.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img79.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
// ########################## End ############################
