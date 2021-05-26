const htmlEditor = CodeMirror.fromTextArea(document.querySelector(".editor .code .html-code .Codemirror-html"),{
	lineNumbers:true,
	tabSize:3,
	// mode:"xml"
});
const cssEditor = CodeMirror.fromTextArea(document.querySelector(".editor .code .css-code .Codemirror-css"),{
	lineNumbers:true,
	tabSize:3,
	// mode:"css"
});
const jsEditor = CodeMirror.fromTextArea(document.querySelector(".editor .code .js-code .Codemirror-js"),{
	lineNumbers:true,
	tabSize:3,
	// mode:"javascript"
});

document.querySelector("#run-btn").addEventListener("click",function(){
	let htmlCode = htmlEditor.getValue();
	let cssCode = "<style>html{color : white;}" + cssEditor.getValue() + "</style>";
	// console.log(cssEditor.getValue());
	console.log(document.getElementById('theme').href);
	let jsCode = "<scri" + "pt>" + jsEditor.getValue() + "</scri" + "pt>";
	let previewWindow = document.querySelector("#preview-window").contentWindow.document;
	previewWindow.open();
	previewWindow.write(htmlCode+cssCode+jsCode);
	previewWindow.close();
});


document.getElementById('switch').onclick = function() {
    if (document.getElementById('theme').href == "http://127.0.0.1:5500/dark.css") {
      document.getElementById('theme').href = "style.css";
      document.getElementById('theme1').href = "Codemirrorlight.css";
      document.getElementById('theme2').href = "jsbinjqerry.js";
    } else {
      document.getElementById('theme').href = "dark.css";
      document.getElementById('theme1').href = "Codemirror.css";
      document.getElementById('theme2').href = "jsbinjquerrydark.js";
    }
  };