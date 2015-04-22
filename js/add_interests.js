// add interests to the user profile
function add_interests(){
	if (typeof(Storage) !== "undefined") {
		var profile = JSON.parse(localStorage["profile"]);
		var interests = {
			nat_lang: $("#native")[0].value,
			des_lang: $("#desired")[0].value,
			hobby: $("#hobby")[0].value,
			book: $("#book")[0].value,
			dest: $("#dest")[0].value,
			sport: $("#sport")[0].value
		};
		profile["interests"] = interests;
		localStorage.setItem("profile", JSON.stringify(profile));
	}
	else {
		console.log("Local Storage Unsupported");
	}
};