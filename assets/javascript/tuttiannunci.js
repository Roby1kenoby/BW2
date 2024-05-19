document.getElementById('toggleButton').addEventListener('click', function() {
    var pageContent = document.getElementById('pageContent');
    var mapContainer = document.getElementById('mapContainer');
    if (mapContainer.style.display === 'none') {
        mapContainer.style.display = 'block';
        pageContent.style.display = 'none';
        this.textContent = `Mostra l'elenco`;
    } else {
        mapContainer.style.display = 'none';
        pageContent.style.display = 'block';
        this.textContent = 'Mostra mappa';
    }
});
