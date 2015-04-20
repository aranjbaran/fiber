$(document).ready(function() {

  var load = function() {

    if (typeof(Storage) !== "undefined") {

      // get id of current page
      var id = $("#content-main").attr("data-id");
      console.log(id)

      // index into local storage using id of current page
      var notes = JSON.parse(localStorage[id])["notes"]

      // iterate through notes and display on page
      for (var i = 0; i < notes.length ; i++){
        $("#notes").append("<div>"+ notes[i] +"</div>")
      }
      
    }
    else {
      console.log("No Local Storage");
    }
  }

  // Load locally stored mentees and use them to update the page
  load();

});

// saves a new note to local storage and adds the note
function add_note() {
  // add new notes
  var note = prompt("Enter Your Note", "Today...");
  if (note != null){
    $("#notes").append("<div>"+ note +"</div>")
    // save new note
    if (typeof(Storage) !== "undefined") {
      var id = $("#content-main").attr("data-id")
      var profile = JSON.parse(localStorage[id])
      profile["notes"].push(note)
      localStorage[id] = JSON.stringify(profile)
    }
  }
} 
        