// Función para cargar las ciudades asociadas a una región
function cargarCiudades(region) {
    // Realizar una solicitud AJAX al servidor para obtener las ciudades asociadas a la región
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Llenar el contenedor de ciudades con los datos recibidos
            document.getElementById('contenedorCiudades').innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', 'obtener_ciudades.php?region=' + encodeURIComponent(region), true);
    xhr.send();
}

// Función para manejar el evento al presionar un checkbox de región
function checkboxRegionOnChange(checkbox) {
    if (checkbox.checked) {
        cargarCiudades(checkbox.value);
    } else {
        // Limpiar el contenedor de ciudades si el checkbox se desmarca
        document.getElementById('contenedorCiudades').innerHTML = '';
    }
}
