function setIndexContent() {
	getSectionsPromise().then((resolve) => {
		var temp_html = '';
		if(resolve['conn']) {
			resolve['sections'].forEach(section => {
				var cur_section = section.section.replaceAll(' ','').toLowerCase();
				temp_html += `<div id="${section.pk_id}" class="card ${'card-' + cur_section}" data-page="${cur_section}" onclick="sectionClick(this.dataset.page)">`;
					temp_html += `<h1>${section.section}</h1>`;
					temp_html += `<p class="card-body">${section.body_copy}</p>`;
					temp_html += `<p class="card-icon"><i class="${section.icon}"></i></p>`;
				temp_html += `</div>`;
			});
		} else {
			temp_html = `<h2>${g_CONNECTION_ERROR_COPY}</h2>`;
		}
		document.getElementById("kms").innerHTML = temp_html;
	}).catch(function(reject) {
		consoleReporting(reject);
	}).finally(function() {
		consoleReporting("Moving On.");
	});
}

function sectionClick(data) {
	loadPage(data);
}