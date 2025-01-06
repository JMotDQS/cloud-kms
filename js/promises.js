function getSectionsPromise() {
	return new Promise(function(resolve, reject) {
		$.ajax({
			url: "includes/get_sections.php",
			type: 'POST',
			cache: false,
			dataType: 'json',

			success: function (data) {
				resolve(data);
			},

			error: function(xhr, desc, err) {
				reject(false);
				consoleReporting(xhr)
				consoleReporting("Details: " + desc + "\nError:" + err);
				consoleReporting("geSectionsPromise():Something broke");
			}
		});
	});
}

/********************************************************
	User Login Promises Start
********************************************************/
function userLoginCheckPromise(param_file, param_email, param_pw) {
	return new Promise(function(resolve, reject) {
		$.ajax({
			url: "includes/" + param_file + ".php",
			type: 'POST',
			cache: false,
			dataType: 'json',
			data: {
				'email_address': param_email,
				'pass': param_pw
			},

			success: function (data) {
				resolve(data);
			},

			error: function(xhr, desc, err) {
				reject(false);
				consoleReporting(xhr)
				consoleReporting("Details: " + desc + "\nError:" + err);
				consoleReporting("userLoginCheckPromise():Something broke");
			}
		});
	});
}
/********************************************************
	User Login Promises End
********************************************************/