document.getElementById("button").onclick = function() {clickActivate()};

function clickActivate() {
    if (document.getElementById("hidden").classList.contains("hidden")) {
        document.getElementById("landing").classList.toggle("landing-act");
        document.getElementById("hidden").classList.toggle("hidden-act");
    }
    
}

function clickDisable() {
}
