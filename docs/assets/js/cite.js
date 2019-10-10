function showCitation(el){
	var note = el.children[0];
	note.setAttribute("style", "display:block;");
	window.addEventListener("click", function(){
		note.setAttribute("style", "display:none;");
	}, once=true);
	var x = document.createElement("a");
	x.innerHTML = "x";
	x.setAttribute("style", "float:right;color:#fff;")
	x.setAttribute("onclick", "hideCitation(this)");
	note.append(x);
}

function hideCitation(el){
	var citation = el.parentElement;
	var footnote = el.parentElement.parentElement;
	footnote.setAttribute("onclick", "");
	citation.setAttribute("style", "display:none;");
}
