let events = [];

//Funktion wird bei drücken des "Hinzufügen" Buttons aufgerufen
function pressed(event) {
    event.preventDefault(); //Verhindert die Neuladung der Seite, da sonst die Listeneinträge verschwinden

    //Dieser Bereich holt den Inhalt aus den Eingabefeldern und speichert sie in den Variablen
    var title = document.getElementById("name").value;
    var date = document.getElementById("date").value;
    var description = document.getElementById("description").value;

    //Kontrolle, ob alle Felder einen Inhalt haben.
    if (checkInput("name") && checkInput("date") && checkInput("description")) {

        //Event wird als Objekt in das Array gespeichert
        events.push({ title: title, date: date, description: description });

        //Seite wird neu geladen, damit die Liste aktualisiert wird
        displayEvents();

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