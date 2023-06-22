// File name in contact form
function filename() {
    fu1Value = document.getElementById("file-input").value
    document.getElementById('file').innerHTML = fu1Value
}

let fu1 = document.getElementById("file-input");
fu1.addEventListener('change', filename)