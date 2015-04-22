$(document).ready(function() {

  var load = function() {

    if (typeof(Storage) !== "undefined") {

      // get id of current page
      var id = $("#content-main").attr("data-id");

      // index into local storage using id of current page
      var events = JSON.parse(localStorage[id])["events"]

      // iterate through notes and display on page
      for (var i = 0; i < events.length ; i++){
        $("#events").append("<li>"+ events[i] +"</li>")
      }
      
    }
    else {
      console.log("No Local Storage");
    }
  }

  // Load locally stored mentees and use them to update the page
  load();

});

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

  evnt = $("#time").val() + "__Conversation with " + profile["name"];

  evnt = $("#time").val() + "__" + profile["name"];

  profile["events"].push(evnt);
  localStorage[id] = JSON.stringify(profile)

  // update view
  $("#events").append("<li>"+ evnt +"</li>")
  $("#create_event").hide();
  $("#new_event").show();
}
