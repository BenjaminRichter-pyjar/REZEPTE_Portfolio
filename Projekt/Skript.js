function pressed(event) {
    event.preventDefault();

    var title = document.getElementById("name").value;
    var date = document.getElementById("date").value;
    var description = document.getElementById("description").value;

    if (checkInput("name") && checkInput("date") && checkInput("description")) {

        var list = document.getElementById("eventList");

        var newItem = document.createElement("li");

        newItem.innerHTML = "Titel: " + title + "<br/> Datum: " + date + "<br/> Beschreibung: " + description + "<br/>";

        list.appendChild(newItem);

        document.getElementById("createEvent").reset();
    }
}


function checkInput(identification){
    let inputFeld = document.getElementById(identification);
    let inputWert = inputFeld.value;

    if (inputWert === "") {
        alert("Sie müssen alle Felder ausfüllen, um ein Ereignis hinzuzufügen");
        return false;
    } else {
        return true;
    }
}