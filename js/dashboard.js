$(document).ready(function() {

  // Initialize namespace
  Mentees = {};

  var load = function() {

    if (typeof(Storage) !== "undefined") {

      // Display current number of mentees in "impact" section
      var num_mentees = localStorage.length - 1;
      if (num_mentees < 0) { num_mentees = 0 }
      var html = num_mentees == 1 ? "1 mentee" : num_mentees.toString() + " mentees";
      $("#num-mentees").html(html);

      var calendar_events = [];
      for (var i in localStorage) {
        // don't display the own users info
        if (i == 'profile')
          continue;
        // Only show mentees in sidebar if they appear in localStorage
        $(".contact[data-id=" + i + "]").show();

        // Load upcoming events and add to page
        var events = JSON.parse(localStorage[i])["events"];
        for (i in events) {
          res = events[i].split('__');
          calendar_events.push({title:res[1], start:res[0]});
        }
      }

      // if there are no events, prompt user to add one
      if (calendar_events.length == 0) {
        $("#dialog").dialog({
          resizable: false,
          height: 150,
          modal: true
        });
      }

      $('#calendar').fullCalendar({
        events: calendar_events,
        height: 150,
        defaultView: "basicWeek",
        weekends: false,
        columnFormat: "ddd"
      })
    
      // display the proper map
      $('#mapimg').attr("src", "img/map" + (localStorage.length - 1) + ".png");
    }
    else {
      console.log("No Local Storage");
    }
  }

  // Load locally stored mentees and use them to update the page
  load();

});
