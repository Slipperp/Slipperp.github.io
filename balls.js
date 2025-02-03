const zestawySlow = {
    "temat_1": [
        { p: "Aerobik", n: "Aerobic" },
        { p: "Koszykówka", n: "Basketball" },
        { p: "Boks", n: "Boxen" },
        { p: "Łyżwiarstwo", n: "Eislaufen" },
        { p: "Szermierka", n: "Fechten" },
        { p: "Piłka nożna", n: "Fußball" },
        { p: "Gimnastyka", n: "Gymnastik" },
        { p: "Piłka ręczna", n: "Handball" },
        { p: "Skok wzwyż", n: "Hochsprung" },
        { p: "Hokej", n: "Hockey" },
        { p: "Jogging", n: "Jogging" },
        { p: "Judo", n: "Judo" },
        { p: "Karate", n: "Karate" },
        { p: "Kręgle", n: "Kegeln" },
        { p: "Wspinaczka", n: "Klettern" },
        { p: "Trening siłowy", n: "Krafttraining" },
        { p: "Bieganie", n: "Laufen" },
        { p: "Lekkoatletyka", n: "Leichtathletik" },
        { p: "Wiosłowanie", n: "Paddeln" },
        { p: "Jazda na rowerze", n: "Radfahren" },
        { p: "Jazda konna", n: "Reiten" },
        { p: "Jazda na hulajnodze", n: "Rollerfahren" },
        { p: "Jazda na wrotkach", n: "Rollschuhfahren" },
        { p: "Jazda na sankach", n: "Schlittenfahren" },
        { p: "Pływanie", n: "Schwimmen" },
        { p: "Żeglarstwo", n: "Segeln" },
        { p: "Jazda na deskorolce", n: "Skateboardfahren" },
        { p: "Narciarstwo biegowe", n: "Skilanglauf" },
        { p: "Skoki narciarskie", n: "Skispringen" },
        { p: "Jazda na snowboardzie", n: "Snowboarden" },
        { p: "Surfing", n: "Surfen" },
        { p: "Taniec", n: "Tanzen" },
        { p: "Nurkowanie", n: "Tauchen" },
        { p: "Tenis", n: "Tennis" },
        { p: "Gimnastyka sportowa", n: "Turnen" },
        { p: "Siatkówka", n: "Volleyball" },
        { p: "Wędrówki", n: "Wandern" },
        { p: "Piłka wodna", n: "Wasserball" },
        { p: "Skok w dal", n: "Weitsprung" }
    ],
    
    "temat_3": [
    { p: "życie", n: "das Leben" },
    { p: "od dzieciństwa", n: "von Kindheit an" },
    { p: "niewysportowany", n: "unsportlich" },
    { p: "dorastać", n: "aufwaschen" },
    { p: "jako dziecko", n: "als Kind" },
    { p: "ulubiona dyscyplina sportowa", n: "die Lieblingssportart" },
    { p: "najlepiej", n: "Am besten" },
    { p: "ruszać się", n: "sich bewagen" },
    { p: "nie mieć ochoty", n: "keine Lust haben" },
    { p: "w przyszłości", n: "in Zukunft" },
    { p: "nic do zrobienia", n: "nichts zu tun" },
    { p: "mieć możliwości", n: "die Möglichkeit haben" },
    { p: "na lekcji WF-u", n: "in Sportunterricht" },
    { p: "unikać", n: "vermeiden" },
    { p: "należeć do", n: "gehören zu" },
    { p: "związek sportowy", n: "der Sportverein" },
    { p: "kółko sportowe", n: "die Sport-AG" },
    { p: "leniwy", n: "faul" },
    { p: "ćwiczenie sportowe", n: "die Sportübung" },
    { p: "mimo to", n: "trotzdem" },
    { p: "chociaż", n: "obwohl" },
    { p: "mieć przyjemność", n: "Spaß haben" },
    { p: "odgrywać ważną rolę", n: "eine wichtige Rolle spielen" },
    { p: "na świeżym powietrzu", n: "im Freien" },
    { p: "na zewnątrz", n: "draußen" }
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
    } else {
        balls.style.color = "#ff0000";
        balls.innerHTML = `Źle! Poprawna odpowiedź: ${poprawnaOdpowiedz}. <br>Wylosowano kolejne słowo.`;
        streak = 0;
        streakLabel.innerHTML = `Streak: ${streak}`;
    }

    document.getElementById("odpowiedzPoNiemiecku").value = "";
    wylosujSlowo();
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
