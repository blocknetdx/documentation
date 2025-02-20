document.addEventListener("DOMContentLoaded", function() {
	// adds target=_blank to https and pdf links so they open in a new tab
	var links = document.getElementsByTagName('a');
	for (var i = 0; i < links.length; i++) {
		// open external links and pdfs in new tab
		if (/^(https?:)?\/\/|(\.pdf)/.test(links[i].getAttribute('href'))) {
			links[i].target = '_blank';
		}
		// open docs index in same tab
		if (/^(https?:\/\/docs\.blocknet\.org\/?)$/.test(links[i].getAttribute('href'))) {
			links[i].target = '_self';
		}
	}
});