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
        var calendar_events = [];
        var events = JSON.parse(localStorage[i])["events"];
        for (i in events) {
          res = events[i].split('__');
          calendar_events.push({title:res[1], start:res[0]});
          // $("#upcoming").append("<div class='event'>" + events[i] + "</div>");
        }
      }

      $('#calendar').fullCalendar({
        events: calendar_events,
        height: 150,
        defaultView: "basicWeek",
        weekends: false,
        columnFormat: "ddd"
      })
    }
    else {
      console.log("No Local Storage");
    }
  }

  // Load locally stored mentees and use them to update the page
  load();

});
