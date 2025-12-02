function showCookieWall() {
    document.getElementById('cookiewall').style.display = 'block';
    document.getElementById(overlay).style.display = 'block';
}

function checkage() {
    let age = document.getElementById('ageinput').value;
    if (age >= 16) {
        window.location.href="home.html";
    } else {
        document.getElementById('cookiewall').style.display = 'none';
        document.getElementById(overlay).style.display = 'none';
        document.getElementById('redpage').style.display = 'block';
    }
}