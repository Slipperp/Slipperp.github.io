const zestawySlow = {
    "Części ciała": [
        { p: "twarz", n: "das Gesicht" },
        { p: "ramię", n: "die Schulter" },
        { p: "klatka piersiowa", n: "die Brust" },
        { p: "brzuch", n: "der Bauch" },
        { p: "dłoń", n: "die Hand" },
        { p: "palec u ręki", n: "der Finger" },
        { p: "noga", n: "das Bein" },
        { p: "kolano", n: "das Knie" },
        { p: "kostka", n: "der Knöchel" },
        { p: "palec u stopy", n: "der Zeh" },
        { p: "stopa", n: "der Fuß" },
        { p: "pupa", n: "der Po" },
        { p: "łokieć", n: "der Ellenbogen" },
        { p: "ręka", n: "der Arm" },
        { p: "plecy", n: "der Rücken" },
        { p: "głowa", n: "der Kopf" },
        { p: "ucho", n: "das Ohr" },
        { p: "ząb", n: "der Zahn" },
        { p: "broda", n: "das Kinn" },
        { p: "szyja/gardło", n: "der Hals" },
        { p: "usta", n: "der Mund" },
        { p: "nos", n: "die Nase" },
        { p: "oko", n: "das Auge" },
        { p: "czoło", n: "die Stirn" },
        { p: "włosy", n: "die Haare" }
    ],
    "Lekarz": [
        { p: "Za tydzień w poniedziałek Szybkiego powrotu do zdrowia", n: "Nächste Woche am Montag Gute Besserung" },
        { p: "Kiedy powinienem przyjść na kontrolę", n: "Wann soll ich zur Kontrolle kommen" },
        { p: "Dziękuję doktorze Do widzenia", n: "Danke schön Herr Doktor Auf Wiedersehen" },
        { p: "Czy powinienem brać leki", n: "Soll ich Medikamente einnehmen" },
        { p: "Czuję się źle", n: "Ich fühle mich schlecht" },
        { p: "Tak przepiszę Ci tabletki krople do nosa i syrop na kaszel", n: "Ja ich verschreibe Ihnen Tabletten Nasentropfen und Hustensaft" },
        { p: "Trzy razy dziennie Zostań w łóżku przez tydzień Proszę to jest twoja recepta i zwolnienie lekarskie", n: "Dreimal täglich Bleiben Sie eine Woche im Bett Bitte das sind Ihr Rezept und Ihre Krankschreibung" },
        { p: "dzień dobry doktorze", n: "Guten Tag Herr Dotkor" },
        { p: "Jak często powinienem przyjmować lek", n: "Wie oft soll ich die Medikamente einnehmen" },
        { p: "Czy masz gorączkę?", n: "Haben Sie Fieber" },
        { p: "Jak się czujesz", n: "Was fehlt Ihnen" },
        { p: "Od dwóch dni boli mnie głowa mam kaszel i katar Całe ciało mnie boli", n: "Seit zwei Tagen habe ich Kopfschmerzen Husten und Schnupfen Der ganze Körper tut mir weh" },
        { p: "Nie wyglądasz dobrze Jak się czujesz", n: "Sie sehen nicht gut aus Wie fühlen Sie sich" }
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
        alert("Najpierw wybierz zestaw słów!");
        return;
    }
    const indeks = Math.floor(Math.random() * aktualnyZestaw.length);
    aktualneSlowo = aktualnyZestaw[indeks];
    document.getElementById("wyrazeniePoPolsku").innerText = aktualneSlowo.p;
}

function sprawdz() {
    if (!aktualneSlowo) {
        alert("Najpierw wybierz zestaw i wylosuj słowo!");
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
    } else {
        balls.style.color = "#ff0000";
        balls.innerHTML = `Źle! Poprawna odpowiedź: ${poprawnaOdpowiedz}. <br>Wylosowano kolejne słowo.`;
        streak = 0;
        streakLabel.innerHTML = `Streak: ${streak}`;
    }

    document.getElementById("odpowiedzPoNiemiecku").value = "";
    wylosujSlowo();
}

function cialo() {
    ustawZestaw("Części ciała");
}

function lekarz() {
    ustawZestaw("Lekarz");
}

document.getElementById("odpowiedzPoNiemiecku").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        sprawdz();
    }
});
