$(document).ready(function() {

  // Initialize namespace
  Mentees = {};

  var load = function() {

    if (typeof(Storage) !== "undefined") {
      for (var i in localStorage) {
        // add mentee to "Mentees" list

        // add upcoming events with mentee

        // count number of mentees and display in "impact" section
      }
    }
    else {
      console.log("No Local Storage");
    }
  }

  // Load locally stored mentees and use them to update the page
  load();

});
