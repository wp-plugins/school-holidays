jQuery(document).ready(function($) {
    jQuery(".ds-input").keyup(function() {
      jQuery.get('../wp-content/plugins/school-holidays/ajax.php', {text:jQuery(".ds-input").attr("value")}, function(data) {
        jQuery(".ds-list").html(data);
        if (data != "") {
          jQuery(".ds-results").show();
          
          $.getScript('../wp-content/plugins/school-holidays/js/ajax.js');
        } else {
          jQuery(".ds-results").hide();
        }
      });
    });
});
