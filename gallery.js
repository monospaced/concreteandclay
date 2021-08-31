function prepareGallery() {
if (!document.getElementsByTagName) return false;
  var max = 11
  var divs = document.getElementsByTagName("div");
  for (var i=0; i<divs.length; i++ ) {
    var current_div = divs[i];
    if (current_div.className == "blog-body"){
      if (i<max) {
        var img = current_div.getElementsByTagName("img");
        var source = current_div.nextSibling.firstChild;
	var heading = current_div.previousSibling.firstChild.nodeValue;
        var link = document.createElement("a");
        link.setAttribute("href",source);
        img[0].setAttribute("title",heading);
        img[0].setAttribute("width","238");
        current_div.appendChild(link);
        link.appendChild(img[0]);
      }
      else {
	var h2 = current_div.previousSibling;
	var posted = current_div.nextSibling;
	var hr = h2.previousSibling;
	hr.parentNode.removeChild(hr);
        posted.parentNode.removeChild(posted);
	h2.parentNode.removeChild(h2);
	current_div.parentNode.removeChild(current_div);
	i = max - 1
      }
    }
  }
}
addLoadEvent(prepareGallery);
<!-- ph=1 -->
