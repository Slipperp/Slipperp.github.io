const zestawySlow = {
    "temat_1": [
        { p: "pobyt", n: "der Aufenthalt" },
        { p: "uważać, pilnowac", n: "aufpassen" },
        { p: "kostium kapielowy", n: "der Badeanzug" },
        { p: "ręcznik", n: "das Badetuch" },
        { p: "Zazdrościć", n: "beneiden" },
        { p: "stanik", n: "der BH" },
        { p: "klapek", n: "der Flip-Flop" },
        { p: "gustowny", n: "geschmackvoll" },
        { p: "sprzęt do grillowania", n: "das Grillgerät" },
        { p: "Schronisko młodzieżowe", n: "die Jugendherberge" },
        { p: "pozwalać/kazać/zlecać/umożliwiać/zostawiać", n: "lassen" },
        { p: "pensjonat", n: "die Pension" },
        { p: "piżama", n: "der Schlafanzug" },
        { p: "plaża", n: "der Strand" },
        { p: "kapelusz słomkowy", n: "der Strohhut" },
        { p: "nocować", n: "übernachten" },
        { p: "majtki", n: "die Unterhose" },
        { p: "nocleg", n: "die Unterkunft" },
        { p: "wyjeżdżać", n: "verreisen" },
        { p: "obiecywać", n: "versprechen" },
        { p: "ufać", n: "vertrauen" },
        { p: "wstępnie", n: "vorläufig" },
        { p: "ostrożny", n: "vorsichtig" },
        { p: "samochód kempingowy", n: "das Wohnmobil" },
        { p: "namiot", n: "das Zelt" }
    ],
    
    "temat_3": [
    { p: "potrącać/najeżdżać", n: "anfahren" },
    { p: "atakowac", n: "angreifen" },
    { p: "zatrzymywać się", n: "anhalten" },
    { p: "zapalać(silnik)", n: "anspringen" },
    { p: "przykry/nieprzyjemny", n: "ärgelich" },
    { p: "wysiadać", n: "aussteigen" },
    { p: "dowód osobisty", n: "der Ausweis" },
    { p: "autostrada", n: "die Autobahn" },
    { p: "kierowca", n: "der Autofahrer" },
    { p: "awaria samochodu", n: "die Autopanne" },
    { p: "drzewo", n: "der Baum" },
    { p: "pasażer", n: "der Beifahrer" },
    { p: "uszkadzać", n: "beschädigen" },
    { p: "okradać", n: "bestehlen" },
    { p: "nieprzytomny", n: "bewusstlos" },
    { p: "przytomność/świadomość", n: "das Bewusstsein" },
    { p: "ambasada", n: "die Botschaft" },
    { p: "złodziej", n: "der Dieb" },
    { p: "kradzież", n: "der Diebstahl" },
    { p: "zdarzenie/wydarzenie", n: "das Ereignis" },
    { p: "załatwiać", n: "erledigen" },
    { p: "stwierdzić", n: "feststellen" },
    { p: "lotnisko", n: "der Flughafen" },
    { p: "uszkodzenie bagażu", n: "die Gepäckbeschädigung" },
    { p: "utrata/zguba bagażu", n: "der Gepäckverlust" },
    { p: "przemoc", n: "die Gewalt" },
    { p: "bagaż podręczny", n: "das Handgepäck" },
    { p: "pomoc", n: "die Hilfe" },
    { p: "udzielać pierwszej pomocy", n: "Erste Hilfe leisten" },
    { p: "krajobraz", n: "die Landschaft" },
    { p: "wada/usterka", n: "der Mangel" },
    { p: "współczucie", n: "das Mitgefühl" },
    { p: "silnik", n: "der Motor" },
    { p: "klęska żywiołowa", n: "die Naturkatastrophe" },
    { p: "lekarz pogotowia ratunkowego", n: "der Notarzt" },
    { p: "miejsce", n: "der Ort" },
    { p: "na miejscu", n: "an Ort und Stelle" },
    { p: "przechodzeń", n: "der Passant" },
    { p: "nagle", n: "plötzlich" },
    { p: "padać (deszcz)", n: "regnen" },
    { p: "leje jak z cebra", n: "es regnet in Strömen" },
    { p: "pójść na opak/źle", n: "schiefgehen" },
    { p: "bić", n: "schlagen" },
    { p: "blokować/wyłączać", n: "sperren" },
    { p: "kraść", n: "stehlen" },
    { p: "śmierdzieć", n: "stinken" },
    { p: "trasa/odcinek", n: "die Strecke" },
    { p: "wylewać/zalewać", n: "überfluten" },
    { p: "wypadek", n: "der Unfall" },
    { p: "miejsce wypadku", n: "die Unfallstelle" },
    { p: "zła pogoda", n: "das Unwetter" },
    { p: "ranić się", n: "sich verletzen" },
    { p: "rana/obrażenie", n: "die Verletzung" },
    { p: "gubić/tracić", n: "verlieren" },
    { p: "spóźniać się/przegapić", n: "verpassen" },
    { p: "zwracać się", n: "sich wenden" }
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
