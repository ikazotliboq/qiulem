function changeTab(tabIndex) {
      var tabButtons = document.getElementsByClassName('tabs-button1');
      var tabPanes = document.getElementsByClassName('tabs-pane1');
  
      for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove('active1');
        tabPanes[i].classList.remove('active1');
        
      }
  
      tabButtons[tabIndex].classList.add('active1');
      tabPanes[tabIndex].classList.add('active1');
  
      if (tabIndex === 0) {
        AOS.refresh();

      } else if (tabIndex === 1) {
        AOS.refresh();
      }
    }



function readm() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Tampilkan semua";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Tampilkan sedikit";
    moreText.style.display = "inline";
  }
}

function readm1() {
  var dots = document.getElementById("dots1");
  var moreText = document.getElementById("more1");
  var btnText = document.getElementById("myBtn1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Tampilkan semua";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Tampilkan sedikit";
    moreText.style.display = "inline";
  }
}