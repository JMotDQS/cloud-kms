function checkinTemplate(param_template) {
	var temp_html = '';
	temp_html += `<div>
					<div class="card inset-container">
						<label for="vin">VIN:</label>
						<input id="vin" name="vin" type="text" />
						<p id="vin-feedback"></p>
					</div>

					<div class="card inset-container disable-input">
						<label for="slot">Slot:</label>
						<input id="slot" name="slot" type="text" />
					</div>
				</div>

				<div>
					<div class="card inset-container">
						<h3>Available Slots by Case</h3>
					</div>
				</div>`;
	
	makeVisible('card-template-container');
	return temp_html;
}