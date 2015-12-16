

$(document).ready(function() {

  if ((localStorage.getItem("current") == "rep") || (window.location.hash == "#rep")) {
    $('a.mdl-layout__tab').removeClass("is-active");
    $('a[href="#rep"]').addClass('is-active');
    $('.mdl-layout__tab-panel').removeClass('is-active');
    $('#rep').addClass('is-active');
    window.location.hash = "#rep";
  } else if ((localStorage.getItem("current") == "other") || (window.location.hash == "#other")) {
    $('a.mdl-layout__tab').removeClass("is-active");
    $('a[href="#oth"]').addClass('is-active');
    $('.mdl-layout__tab-panel').removeClass('is-active');
    $('#other').addClass('is-active');
    window.location.hash = "#other";
  } else if ((localStorage.getItem("current") == "dem") || (window.location.hash == "#dem")) {
    $('a.mdl-layout__tab').removeClass("is-active");
    $('a[href="#dem"]').addClass('is-active');
    $('.mdl-layout__tab-panel').removeClass('is-active');
    $('#dem').addClass('is-active');
    window.location.hash = "#dem";
  } else {

  }

    setInterval(function() {

      if ($("#dem").hasClass("is-active")) {
        $("header").addClass("dem");
        $("header").removeClass("rep");
        $("header").removeClass("oth");
        localStorage.setItem("current", "dem");
        window.location.hash = "#dem";
      } else if ($("#rep").hasClass("is-active")) {
        $("header").addClass("rep");
        $("header").removeClass("dem");
        $("header").removeClass("oth");
        localStorage.setItem("current", "rep");
        window.location.hash = "#rep";
      } else if ($("#other").hasClass("is-active")) {
        $("header").addClass("oth");
        $("header").removeClass("dem");
        $("header").removeClass("rep");
        localStorage.setItem("current", "other");
        window.location.hash = "#other";
      } else {
        $("header").removeClass("dem");
        $("header").removeClass("rep");
        $("header").removeClass("oth");
      }
    }, 100);


  $("#popup").click(function() {
    //compare function
  });

  var table = document.querySelector('table');
  var headerCheckbox = table.querySelector('thead .mdl-data-table__select input');
  var boxes = table.querySelectorAll('tbody .mdl-data-table__select');
  var headerCheckHandler = function(event) {
    if (event.target.checked) {
      for (var i = 0, length = boxes.length; i < length; i++) {
        boxes[i].MaterialCheckbox.check();
      }
    } else {
      for (var i = 0, length = boxes.length; i < length; i++) {
        boxes[i].MaterialCheckbox.uncheck();
      }
    }
  };
  headerCheckbox.addEventListener('change', headerCheckHandler);
});
