// File name in contact form
function filename() {
    fu1Value = document.getElementById("file-input").value
    document.getElementById('file').innerHTML = fu1Value.slice(0, 20) + '...' + `<span class="tooltiptext">${fu1Value}</span>`
}

let fu1 = document.getElementById("file-input");
fu1.addEventListener('change', filename)