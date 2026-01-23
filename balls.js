const zestawySlow = {
    "temat_1": [
        { p: "zmieniać", n: "ändern" },
        { p: "elektrownia atomowa", n: "das Atomkraftwerk" },
        { p: "wydychać", n: "ausatmen" },
        { p: "eksploatować / wyzyskiwać", n: "ausbeuten" },
        { p: "wymierać", n: "aussterben" },
        { p: "potrzebować", n: "benötigen" },
        { p: "wypuszczać", n: "blasen" },
        { p: "mieć pragnienie", n: "dursten" },
        { p: "rozpoznawać / zauważać", n: "erkennen" },
        { p: "produkować", n: "erzeugen" },
        { p: "pojazd", n: "das Fahrzeug" },
        { p: "urządzenie", n: "das Gerät" },
        { p: "ogrzewać", n: "heizen" },
        { p: "zmiana klimatu", n: "der Klimawandel" },
        { p: "węgiel", n: "die Kohle" },
        { p: "elektrownia węglowa", n: "das Kohlekraftwerk" },
        { p: "poziom morza", n: "der Meeresspiegel" },
        { p: "wysypisko śmieci", n: "die Mülldeponie" },
        { p: "dziura ozonowa", n: "das Ozonloch" },
        { p: "ratować", n: "retten" },
        { p: "topnieć", n: "schmelzen" },
        { p: "złom", n: "der Schrott" },
        { p: "rosnąć", n: "steigen" },
        { p: "gaz cieplarniany", n: "das Treibhausgas" },
        { p: "niebezpieczny dla środowiska", n: "umweltfeindlich" },
        { p: "przyjazny dla środowiska", n: "umweltfreundlich" },
        { p: "ochrona środowiska", n: "der Umweltschutz" },
        { p: "zużywać", n: "verbrauchen" },
        { p: "wszechświat", n: "das Weltall" },
        { p: "dobrobyt", n: "der Wohlstand" },
        { p: "niszczyć", n: "zerstören" }
        
        
    ],
    
    "temat_3": [
        { p: "makulatura", n: "das Altpapier" },
        { p: "ładować", n: "aufladen" },
        { p: "wyłączać", n: "ausmachen" },
        { p: "używać", n: "benutzen" },
        { p: "ówczesny", n: "damalig" },
        { p: "kręcić", n: "drehen" },
        { p: "rozwijać", n: "entwickeln" },
        { p: "ropa naftowa", n: "das Erdö" },
        { p: "odnawialny", n: "erneuerbar" },
        { p: "pozyskiwać", n: "gewinnen" },
        { p: "drewno", n: "das Holz" },
        { p: "śmieci", n: "der Müll" },
        { p: "używać", n: "nutzen" },
        { p: "publiczny", n: "öffentlich" },
        { p: "butelka zwrotna", n: "die Pflandflasche" },
        { p: "torebka foliowa", n: "das Plastiktüte" },
        { p: "dmuchać / wydmuchiwać", n: "pusten" },
        { p: "rząd", n: "die Regierung" },
        { p: "reszta", n: "der Rest" },
        { p: "zbierać", n: "sammeln" },
        { p: "szkodzić", n: "schaden" },
        { p: "włączać", n: "schalten" },
        { p: "stawiać na", n: "setzen auf" },
        { p: "instalacja solarna", n: "die Solaranlage" },
        { p: "torba materiałowa", n: "die Stofftasche" },
        { p: "prąd", n: "der Strom" },
        { p: "segregować", n: "trennen" },
        { p: "przekształcać", n: "umwandeln" },
        { p: "zmieniać", n: "verändern" },
        { p: "używać", n: "vernrauchen" },
        { p: "spalać", n: "verbrennen" },
        { p: "dostępny / dyspozycyjny", n: "verfügbar" },
        { p: "opuszczać", n: "verlassen" },
        { p: "opakowanie", n: "die Verpackung" },
        { p: "w pełni", n: "völlig" },
        { p: "wzór", n: "das Vorbild" },
        { p: "dostępny", n: "vorhanden" },
        { p: "kran", n: "der Wassaerhahn" },
        { p: "wyrzucać", n: "wegwerfen" },
        { p: "podlegający recyclingowi", n: "wiederverwertbar" },
        { p: "wiatrak", n: "das Windrad" },
        { p: "zakręcać", n: "zudrehen" },
        
]
};

let aktualnyZestaw = [];
let aktualneSlowo = null;
let streak = 0;

function ustawZestaw(nazwaZestawu) {
    aktualnyZestaw = zestawySlow[nazwaZestawu];
    document.getElementById("wybrano").innerText = `Wybrano: ${nazwaZestawu}`;
    wylosujSlowo();
}

function wylosujSlowo() {
    if (aktualnyZestaw.length === 0) {
        document.getElementById("wyrazeniePoPolsku").innerText = "";
        alert("Najpierw wybierz temat!");
        return;
    }
    const indeks = Math.floor(Math.random() * aktualnyZestaw.length);
    aktualneSlowo = aktualnyZestaw[indeks];
    document.getElementById("wyrazeniePoPolsku").innerText = aktualneSlowo.p;
}

function sprawdz() {
    if (!aktualneSlowo) {
        alert("Najpierw wybierz temat i wylosuj słowo!");
        return;
    }
    const odpowiedz = document.getElementById("odpowiedzPoNiemiecku").value.trim().toLowerCase();
    const poprawnaOdpowiedz = aktualneSlowo.n.toLowerCase();
    const balls = document.getElementById("odpowiedz");
    const streakLabel = document.getElementById("streak");

    if (odpowiedz === poprawnaOdpowiedz) {
        balls.style.color = "#00ff00";
        balls.innerHTML = "Twoja odpowiedź jest poprawna. <br>Wylosowano kolejne słowo.";
        streak += 1;
        streakLabel.innerHTML = `Streak: ${streak}`;
        wylosujSlowo();
    } else {
        balls.style.color = "#ff0000";
        balls.innerHTML = `Źle! Poprawna odpowiedź to: ${poprawnaOdpowiedz}. <br>Spróbuj ponownie z tym samym słowem.`;
        streak = 0;
        streakLabel.innerHTML = `Streak: ${streak}`;
    }

    document.getElementById("odpowiedzPoNiemiecku").value = "";
}


function temat1() {
    ustawZestaw("temat_1");
}

function temat3() {
    ustawZestaw("temat_3");
}

document.getElementById("odpowiedzPoNiemiecku").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        sprawdz();
    }
});

function wpisz(znak) {
    const input = document.getElementById('odpowiedzPoNiemiecku');
    input.value += znak;
}
function wyslijSugescie() {
    const sugestia = document.getElementById('sugestia').value.trim();
    const email = document.getElementById('email').value.trim();
    
    if (!sugestia) {
        alert('Wpisz swoją sugestię!');
        return;
    }
    
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://formsubmit.co/predkosci92@gmail.com'; 
    
    const textarea = document.createElement('textarea');
    textarea.name = 'Sugestia';
    textarea.value = sugestia;
    form.appendChild(textarea);
    
    if (email) {
        const emailInput = document.createElement('input');
        emailInput.type = 'hidden';
        emailInput.name = 'Email';
        emailInput.value = email;
        form.appendChild(emailInput);
    }
    
    const replyTo = document.createElement('input');
    replyTo.type = 'hidden';
    replyTo.name = '_replyto';
    replyTo.value = email || 'noreply@example.com';
    form.appendChild(replyTo);
    
    document.body.appendChild(form);
    form.submit();
}