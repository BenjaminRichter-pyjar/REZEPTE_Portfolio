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
        events.push({ title: title, date: new Date (date), description: description });

        //Seite wird neu geladen, damit die Liste aktualisiert wird
        displayEvents();

        //Setzt die Eingabefelder wieder zurück
        document.getElementById("createEvent").reset();
    }
}

// Sortierung der Events
function listenSortierung() {
    let sortierung = document.getElementById("Sortierung").value;

    if (sortierung === "dateAsc") {
        events.sort(function(a, b) {
            return a.date - b.date;
        });
    } else if (sortierung === "dateDesc") {
        events.sort(function(a, b) {
            return b.date - a.date;
        });
    } else if (sortierung === "titleAsc") {
        events.sort(function(a, b) {
            return a.title.localeCompare(b.title);
        });
    } else if (sortierung === "titleDesc") {
        events.sort(function(a, b) {
            return b.title.localeCompare(a.title);
        });
    }

    // Aktualisierung der Anzeige
    displayEvents();
}

// Suchfunktion
function suche() {
    displayEvents();
}

// Anzeige der Events in der Liste
function displayEvents() {
    let liste = document.getElementById("eventList");
    liste.innerHTML = ""; //Leert die Liste, damit sie neu aufgebaut werden kann

    let suchbegriff = document.getElementById("Suchfeld").value.toLowerCase();

    for (let i = 0; i < events.length; i++) {
        // Überprüfen, ob der Titel den Suchbegriff enthält
        if (suchbegriff ==="" || events[i].title.toLowerCase().includes(suchbegriff)) {  
            let neuerEintrag = document.createElement("li");
            neuerEintrag.innerHTML = `
                <h3>${events[i].title}</h3>     
                <p><strong>Datum:</strong> ${events[i].date.toLocaleDateString()}</p>
                <p><strong>Beschreibung:</strong> ${events[i].description}</p>
            `;
            liste.appendChild(neuerEintrag);
        }
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