const zestawySlow = {
    "Części ciała": [
        { p: "twarz", n: "das Gesicht" },
        { p: "ramiona", n: "die Schulter" },
        { p: "klatka piersiowa", n: "die Brust" },
        { p: "brzuch", n: "der Bauch" },
        { p: "dłoń", n: "die Hand" },
        { p: "palec u ręki", n: "der Finger" },
        { p: "noga", n: "das Bein" },
        { p: "kolano", n: "das Knie" },
        { p: "kostka", n: "der Knochel" },
        { p: "palec u stopy", n: "der Zeh" },
        { p: "stopa", n: "der FuB" },
        { p: "pupa", n: "der Po" },
        { p: "łokieć", n: "der Ellenbogen" },
        { p: "ręka", n: "der Arm" },
        { p: "plecy", n: "der Rucken" },
        { p: "głowa", n: "der Kopf" },
        { p: "ucho", n: "das Ohr" },
        { p: "ząb", n: "der Zahn" },
        { p: "broda", n: "das Kinn" },
        { p: "szyja/gardło", n: "der Hals" },
        { p: "usta", n: "der Mund" },
        { p: "nos", n: "die Nase" },
        { p: "oko", n: "das Auge" },
        { p: "czoło", n: "die Stirn" },
        { p: "włosy", n: "das Haare" }
    ],
    "Lekarz": [
        { p: "szpital", n: "das Krankenhaus" },
        { p: "lekarz", n: "der Arzt" },
        { p: "pacjent", n: "der Patient" }
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
