Mentee = {}

$(document).ready(function() {

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

        Mentee = JSON.parse(localStorage[i]);

        // Only show mentees in sidebar if they appear in localStorage
        $(".contact[data-id=" + i + "]").show();
        $(".mentee[data-id=" + i + "]").show();
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
          height: 350,
          width: 350,
          modal: true
        });

        // hide hangout button
        $("#chatroom").html("<p>Schedule an event with one of your mentees first!</p>");
      }

      $("#mentee-replace").html(Mentee.name);
      $("#mentee-replace").attr("data-name", Mentee.name);
      $("#mentee-replace").attr("data-id", Mentee.id);

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

// create an event when the event create button is clicked on the initial popup
function create_event(){

  $("#dialog").dialog("close");

  var id = $("#mentee-replace").attr("data-id");
  var name = $("#mentee-replace").attr("data-name");
  var time = $("#time").val();
  var event = {title:name, start:time}
  $('#calendar').fullCalendar("renderEvent", event);

  profile = JSON.parse(localStorage[id]);
  evnt = time + "__" + name;
  profile["events"].push(evnt);
  localStorage[id] = JSON.stringify(profile)

  location.reload();
}

// display the note/select mentee after hangout button
// has been pressed
function display_select(){
  // 
  $("#select_mentee").dialog({
    resizable: false,
    height: 350,
    width: 350,
    modal: true
  });
}

// display the note after hangout button has been pressed
function display_note(){
  // display the next box after user is selected
  var name = $("input:radio[name='m']:checked").closest(".mentee").attr("data-name");
  $("#mentee_note").html(name);
  $("#add_note").dialog({
    resizable: false,
    height: 350,
    width: 350,
    modal: true
  });
}

// add the note to the selected mentee
function create_note(){
  // get the person clicked
  var id = $("input:radio[name='m']:checked").closest('.mentee').attr("data-id");
  var person = JSON.parse(localStorage[id]);
  var note = $("#note_text").val();
  $("#note_text").val("");
  person["notes"].push(note);
  localStorage[id] = JSON.stringify(person);

  // close dialogs
  $("#select_mentee").dialog("close");
  $("#add_note").dialog("close");
}