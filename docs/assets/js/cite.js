function showCitation(el){
	var note = el.children[0];
	note.setAttribute("style", "display:block;");
	document.addEventListener("click", function(){
		note.setAttribute("style", "display:none;");
	}, once=true);
}
