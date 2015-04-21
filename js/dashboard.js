$(document).ready(function() {

  // Initialize namespace
  Mentees = {};

  var load = function() {

    if (typeof(Storage) !== "undefined") {

      // Display current number of mentees in "impact" section
      $("#num-mentees").html(localStorage.length);

      for (var i in localStorage) {
        // Only show mentees in sidebar if they appear in localStorage
        $(".contact[data-id=" + i + "]").show();

        // Load upcoming events and add to page
        var events = JSON.parse(localStorage[i])["events"];
        for (i in events) {
          $("#upcoming").append("<div class='event'>" + events[i] + "</div>");
        }
      }
    }
    else {
      console.log("No Local Storage");
    }
  }

  // Load locally stored mentees and use them to update the page
  load();

});
