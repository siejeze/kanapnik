# Kanapniki

Keto pieczywo z mąki laskowej. Aplikacja na telefon — działa offline, instaluje się na ekranie głównym.

## Jak wrzucić na GitHuba (4 kroki)

1. Na github.com kliknij **New repository**. Nazwa: `kanapniki`. Ustaw **Public**. **Create**.
2. Na stronie nowego repo kliknij **uploading an existing file** i przeciągnij *zawartość* tego folderu — wszystkie 7 plików (nie sam folder). **Commit changes**.
3. **Settings → Pages**. W polu *Source* wybierz **Deploy from a branch**, gałąź `main`, katalog `/ (root)`. **Save**.
4. Po minucie–dwóch adres jest gotowy:
   `https://TWOJA-NAZWA.github.io/kanapniki/`

## Jak zainstalować na telefonie

Wejdź na ten adres w przeglądarce telefonu.

- **Android (Chrome)** — menu ⋮ → *Dodaj do ekranu głównego* (albo sam wyskoczy baner).
- **iPhone (Safari)** — przycisk udostępniania → *Dodaj do ekranu początkowego*.

Od tego momentu otwiera się jak zwykła aplikacja, na pełnym ekranie, bez paska przeglądarki.
Po pierwszym otwarciu działa też **bez internetu** — w kuchni, w piwnicy, wszędzie.

## Jak zmieniać przepisy

Wszystko siedzi w jednym pliku: **`przepisy.js`**. To zwykłe listy tekstu — piszesz tak, jak mówisz.

```js
{
  id:"nowy", grupa:"eksperymenty", nazwa:"Nazwa", kolor:"#D9542B",
  opis:"Jedno–dwa zdania.",
  skladniki:["2 jajka","35 g mąki laskowej","½ łyżeczki soli"],
  roznice:["Co robisz inaczej niż w instrukcji podstawowej."],
  potem:"Przed jedzeniem lekko podpiec.",
  mieszanka:[["mąka laskowa","1000 g"],["sól","40 g"]],
  mieszankaNota:"Opcjonalna uwaga pod mieszanką."
}
```

- `grupa` — `"sprawdzone"` albo `"eksperymenty"`
- `kolor` — dowolny kod HEX, to on maluje kafel i nagłówek
- `wOpracowaniu:true` — dokleja plakietkę „w opracowaniu"
- `roznice:[]` — zostaw puste, jeśli robisz dokładnie jak w instrukcji podstawowej

Po każdej zmianie w `przepisy.js` **podbij numer wersji w `sw.js`** (`kanapniki-v1` → `kanapniki-v2`).
Bez tego telefon będzie uparcie pokazywał starą wersję z pamięci offline.

## Pliki

| plik | co robi |
|---|---|
| `index.html` | cała aplikacja: wygląd i działanie |
| `przepisy.js` | **treść — tu edytujesz** |
| `manifest.webmanifest` | nazwa, ikona, kolor przy instalacji |
| `sw.js` | tryb offline |
| `icon-*.png` | ikony na ekranie głównym |
