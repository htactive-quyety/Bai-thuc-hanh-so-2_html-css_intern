function addFunction() {
    var add = document.createElement("input");
    var addone = document.createTextNode("");
    add.appendChild(addone);
    add.setAttribute("id", "formadd");
    document.getElementById("saveInfor").appendChild(add);
}

function saveFunction() {
    var value = document.getElementById("saveInfor").innerHTML = document.getElementById(
        "formadd").value + "<br>";
}