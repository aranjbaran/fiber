// reloads the page to update the divs
function load(){
	if (typeof(Storage) !== "undefined") {
		// get the profile
		profile = JSON.parse(localStorage["profile"]);

		// update user html
		$("#name").html("Name: " +
			profile["name"]);
		$("#bday").html("Birthday: "+
			profile["bday"]);
		$("#nat_lang").html("Native Language: " +
			profile["interests"]["nat_lang"]);
		
		//update interests html
		$("#des_lang").html("Desired Language: " +
			profile["interests"]["des_lang"]);
		$("#hobby").html("Favorite Hobby: " +
			profile["interests"]["hobby"]);
		$("#book").html("Favorite Book: " +
			profile["interests"]["book"]);
		$("#sport").html("Favorite Sport: " +
			profile["interests"]["sport"]);
	}
	else{
		console.log("storage undefined!");
	}

}

// on page load display what is stored in local storage
$(document).ready(function() {
  	// load the page
  	load();
});

function edit_info(){
	// update editable
	if (typeof(Storage) !== "undefined") {
  		// get the profile
  		profile = JSON.parse(localStorage["profile"]);
		// update values inside the editable 		
		$("#name_n").val( profile["name"]);
		$("#bday_n").val( profile["bday"]);
		$("#nat_lang_n").val( profile["interests"]["nat_lang"]);
		// hide the static div and make the editable one visible
		$("#bio").hide();
		$("#edit_bio").show();
	}
	else{
		console.log("error localstorage");
	}
	
};

function save_info(){
	// check storage
	if (typeof(Storage) !== "undefined") {
  		// get the profile
  		profile = JSON.parse(localStorage["profile"]);
		// save vals to profile 		
		profile["name"] = $("#name_n").val();
		profile["bday"] = $("#bday_n").val();
		profile["interests"]["nat_lang"] = $("#nat_lang_n").val();
		console.log(profile)
		// save the profile
		localStorage["profile"] = JSON.stringify(profile);
		// re show the static stuff
		$("#bio").show();
		$("#edit_bio").hide();
		// reload the page
		load();
	}
	else{
		console.log("error localstorage");
	}
};

function edit_interests(){
	if (typeof(Storage) !== "undefined") {
  		// get the profile
  		profile = JSON.parse(localStorage["profile"]);
		// update values inside the editable 		
		$("#des_lang_n").val( profile["interests"]["des_lang"]);
		$("#hobby_n").val( profile["interests"]["hobby"]);
		$("#book_n").val( profile["interests"]["book"]);
		$("#sport_n").val( profile["interests"]["sport"]);
		// hide the static and show editable div
		$("#interests").hide();
		$("#edit_interests").show();
	}
	else{
		console.log("error localstorage");
	}
};

function save_interests(){
if (typeof(Storage) !== "undefined") {
  		// get the profile
  		profile = JSON.parse(localStorage["profile"]);
		// update values of profile		
		profile["interests"]["des_lang"] = $("#des_lang_n").val();
		profile["interests"]["hobby"] = $("#hobby_n").val();
		profile["interests"]["book"] = $("#book_n").val();
		profile["interests"]["sport"] = $("#sport_n").val();
		// save the profile
		localStorage["profile"] = JSON.stringify(profile);
		// re show the static stuff
		$("#interests").show();
		$("#edit_interests").hide();
		load();
	}
	else{
		console.log("error localstorage");
	}
};