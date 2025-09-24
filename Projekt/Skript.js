const myForm = document.getElementById('createEvent');
    const eventList = document.getElementById('eventList');

    myForm.addEventListener('submit', function(event) {
        // Verhindert das Neuladen der Seite
        event.preventDefault();

        // Holt die Werte aus den Eingabefeldern
        const title = document.getElementById('title').value;
        const date = document.getElementById('date').value;
		const description = document.getElementById('description').value;

        // Prüft, ob die Felder nicht leer sind
        if (title && date && description) {
            // Erstellt ein neues Listenelement (<li>)
            const newEvent = document.createElement('li');

            // Fügt den Text hinzu
            newEvent.textContent = `<b>${title}</b> <br> Datum: ${date} <br> ${description} `;

            // Fügt das neue Listenelement zur ol-Liste hinzu
            eventList.appendChild(newEvent);

            // Setzt die Formularfelder zurück
            createEvent.reset();
        }
    });