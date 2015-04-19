$(document).ready(function() {

  // Initialize namespace
  Mentees = {};

  var load = function() {

    if (typeof(Storage) !== "undefined") {

      // Display current number of mentees in "impact" section
      $("#num-mentees").html(localStorage.length);

      for (var i in localStorage) {
        // Only show mentees if they appear in localStorage
        $(".contact[data-id=" + i + "]").show();
      }
    }
    else {
      console.log("No Local Storage");
    }
  }

  // Load locally stored mentees and use them to update the page
  load();

});
