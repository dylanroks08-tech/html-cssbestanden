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
function initializeCryptoApp(){
let balance = 1000;}

const prices = {
  btc: 90000,
  eth: 4800,
  ltc: 250
};

const portfolio = {
  btc: 0,
  eth: 0,
  ltc: 0
};

function updatePrices() {
  Object.keys(prices).forEach(coin => {
    const oldPrice = prices[coin];

    prices[coin] += (Math.random() - 0.5) * prices[coin] * 0.01;

    const el = document.getElementById(coin);
   el.textContent =  + prices[coin].toFixed(2);
    el.className = prices[coin] > oldPrice ? "up" : "down";
  });
}

setInterval(updatePrices, 3000);

function updateBalance() {
  document.getElementById("balance").textContent =
    `Saldo: €${balance.toFixed(2)}`;
}

function buy() {
  const coin = document.getElementById("coin").value;
  const amount = Number(document.getElementById("amount").value);

  if (amount <= 0 || amount > balance) {
    alert("Niet genoeg saldo");
    return;
  }

  balance -= amount;
  portfolio[coin] += amount / prices[coin];

  updateBalance();
  renderPortfolio();
}

function sell() {
  const coin = document.getElementById("coin").value;

  if (portfolio[coin] <= 0) {
    alert("U heeft Geen coins om te verkopen");
    return;
  }

  balance += portfolio[coin] * prices[coin];
  portfolio[coin] = 0;

  updateBalance();
  renderPortfolio();
}

function renderPortfolio() {
  let ul = document.getElementById("portfolio");
  ul.innerHTML = "";

  for (let coin in portfolio) {
    if (portfolio[coin] > 0) {
      let li = document.createElement("li");

      let amount = portfolio[coin];
      let value = amount * prices[coin];

      li.textContent =
        coin.toUpperCase() +
        ": " +
        amount.toFixed(4) +
        " stuks (€" +
        value.toFixed(2) +
        ")";

      ul.appendChild(li);
    }
  }
}

async function fetchBitcoinPrice() {
    try {
        const response = await fetch(
            "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eur"
        );

        if (!response.ok) {
            throw new Error("Fout bij ophalen van data");
        }

        const data = await response.json();
        const price = data.bitcoin.eur;

        document.getElementById("price").textContent = `€ ${price.toLocaleString()}`;
    } catch (error) {
        document.getElementById("price").textContent = "Fout bij laden";
        console.error(error);
    }
}

// Event listener voor handmatig vernieuwen
document.getElementById("refresh").addEventListener("click", fetchBitcoinPrice);

// Automatisch laden bij opstart
fetchBitcoinPrice();

// Optioneel: elke 60 seconden automatisch vernieuwen
setInterval(fetchBitcoinPrice, 60000);