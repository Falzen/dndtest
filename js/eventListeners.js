
$(document).on('click', '#jouer-btn', function(ev) {
	let sectionName = ev.currentTarget.dataset.sectiontoshow;
	if(sectionName) {
		setNewSection(sectionName);
	}
});

$(document).on('click', '.tab-title', function(ev) {
	let tabName = ev.currentTarget.dataset.tabname;
	if(tabName) {
		showTab(tabName);
	}
});