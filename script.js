document.addEventListener("DOMContentLoaded", function() {
    const loadButton = document.getElementById("loadButton");

    if (loadButton) {
        loadButton.addEventListener("click", function() {
            window.location.href = "https://localhost:3001";
        });
    } else {
        console.error("El botón con el ID 'loadButton' no se encuentra en el HTML.");
    }
});
