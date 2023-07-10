window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    var btnGoToTop = document.getElementById("btn-goto-top");
    
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      btnGoToTop.style.display = "block";
    } else {
      btnGoToTop.style.display = "none";
    }
  }
  
  function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  