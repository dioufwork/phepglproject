document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("flashTank").addEventListener("click", function(event) {
        const infoBox = document.getElementById("infoBox");
        infoBox.style.left = event.pageX + "px";
        infoBox.style.top = event.pageY + "px";
        infoBox.style.display = "block";
        document.getElementById("infoTitle").innerText = "Flash Tank";
        document.getElementById("infoDetails").innerText = "Separates vapors from liquid overflow. Operates at high pressure.";
    });

    document.addEventListener("click", function(event) {
        if (!event.target.matches("#flashTank")) {
            document.getElementById("infoBox").style.display = "none";
        }
    });
});
