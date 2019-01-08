document.addEventListener("DOMContentLoaded", function() {
	// adds target=_blank to https links so they open in a new tab
	var links = document.getElementsByTagName('a');
	for (var i = 0; i < links.length; i++) {
		// open docs index in same tab
		if (/^(https?:\/\/docs\.blocknet\.co\/?)$/.test(links[i].getAttribute('href'))) {
			return;
		// open external links and pdfs in new tab
		} else if (/^(https?:)?\/\/|(\.pdf)/.test(links[i].getAttribute('href'))) {
			links[i].target = '_blank';
		}
	}
});