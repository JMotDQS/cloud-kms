function loadPage(param_template, param_element = 'app') {
	var temp_dir = "";
	temp_dir = `pages/${param_element}/${param_template}.html?nc=${(Math.random() * 1000000)}`

	$('#' + param_element).load(temp_dir,
		function(responseTxt, statusTxt, xhr) {
			switch(statusTxt) {
				case "success":
					pageCheck(param_template);
					break;

				case "error":
					break;
			}
	});
}
function loadDialog(param_template, param_template_dir, param_load_ele, param_user_id = 0) {
	var temp_dir = "pages/" + param_template_dir + "/";
	if (param_template != '') {
		temp_dir += param_template + ".html?nc=" + (Math.random() * 1000000);

		$('#' + param_load_ele).load(temp_dir,
			function(responseTxt, statusTxt, xhr) {
				switch(statusTxt) {
					case "success":
						pageCheck(param_template, param_user_id);
						break;

					case "error":
						break;
				}
		});
	}
}
function pageCheck(param_page, param_user_id) {
	clearTimer(g_TIMER);

	switch(param_page) {
		case "kms":
			setIndexContent();
			break;

		case "checkin":
			setFocus('vin');
			toggleDisabled('slot', true);
			setKeyEvents(param_page, 'vin');
			setKeyEvents(param_page, 'slot');
			break;
		
		case "addUser":
			buildCompanyDropdown('dialog_user_company');
			openDialogUser(g_NO_SEARCH_RESULTS);
			break;

		case "itemAssociation":
			openDialogUser();
			setKeyEvents(param_page, 'dialog_user_location_id');
			$('#dialog_user_asso_button').on('click', recordAssociation);
			break;

		case "login":
			LOGIN_DIALOG.showModal();
			document.getElementById('dialog-login-form-button').addEventListener('click', () => {
				userLoginCheck();
			});
			document.getElementById('dialog-login-grid').addEventListener('keydown', (event) => {
				if(event.key === 'Enter') {
					userLoginCheck();
				}
			});
			break;

		case "passwordUpdate":
			setKeyEvents(param_page, 'update_password', .5);
			setKeyEvents(param_page, 'update_password_conf', .5);
			toggleDisabled('#dialog-password-update-form-button', true);
			document.getElementById('dialog-password-update-form-button').classList.add('button-disabled');
			document.getElementById('update_password').focus();
			document.getElementById('dialog-password-update-form-button').addEventListener('click', () => {
				updatePasswordCheck();
			});
			document.getElementById('dialog-password-grid').addEventListener('keydown', (event) => {
				if(event.key === 'Enter' && !checkIfDisabled('dialog-password-update-form-button')) {
					updatePasswordCheck();
				}
			});
			break;

		case "addAdmin":
			setKeyEvents(param_page, 'add-admin_email', .5);
			toggleDisabled('#dialog-add-admin-form-button', true);
			document.getElementById('dialog-add-admin-form-button').classList.add('button-disabled');
			document.getElementById('dialog-add-admin-form-button').addEventListener('click', () => {
				validateEmail(param_user_id);
			});
			document.getElementById('dialog-add-admin-grid').addEventListener('keydown', (event) => {
				if(event.key === 'Enter') {
					validateEmail(param_user_id);
				}
			});
			ADD_ADMIN_DIALOG.showModal();
			break;

		case "bulkAddUser":
			buildCompanyDropdown('dialog_bulk_add_user_company');
			document.getElementById('dialog-bulk-add-user-button').addEventListener('click', () => {
				sendBulkAddUserData();
			});

			setdialogBulkAddUserEventListenerAssociations();
			BULK_ADD_USER_DIALOG.showModal();
			break;
	}
}