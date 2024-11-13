document.getElementById("info-button").onclick = function() {
    var info = document.getElementById("info");
    if (info.style.display === "none") {
        info.style.display = "block";
        this.textContent = "Verberg info";
    } else {
        info.style.display = "none";
        this.textContent = "Klik hier voor meer info";
    }
};