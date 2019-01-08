document.addEventListener("DOMContentLoaded", function() {
	// adds target=_blank to https links so they open in a new tab
	var links = document.getElementsByTagName('a');
	for (var i = 0; i < links.length; i++) {
		if (/^(https?:)?\/\/|(\.pdf)/.test(links[i].getAttribute('href'))) {
			links[i].target = '_blank';
		} else if (/^(http?:)?\/\//.test(links[i].getAttribute('href'))) {
			links[i].target = '_blank';
		}
	}
});