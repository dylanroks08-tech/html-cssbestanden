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


/*
Dit is een basis inlog-systeem dat checkt of je gegevens kloppen en je dan doorverwijst.

Bewaard 3 testgebruikers in een array met gebruikersnamen en wachtwoorden
Controleert bij inloggen of de ingevoerde gebruikersnaam en wachtwoord overeenkomen met een van de gebruikers
Bij succes: toont een groene melding en stuurt de gebruiker na 1 seconde door naar dashboard.html
Bij fout: toont een rode foutmelding dat de inloggegevens ongeldig zijn

*/


// Vooraf ingestelde gebruikers (in productie: gebruik een backend met gehashte wachtwoorden)
const users = [
    { username: 'dylan', password: 'doomguy!' },
    { username: 'keith', password: 'rex!' },
    { username: 'cindy', password: 'maxje1976!' }
];

// Login functie
function login() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const notification = document.getElementById('notification');

    // Trim whitespace van inputs
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Reset notificatie
    notification.textContent = '';

    // Validatie: check of velden niet leeg zijn
    if (!username || !password) {
        showNotification(notification, 'Vul alle velden in.', 'red');
        return;
    }

    // Validatie van de gebruikersinvoer
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        showNotification(notification, 'Inloggen succesvol!', 'green');
        
        // Disable login button om dubbele submits te voorkomen
        const loginButton = document.querySelector('button');
        if (loginButton) loginButton.disabled = true;

        // Gebruiker doorsturen naar dashboard
        setTimeout(() => {
            window.location.href = 'home copy.html';
        }, 1000);
    } else {
        showNotification(notification, 'Ongeldige gebruikersnaam of wachtwoord.', 'red');
        
        // Clear password veld na mislukte poging (security best practice)
        passwordInput.value = '';
        passwordInput.focus();
    }
}

// Helper functie voor notificaties
function showNotification(element, message, color) {
    element.style.color = color;
    element.textContent = message;
}

// Event listener voor Enter-toets
document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');
    const usernameInput = document.getElementById('username');
    
    // Login bij Enter in beide velden
    if (passwordInput) {
        passwordInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                login();
            }
        });
    }
    
    if (usernameInput) {
        usernameInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                login();
            }
        });
    }
});