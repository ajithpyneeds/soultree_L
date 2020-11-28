// ########################## Start ############################
// Specifications and Brands
function specFunc() {
    var btn = document.getElementById('btnFlex');
    var specDescrip = document.getElementById('specsBrands');
    if (specDescrip.style.display === 'none') {
      specDescrip.style.display = 'block';
      specDescrip.classList.add('animate__slideInRight');
      specDescrip.classList.remove('animate__slideOutUp');
    } else {
      specDescrip.style.display = 'none';
      specDescrip.classList.remove('animate__slideInRight');
      specDescrip.classList.add('animate__slideOutUp');
    }
  }
// ########################## End ############################

  