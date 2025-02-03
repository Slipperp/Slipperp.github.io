const zestawySlow = {
    "temat_1": [
        // Dyscypliny sportowe
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
        { p: "Łyżwiarstwo", n: "Schlittschuhlaufen" },
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
        { p: "Skok w dal", n: "Weitsprung" },

        // Sprzęt sportowy
        { p: "Strój kąpielowy", n: "der Badeanzug" },
        { p: "Kąpielówki", n: "die Badehose" },
        { p: "Czepek pływacki", n: "die Badekappe" },
        { p: "Piłka", n: "der Ball" },
        { p: "Czapka baseballowa", n: "die Baseballmütze" },
        { p: "Rower", n: "das Fahrrad" },
        { p: "Kask rowerowy", n: "der Fahrradhelm" },
        { p: "Rękawiczki", n: "die Handschuhe" },
        { p: "Ręcznik", n: "das Handtuch" },
        { p: "Kij hokejowy", n: "der Hockeyschläger" },
        { p: "Krążek hokejowy", n: "der Puck" },
        { p: "Hulajnoga", n: "der Roller" },
        { p: "Wrotki", n: "die Rollschuhe" },
        { p: "Sanki", n: "der Schlitten" },
        { p: "Łyżwy", n: "die Schlittschuhe" },
        { p: "Gogle narciarskie", n: "die Schneebrille" },
        { p: "Deskorolka", n: "das Skateboard" },
        { p: "Narty", n: "die Skier" },
        { p: "Snowboard", n: "das Snowboard" },
        { p: "Odzież sportowa", n: "die Sportkleidung" },
        { p: "Buty sportowe", n: "die Sportschuhe" },
        { p: "Rakieta tenisowa", n: "der Tennisschläger" },
        { p: "Butelka na napój", n: "die Trinkflasche" }
    ],
    "Lekarz": [
        { p: "Za tydzień w poniedziałek Szybkiego powrotu do zdrowia", n: "Nächste Woche am Montag Gute Besserung" },
        { p: "Kiedy powinienem przyjść na kontrolę", n: "Wann soll ich zur Kontrolle kommen" },
        { p: "Dziękuję doktorze Do widzenia", n: "Danke schön Herr Doktor Auf Wiedersehen" },
        { p: "Czy powinienem brać leki", n: "Soll ich Medikamente einnehmen" },
        { p: "Czuję się źle", n: "Ich fühle mich schlecht" },
        { p: "Tak przepiszę Ci tabletki krople do nosa i syrop na kaszel", n: "Ja ich verschreibe Ihnen Tabletten Nasentropfen und Hustensaft" },
        { p: "Trzy razy dziennie Zostań w łóżku przez tydzień Proszę to jest twoja recepta i zwolnienie lekarskie", n: "Dreimal täglich Bleiben Sie eine Woche im Bett Bitte das sind Ihr Rezept und Ihre Krankschreibung" },
        { p: "dzień dobry doktorze", n: "Guten Tag Herr Doktor" },
        { p: "Jak często powinienem przyjmować lek", n: "Wie oft soll ich das Medikament einnehmen" },
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

function wpisz(znak) {
    const input = document.getElementById('odpowiedzPoNiemiecku');
    input.value += znak;
}