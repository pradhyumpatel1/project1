// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
    $('html').removeClass('nojs');
    $('html').addClass('hasjs');
  });
  
function reset() {
  document.getElementById("FName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("date").value = "";
  document.getElementById("PN").value = "";

}