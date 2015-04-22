// add a user to local storage
// there is no error checking as of now (change?)
function add_user() {
	if (typeof(Storage) !== "undefined") {
		// get info from html and make profile object
		var profile = {
			first: $("#firstname")[0].value,
			middle: $("#middlename")[0].value,
			last:$("#lastname")[0].value,
			bday: $("#birth")[0].value,
			interests: []
		};
		// update local storage
		localStorage.setItem("profile", JSON.stringify(profile));
	}
	else {
		console.log("Local Storage Unsupported")
	}

};