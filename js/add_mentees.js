$(document).ready(function() {

  // Initialize namespace
  Mentees = {};

  var load = function() {

    if (typeof(Storage) !== "undefined") {
      for (var i in localStorage) {
        // remove mentees that already appear in localStorage from list of add-able mentees
      }
    }
    else {
      console.log("No Local Storage");
    }
  }

  // add event handler for adding new mentees to localStorage

  // Load locally stored mentees and use them to update the page
  load();

});
