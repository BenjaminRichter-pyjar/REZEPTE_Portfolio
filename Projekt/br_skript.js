function pressed(){
    event.preventDefault();

    var title = document.getElementById("name");
    var date = document.getElementById("date");
    var description = document.getElementById("description");

    checkInput("name");
    if(checkInput("name") && checkInput("date") && checkInput("description"))
        var list = document.getElementById("eventList");
        list.innerHTML = "<li>Titel: " + title.value + "<br/> Datum: " + date.value + "<br/> Beschreibung: " + description.value + "<br/></li>";



    createEvent.reset();
}

function checkInput(identification){
    let inputFeld = document.getElementById(identification);
    let inputWert = inputFeld.value;

    if (inputWert === "") {
        alert("Sie müssen alle Felder ausfüllen, um ein Ereignis hinzuzufügen");
        return false; // Gibt false zurück, wenn das Feld leer ist
    } else {
        return true; // Gibt true zurück, wenn das Feld Inhalt hat
    }
}