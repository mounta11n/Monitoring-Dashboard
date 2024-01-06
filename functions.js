function updateWidgets() {
  fetch('data.json')
      .then(response => response.json())
      .then(data => {
          // Aktualisiere die Widgets basierend auf den Daten in der .json-Datei
          document.getElementById('server1').textContent = data.server1;
          document.getElementById('server2').textContent = data.server2;
          // usw.
      });
}

// Rufe die Funktion updateWidgets alle 5 Sekunden auf
setInterval(updateWidgets, 5000);
