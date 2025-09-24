//Funktion wird bei drücken des "Hinzufügen" Buttons aufgerufen
function pressed(event) {
    event.preventDefault(); //Verhindert die Neuladung der Seite, da sonst die Listeneinträge verschwinden

    //Dieser Bereich holt den Inhalt aus den Eingabefeldern und speichert sie in den Variablen
    var title = document.getElementById("name").value;
    var date = document.getElementById("date").value;
    var description = document.getElementById("description").value;

    //Kontrolle, ob alle Felder einen Inhalt haben.
    if (checkInput("name") && checkInput("date") && checkInput("description")) {

        var list = document.getElementById("eventList");

        //Fügt neuen Listeneintrag hinzu
        var newItem = document.createElement("li");

        //Inhalt des neuen Listeneintrags
        newItem.innerHTML = "Titel: " + title + "<br/> Datum: " + date + "<br/> Beschreibung: " + description + "<br/>";

        list.appendChild(newItem);

        //Setzt die Eingabefelder wieder zurück
        document.getElementById("createEvent").reset();
    }
}

//Extra-Funktion, die checkt, ob die ein Eingabefeld einen Inhalt hat
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