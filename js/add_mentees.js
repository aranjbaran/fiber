$(document).ready(function() {

  // Initialize namespace
  Mentees = {};

  var load = function() {

    if (typeof(Storage) !== "undefined") {

      for (var i in localStorage) {
        // remove mentees that already appear in localStorage from list of add-able mentees
        $(".mentee[data-id=" + i + "]").remove()
      }

    }
    else {
      console.log("No Local Storage");
    }
  }

  // Event handler for adding new mentees to localStorage
  $(".check_mentee").change(function() {
    var mentee_id = $(this).closest('.mentee').attr("data-id");
    if (this.checked) {
      localStorage.setItem(mentee_id, mentee_id);
    }
    else {
      localStorage.removeItem(mentee_id);
    }
  });

  // Load locally stored mentees and use them to update the page
  load();

});