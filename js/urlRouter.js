/*const navClick = (data) => {
	console.log("data:", data);
	console.log("data.target:", data.target);
	console.log("data.dataset.route:", data.dataset.route);

	window.history.pushState({}, "", data.dataset.route);
	urlLocationHandler(data.dataset.route);
}

const cardClick = (data) => {
	console.log("data.dataset.route:", data.dataset.route);
}*/

const urlClick = (data) => {
	//window.history.pushState({}, "", data.dataset.route);
	urlLocationHandler(data.dataset.route);
}

/*document.addEventListener("click", (e) => {
	console.log("e:", e);
	const {target} = e;
	if(!target.matches("navbar-link")) {
		return;
	}
	e.preventDefault();
	urlRouter();
});*/

const urlRoutes = {
	404: {
		page: "/cloud-kms/pages/app/404",
		title: "404 Error: We lost the page, Oh No!",
		description: "File not found error page"
	},
	"/": {
		page: "index",
		title: "Welcome Home(Sanitarium)",
		description: "Where it all begins"
	},
	"labels": {
		page: "labels",
		title: "Labels &amp; Stuff",
		description: "For all your label printing needs"
	},
	"checkin": {
		page: "checkin",
		title: "Key Check In",
		description: "Gotta check em all"
	},
	"checkout": {
		page: "checkout",
		title: "Key CHeck Out",
		description: "Get em out...Shoo Shoo Shoo"
	}
}

/*const urlRouter = (event) => {
	event = event || window.event;
	event.preventDefault();
	window.history.pushState({}, "", event.target.href);
	urlLocationHandler();
}*/

const urlLocationHandler = async (param_location) => {
	var location = window.location.pathname;
	//if(location.length == 1) {
	if(location.length == 1) {
		location = "/cloud-kms/";
	}
	console.log("urlLocationHandler:param_location:", param_location);
	console.log("urlLocationHandler:location:", location);
	//window.history.pushState({}, "", location);

	const route = urlRoutes[param_location] || urlRoutes[404];
	console.log("urlLocationHandler():route.page:", route.page);
	loadPage(route.page);
}