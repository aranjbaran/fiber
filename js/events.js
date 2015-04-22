$(document).ready(function() {

  // Load locally stored mentees and use them to update the page
  load();

});

var load = function() {

  if (typeof(Storage) !== "undefined") {

    // get id of current page
    var id = $("#content-main").attr("data-id");

    // index into local storage using id of current page
    var events = JSON.parse(localStorage[id])["events"]

    // iterate through notes and display on page
    var calendar_events = [];
    for (var i = 0; i < events.length ; i++){
      res = events[i].split('__');
      calendar_events.push({title:res[1], start:res[0]});
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

// show the form to add a new event
function show() {
  $("#create_event").show();
  $("#new_event").hide();
  }

function create_event(){
  // get name of person
  // add all the info to local storage
  var id = $("#content-main").attr("data-id");
  profile = JSON.parse(localStorage[id]);
  evnt = $("#time").val() + "__" + profile["name"];
  profile["events"].push(evnt);
  localStorage[id] = JSON.stringify(profile)

  // update view
  $("#create_event").hide();
  $("#new_event").show();

  var res = evnt.split('__');
  var event = {title:res[1], start:res[0]}
  $('#calendar').fullCalendar("renderEvent", event);
}
