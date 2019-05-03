## Related Links



<div id="related">
	
</div>



<script type="text/javascript">
	var relatedHTML = "<ul>";

	// check if related links provide
	if (typeof variable !== 'undefined' && relatedLinks.length > 0) {
		// related links provided, loop through them
		for (let i = 0; i < relatedLinks.length; i++) {
			// create a list element with an a tag containing the related link
			var snippet = "<li><a href='" + relatedLinks[i]["link"] + "'>" + relatedLinks[i]["name"] + "</a></li>";
			// concatenate element to relatedHTML variable
			relatedHTML += snippet;
		}
		// concatenate list closing tag
		relatedHTML += "</ul>";
		// add list of related links to the related page links section
		document.getElementById("related").innerHTML = relatedHTML;
	} else {
		// no related links provided
		// remove related links section header
		document.getElementById("related-links").outerHTML = "";
		// remove related links section from sidebar menu
		document.querySelector(".md-sidebar--secondary .md-nav__list").lastElementChild.remove();
	}
</script>
