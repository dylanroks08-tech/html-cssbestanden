function showCookieWall() {
    document.getElementById('cookiewall').style.display = 'block';
    document.getElementById(`overlay`).style.display = 'block';
}

function checkage() {
    let age = document.getElementById('ageinput').value;
    if (age >= 16) {
        window.location.href="home.html";
    } else {
        document.getElementById('cookiewall').style.display = 'none';
        document.getElementById(`overlay`).style.display = 'none';
        document.getElementById('redpage').style.display = 'block';
    }
}

function showLogin() {
    let text;
    let person = prompt("Please enter your name:", "");
    let pass = prompt("Please enter your password:", "");

    if (person == null || person == "" ) 
    (text = "User cancelled the prompt.") 
    else (text = "Welcome " + person + "!");
    document.getElementById("loginmessage").innerHTML = text;
}