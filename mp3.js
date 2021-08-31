function prepareMP3() {
if (!document.getElementsByTagName) return;
  var paras = document.getElementsByTagName("p");
  for (var i=0; i<paras.length; i++ ) {
    var current_para = paras[i];
    if (current_para.getElementsByTagName("img").length>0) {
      current_para.parentNode.removeChild(current_para);
    }
  }
}
addLoadEvent(prepareMP3);
<!-- ph=1 -->
