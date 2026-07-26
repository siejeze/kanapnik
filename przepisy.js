/* ============================================================
   KANAPNIKI — dane. Tu zmieniasz przepisy. Nic więcej nie trzeba ruszać.
   skladniki / kroki / mieszanka: zwykłe listy tekstu.
   ============================================================ */
const BAZA = {
  kroki: [
    "Rozgrzej piekarnik do 180&nbsp;°C, góra/dół. Blacha na środkowym poziomie, wyłożona papierem.",
    "Oddziel białka od żółtek.",
    "Białka ubij na sztywną pianę.",
    "Żółtka połącz z roztopionym, lekko przestudzonym masłem.",
    "Dodaj wszystkie suche składniki i ocet. Wymieszaj. Masa będzie gęsta.",
    "Partiami dodawaj pianę, mieszając szpatułką od dołu do góry.",
    "Wyłóż na papier i uformuj prostokąt grubości około 1&nbsp;cm.",
    "Wyrównaj powierzchnię."
  ],
  pieczenie: "180 °C góra/dół, 16–18 minut. Wierzch lekko złocisty, środek sprężysty.",
  studzenie: "20 minut na kratce, razem z papierem. Nie krój wcześniej.",
  przechowywanie: "Papier do pieczenia albo bawełniana ściereczka. 2 dni w temperaturze pokojowej, do 5 dni w lodówce."
};

const PRZEPISY = [
  /* ---------- SPRAWDZONE ---------- */
  {
    id:"klasyczny", grupa:"sprawdzone", nazwa:"Klasyczny", kolor:"#D9542B",
    opis:"Wersja wyjściowa. Czarnuszka i kminek dają zapach prawdziwego chleba.",
    skladniki:[
      "2 jajka","35 g mąki laskowej","2 g mąki bambusowej","10 g masła",
      "2 łyżeczki drożdży nieaktywnych","½ łyżeczki proszku do pieczenia",
      "½ łyżeczki octu jabłkowego","½ płaskiej łyżeczki soli",
      "½ łyżeczki czarnuszki","¼ łyżeczki kminku","szczypta kolendry","szczypta Erevii"
    ],
    roznice:[],
    potem:"Przed jedzeniem lekko podpiec.",
    mieszanka:[["mąka laskowa","1000 g"],["mąka bambusowa","60 g"],["drożdże nieaktywne","60 g"],
      ["sól","40 g"],["Erevia","40 g"],["proszek do pieczenia","15 g"],
      ["czarnuszka","20 g"],["kminek","15 g"],["kolendra","5 g"]]
  },
  {
    id:"slonecznikowy", grupa:"sprawdzone", nazwa:"Słonecznikowy", kolor:"#F2A20C",
    opis:"Jedna czwarta mąki ustępuje podprażonemu słonecznikowi. Ciemniejszy, orzechowy.",
    skladniki:[
      "2 jajka","26 g mąki laskowej","9 g mielonego, podprażonego słonecznika",
      "2 g mąki bambusowej","10 g masła","2 łyżeczki drożdży nieaktywnych",
      "½ łyżeczki proszku do pieczenia","½ łyżeczki octu jabłkowego","½ płaskiej łyżeczki soli",
      "½ łyżeczki czarnuszki","¼ łyżeczki kminku","szczypta kolendry","szczypta Erevii"
    ],
    roznice:["Słonecznik podpraż 5–7 minut w 160&nbsp;°C i całkowicie wystudź. Dopiero potem zmiel — ciepły puści olej i zrobi się pasta."],
    potem:"Przed jedzeniem lekko podpiec.",
    mieszanka:[["mąka laskowa","750 g"],["mielony słonecznik","250 g"],["mąka bambusowa","60 g"],
      ["drożdże nieaktywne","60 g"],["sól","40 g"],["Erevia","40 g"],
      ["proszek do pieczenia","15 g"],["czarnuszka","20 g"],["kminek","10 g"]]
  },
  {
    id:"maslany", grupa:"sprawdzone", nazwa:"Maślany", kolor:"#E9A227",
    opis:"Do masła i dżemu. Więcej tłuszczu, żadnych przypraw, miękki środek.",
    skladniki:[
      "1 jajko","1 żółtko","35 g mąki laskowej","2 g mąki bambusowej","15 g masła",
      "1½ łyżeczki drożdży nieaktywnych","½ łyżeczki proszku do pieczenia",
      "½ łyżeczki octu jabłkowego","szczypta soli","½ łyżeczki Erevii",
      "1 łyżeczka sezamu na wierzch"
    ],
    roznice:["Masę rozprowadź grubiej, około 1,5&nbsp;cm — środek ma zostać miękki.","Sezam posyp przed pieczeniem."],
    potem:"Tego się nie odpieka ponownie.",
    mieszanka:[["mąka laskowa","1000 g"],["mąka bambusowa","60 g"],["drożdże nieaktywne","45 g"],
      ["sól","20 g"],["Erevia","60 g"],["proszek do pieczenia","15 g"]]
  },
  {
    id:"makowy", grupa:"sprawdzone", nazwa:"Makowy", kolor:"#2E3A6E",
    opis:"Śniadaniowa wersja maślanego. Mak wyłącznie na wierzchu.",
    skladniki:[
      "1 jajko","1 żółtko","35 g mąki laskowej","2 g mąki bambusowej","15 g masła",
      "1½ łyżeczki drożdży nieaktywnych","½ łyżeczki proszku do pieczenia",
      "½ łyżeczki octu jabłkowego","szczypta soli","½ łyżeczki Erevii",
      "1–2 łyżeczki maku na wierzch"
    ],
    roznice:["Masę rozprowadź grubiej, około 1,5&nbsp;cm.","Powierzchnię zwilż wodą albo mlekiem roślinnym, dopiero wtedy posyp makiem.","Maku nie mieszaj z ciastem — zrobi się szary i gorzkawy."],
    potem:"Tego się nie odpieka ponownie.",
    mieszanka:[["mąka laskowa","1000 g"],["mąka bambusowa","60 g"],["drożdże nieaktywne","45 g"],
      ["sól","20 g"],["Erevia","60 g"],["proszek do pieczenia","15 g"]],
    mieszankaNota:"Taka sama jak maślana. Mak przechowuj osobno."
  },
  {
    id:"waniliowy", grupa:"sprawdzone", nazwa:"Waniliowy", kolor:"#7E57C2",
    opis:"To już prawie brioche. Do twarożku, mascarpone i konfitur.",
    skladniki:[
      "1 jajko","1 żółtko","35 g mąki laskowej","2 g mąki bambusowej","15 g masła",
      "½ łyżeczki proszku do pieczenia","½ łyżeczki octu jabłkowego","szczypta soli",
      "½ łyżeczki Erevii","5 kropli waniliowych N!CK'S Stevia Drops"
    ],
    roznice:["Bez drożdży nieaktywnych i bez przypraw.","Krople dodaj razem z masłem i żółtkami."],
    potem:"Tego się nie odpieka ponownie.",
    mieszanka:[["mąka laskowa","1000 g"],["mąka bambusowa","60 g"],["Erevia","60 g"],
      ["sól","20 g"],["proszek do pieczenia","15 g"]],
    mieszankaNota:"Krople dodawaj zawsze świeżo, nigdy do mieszanki."
  },
  {
    id:"parmezanowy", grupa:"sprawdzone", nazwa:"Parmezanowy", kolor:"#6E8B2E", wOpracowaniu:true,
    opis:"Nie po to, żeby było serowo. Parmezan wnosi glutaminian i głębię.",
    skladniki:[
      "2 jajka","35 g mąki laskowej","2 g mąki bambusowej","10 g masła",
      "10 g bardzo drobno startego parmezanu",
      "2 łyżeczki drożdży nieaktywnych","½ łyżeczki proszku do pieczenia",
      "½ łyżeczki octu jabłkowego","½ płaskiej łyżeczki soli",
      "½ łyżeczki czarnuszki","¼ łyżeczki kminku","szczypta kolendry","szczypta Erevii"
    ],
    roznice:["Baza: Klasyczny.","Parmezan wmieszaj tuż przed dodaniem piany. Wcześniej zbije się w grudki."],
    potem:"Przed jedzeniem lekko podpiec.",
    mieszanka:[["mąka laskowa","1000 g"],["mąka bambusowa","60 g"],["drożdże nieaktywne","60 g"],
      ["sól","40 g"],["Erevia","40 g"],["proszek do pieczenia","15 g"],
      ["czarnuszka","20 g"],["kminek","15 g"],["kolendra","5 g"]],
    mieszankaNota:"Jak klasyczna. Parmezan zawsze świeżo starty, nigdy do mieszanki."
  },

  /* ---------- EKSPERYMENTY ---------- */
  {
    id:"prazona", grupa:"eksperymenty", nazwa:"Z podprażanej mąki", kolor:"#A0522D",
    opis:"Prażenie wyciąga z mąki laskowej ton, którego surowa nie ma.",
    skladniki:[
      "2 jajka","35 g mąki laskowej (z czego 15 g podprażyć)","2 g mąki bambusowej","10 g masła",
      "2 łyżeczki drożdży nieaktywnych","½ łyżeczki proszku do pieczenia",
      "½ łyżeczki octu jabłkowego","½ płaskiej łyżeczki soli",
      "½ łyżeczki czarnuszki","szczypta Erevii"
    ],
    roznice:["15 g mąki praż w 140&nbsp;°C przez 8 minut i całkowicie ostudź.","Bez kminku i kolendry."],
    potem:"Przed jedzeniem lekko podpiec.",
    mieszanka:[["mąka laskowa zwykła","850 g"],["mąka laskowa podprażona","150 g"],
      ["mąka bambusowa","60 g"],["drożdże nieaktywne","60 g"],["sól","35 g"],
      ["Erevia","40 g"],["proszek do pieczenia","15 g"]]
  },
  {
    id:"fermentowany", grupa:"eksperymenty", nazwa:"Fermentowany", kolor:"#B03A48",
    opis:"Eksperyment aromatyczny. Nie spodziewamy się wzrostu — chodzi o zapach.",
    skladniki:["Wszystko jak w Klasycznym, ale bez drożdży nieaktywnych","2 łyżeczki drożdży piekarskich","20 ml letniej wody","¼ łyżeczki zwykłego cukru"],
    roznice:["Zaczyn: wymieszaj drożdże, wodę i cukier. Zostaw na 30–45 minut, potem wmieszaj do masy.","Cukier, nie Erevia — erytrytol i stewia są niefermentowalne, drożdże ich nie ruszą. Cukier zjedzą w całości."],
    potem:"Przed jedzeniem lekko podpiec.",
    mieszanka:[["mąka laskowa","1000 g"],["mąka bambusowa","60 g"],["sól","40 g"],
      ["Erevia","40 g"],["proszek do pieczenia","15 g"],["czarnuszka","20 g"],
      ["kminek","15 g"],["kolendra","5 g"]],
    mieszankaNota:"Jak klasyczna, ale bez drożdży nieaktywnych. Drożdże piekarskie zawsze świeże."
  },
  {
    id:"laskowo-maslany", grupa:"eksperymenty", nazwa:"Laskowo-Maślany", kolor:"#E07A3F",
    opis:"Maślany posunięty o krok dalej: drugie żółtko i więcej masła.",
    skladniki:["1 jajko","2 żółtka","35 g mąki laskowej","2 g mąki bambusowej","20 g masła",
      "1½ łyżeczki drożdży nieaktywnych","½ łyżeczki proszku do pieczenia",
      "½ łyżeczki octu jabłkowego","szczypta soli","½ łyżeczki Erevii"],
    roznice:["Bez przypraw.","Ciasto będzie cięższe do złożenia z pianą — dodawaj ją w trzech partiach."],
    potem:"Tego się nie odpieka ponownie.",
    mieszanka:[["mąka laskowa","1000 g"],["mąka bambusowa","60 g"],["drożdże nieaktywne","45 g"],
      ["sól","20 g"],["Erevia","60 g"],["proszek do pieczenia","15 g"]],
    mieszankaNota:"Jak maślana."
  },
  {
    id:"sezamowy", grupa:"eksperymenty", nazwa:"Sezamowy", kolor:"#C9A227",
    opis:"Sezam pracuje dwa razy: w cieście daje tło, na wierzchu chrupnięcie.",
    skladniki:["Wszystko jak w Klasycznym","8 g lekko podprażonego sezamu do ciasta","5 g sezamu na wierzch"],
    roznice:["Sezam podpraż na suchej patelni do pierwszego zapachu i wystudź."],
    potem:"Przed jedzeniem lekko podpiec.",
    mieszanka:[["mąka laskowa","1000 g"],["mąka bambusowa","60 g"],["drożdże nieaktywne","60 g"],
      ["sól","40 g"],["Erevia","40 g"],["proszek do pieczenia","15 g"],
      ["czarnuszka","20 g"],["kminek","15 g"],["kolendra","5 g"]],
    mieszankaNota:"Jak klasyczna. Sezam trzymaj osobno — jest tłusty i zjełczeje pierwszy."
  },
  {
    id:"czarnuszka-wierzch", grupa:"eksperymenty", nazwa:"Czarnuszka na wierzchu", kolor:"#37474F",
    opis:"To samo ziarno, inne miejsce. Na wierzchu zostaje ostre przy każdym kęsie.",
    skladniki:["Wszystko jak w Klasycznym, ale bez czarnuszki w cieście","1 łyżeczka czarnuszki na wierzch"],
    roznice:["Powierzchnię zwilż przed posypaniem — na suchej ziarno nie usiądzie."],
    potem:"Przed jedzeniem lekko podpiec.",
    mieszanka:[["mąka laskowa","1000 g"],["mąka bambusowa","60 g"],["drożdże nieaktywne","60 g"],
      ["sól","40 g"],["Erevia","40 g"],["proszek do pieczenia","15 g"],
      ["kminek","15 g"],["kolendra","5 g"]],
    mieszankaNota:"Jak klasyczna, bez czarnuszki."
  },
  {
    id:"pekanowy", grupa:"eksperymenty", nazwa:"Pekanowy", kolor:"#8D4E2A",
    opis:"Pekan jest słodszy i bardziej maślany od laskowego. Ciasto wyjdzie tłustsze.",
    skladniki:["2 jajka","25 g mąki laskowej","10 g drobno zmielonych pekanów","2 g mąki bambusowej",
      "10 g masła","2 łyżeczki drożdży nieaktywnych","½ łyżeczki proszku do pieczenia",
      "½ łyżeczki octu jabłkowego","½ płaskiej łyżeczki soli",
      "½ łyżeczki czarnuszki","¼ łyżeczki kminku","szczypta kolendry","szczypta Erevii"],
    roznice:[],
    potem:"Przed jedzeniem lekko podpiec.",
    mieszanka:[["mąka laskowa","700 g"],["mielone pekany","300 g"],["mąka bambusowa","60 g"],
      ["drożdże nieaktywne","60 g"],["sól","35 g"],["Erevia","40 g"],["proszek do pieczenia","15 g"]],
    mieszankaNota:"Pekan jest tłusty — rób mniejsze partie."
  },
  {
    id:"kawowy", grupa:"eksperymenty", nazwa:"Kawowy", kolor:"#4E342E",
    opis:"Do masła i kremowego serka. Espresso instant, nie mielona kawa.",
    skladniki:["1 jajko","1 żółtko","35 g mąki laskowej","2 g mąki bambusowej","15 g masła",
      "½ łyżeczki proszku do pieczenia","½ łyżeczki octu jabłkowego",
      "½ łyżeczki kawy espresso instant","szczypta soli","½ łyżeczki Erevii",
      "5 kropli waniliowych N!CK'S Stevia Drops"],
    roznice:["Bez drożdży nieaktywnych.","Mielona kawa zostawi w cieście piasek — musi być instant."],
    potem:"Tego się nie odpieka ponownie.",
    mieszanka:[["mąka laskowa","1000 g"],["mąka bambusowa","60 g"],["Erevia","60 g"],
      ["sól","20 g"],["proszek do pieczenia","15 g"]],
    mieszankaNota:"Jak waniliowa. Kawę i krople dodawaj świeżo."
  },
  {
    id:"arachidowy", grupa:"eksperymenty", nazwa:"Laskowo-Arachidowy", kolor:"#C77D3C",
    opis:"Pięć gramów to niewiele, ale orzeszek ziemny jest głośny.",
    skladniki:["2 jajka","30 g mąki laskowej","5 g mąki z orzeszków ziemnych","2 g mąki bambusowej",
      "10 g masła","2 łyżeczki drożdży nieaktywnych","½ łyżeczki proszku do pieczenia",
      "½ łyżeczki octu jabłkowego","½ płaskiej łyżeczki soli",
      "½ łyżeczki czarnuszki","¼ łyżeczki kminku","szczypta kolendry","szczypta Erevii"],
    roznice:[],
    potem:"Przed jedzeniem lekko podpiec.",
    mieszanka:[["mąka laskowa","850 g"],["mąka arachidowa","150 g"],["mąka bambusowa","60 g"],
      ["drożdże nieaktywne","60 g"],["sól","35 g"],["Erevia","40 g"],["proszek do pieczenia","15 g"]]
  },
  {
    id:"cytrynowy", grupa:"eksperymenty", nazwa:"Cytrynowo-Maślany", kolor:"#C9B00E",
    opis:"Skórka daje olejek, nie kwas — dlatego nie kłóci się z masłem.",
    skladniki:["1 jajko","1 żółtko","35 g mąki laskowej","2 g mąki bambusowej","15 g masła",
      "skórka z ½ cytryny","½ łyżeczki proszku do pieczenia","½ łyżeczki octu jabłkowego",
      "szczypta soli","½ łyżeczki Erevii","5 kropli waniliowych N!CK'S Stevia Drops"],
    roznice:["Bez drożdży nieaktywnych.","Ścieraj samą żółtą warstwę — biała pod spodem jest gorzka."],
    potem:"Tego się nie odpieka ponownie.",
    mieszanka:[["mąka laskowa","1000 g"],["mąka bambusowa","60 g"],["Erevia","60 g"],
      ["sól","20 g"],["proszek do pieczenia","15 g"]],
    mieszankaNota:"Jak waniliowa. Cytrynę zawsze świeżo startą."
  }
];
