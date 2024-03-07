<?php
// Obtener la región enviada por la solicitud AJAX
$region = $_GET['region'];

// Realizar la consulta a la base de datos para obtener las ciudades asociadas a la región
// Aquí se asume que los datos están en un formato compatible con HTML
if ($region === 'Metro') {
    echo '<input type="checkbox" name="ciudades[]" value="Londres"> Londres<br>';
    echo '<input type="checkbox" name="ciudades[]" value="París"> París<br>';
} elseif ($region === 'Otras') {
    echo '<input type="checkbox" name="ciudades[]" value="Nueva York"> Nueva York<br>';
    echo '<input type="checkbox" name="ciudades[]" value="Tokio"> Tokio<br>';
}
?>
