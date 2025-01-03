<!doctype html>

<html>
	<head>
		<meta charset="utf-8"/>	
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no">
		<meta http-equiv="X-UA-Compatible" content="IE=11" />

		<title>Cloud DQS-KMS</title>

	<!-- Custom CSS -->
		<link rel="stylesheet" href="css/index.css">
		<link rel="stylesheet" href="css/navbar.css">
		<!--<link rel="stylesheet" href="css/custom.css">
		<link rel="stylesheet" href="css/dialog.css">
		<link rel="stylesheet" href="css/dialogUser.css">
		<link rel="stylesheet" href="css/dialogLogin.css">
		<link rel="stylesheet" href="css/dialogUpdatePassword.css">
		<link rel="stylesheet" href="css/dialogBulkAddUser.css">-->

	</head>

	<body id="home">
		<nav id="nav">
			<div class="nav-logo-container">
				<img src="images/DQS_logo.svg" id="logo-header" class="nav-logo" data-page='kms' alt="" />
			</div>
			<ul class="nav-links">
				<a class="navbar-item navbar-link" data-page="kms" onclick="loadTemplate(this.dataset.page)">KMS</a>
				<li class="navbar-item nav-item-divider">|</li>
				<a class="navbar-item navbar-link" data-page="docs" onclick="loadTemplate(this.dataset.page)">Docs</a>
				<li class="navbar-item nav-item-divider">|</li>
			</ul>
		</nav>
		<div id="app" class="main-container">
			<div id="card-template-container" class="invisible grid-container disable-hover"></div>
		</div>

		<dialog id="dialog_user" class="g_dialog dialog_user"></dialog>
		<dialog id="dialog_login" class="g_dialog dialog_login"></dialog>
		<dialog id="dialog_add_admin" class="g_dialog dialog_add_admin"></dialog>
		<dialog id="dialog_bulk_add_user" class="g_dialog dialog_bulk_add_user"></dialog>

	<!-- JQuery CDN -->
		<script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>

	<!-- Latest compiled Font Awesome JavaScript -->
		<script defer src="https://use.fontawesome.com/releases/v5.0.13/js/all.js" integrity="sha384-xymdQtn1n3lH2wcu0qhcdaOpQwyoarkgLVxC/wZ5q7h9gHtxICrpcaSUfygqZGOe" crossorigin="anonymous"></script>

	<!-- Custom JavaScript -->
		<script src="js/variables.js"></script>
		<script src="js/promises.js"></script>
		<script src="js/templates.js"></script>
		<!--<script src="js/kms.js"></script>-->
		<script src="js/kmsTemplate.js"></script>
		<script src="js/checkinTemplate.js"></script>
		<script src="js/index.js"></script>
		<!--<script src="js/urlRouter.js"></script>
		<script src="js/custom.js"></script>
		<script src="js/users.js"></script>
		<script src="js/itemAssociation.js"></script>
		<script src="js/reports.js"></script>
		<script src="js/dialogUser.js"></script>
		<script src="js/dialogLogin.js"></script>
		<script src="js/dialogAddAdmin.js"></script>
		<script src="js/dialogUpdatePassword.js"></script>
		<script src="js/dialogBulkAddUser.js"></script>-->
	</body>
</html>