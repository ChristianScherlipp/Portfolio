# Styleguide: Portfolio Midnight Glow

Dunkelblau, ein kühler Blauakzent, warmer Sand und weiche Lichtkugeln: Das ist der Styleguide für das Portfolio von Christian Scherlipp (Fullstack Developer, Angular, TypeScript, SCSS). Er beschreibt den Stand des gebauten Projekts, nicht nur die ursprüngliche Idee.

**Stand und Quellen:** Oktober 2026. Farben, Größen, Abstände und Verhalten sind aus dem Code übernommen (`src/styles/abstracts/_variables.scss`, `_mixins.scss` und die SCSS-Dateien der Komponenten). Größen in `rem` sind bei 16 px Basisgröße in px umgerechnet. Wo der Code vom ursprünglichen Entwurf abweicht, steht es in Kapitel 10. Was im Code nicht festgelegt ist, ist als **offen** markiert.

## 1. Design-Idee

Ein ruhiger, dunkler Nachthimmel als Fläche, dazu genau zwei Farben mit Charakter: kühles Hellblau für alles Wichtige und warmer Sand für Details und Ränder. Der Kontrast aus kalt und warm gibt der Seite Tiefe, ohne laut zu werden. Die Schriften stehen dazu bewusst im Gegensatz: eine klassische Garamond für Überschriften, eine kontrastreiche Didone für alles andere.

**Signature-Element:** weiche Lichtkugeln in Blau und Sand, die am Rand der Sektionen aus dem Dunkel leuchten, kombiniert mit feinen Kreisbögen. Dazu der große Foto-Kreis im Hero. Dazu kommen die Hover-Labels (Kapitel 6), die auf der ganzen Seite gleich aussehen.

## 2. Farben

Alle Werte stehen als SCSS-Variablen in `_variables.scss`.

| Rolle | Farbe | Hex | RGB | Variable |
|---|---|---|---|---|
| Basis (Seitenhintergrund, Tooltip-Fläche) | Nachtblau | #0D1827 | rgb(13, 24, 39) | `$basic-bg-color` |
| Fläche (Karten-Kopf, Chips, aktive Review-Karte) | Stahlblau dunkel | #24384F | rgb(36, 56, 79) | `$card-header-color` |
| Rand Karten | Blaugrau | #314967 | rgb(49, 73, 103) | `$card-border-color` |
| Feld-Hintergrund (Formular, Projekt-Info) | Fast Schwarzblau | #0C1623 | rgb(12, 22, 35) | `$field-bg-color` |
| Feld-Rand, Karten-Rand | Blaugrau hell | #395572 | rgb(57, 85, 114) | `$field-border-color` |
| Trennlinien zwischen Sektionen | Dunkles Blaugrau | #2C4054 | rgb(44, 64, 84) | `$Separator-lines-color` |
| Akzent Blau (Buttons, Highlights, zweites Wort in Überschriften) | Himmelblau | #9AC1F1 | rgb(154, 193, 241) | `$accent-blue` |
| Akzent Sand (Icons, Outline-Button, Lichtkugel) | Sand | #D7C3AF | rgb(215, 195, 175) | `$accent-sand` |
| Text auf Akzent (Buttons, aktiver Sprach-Schalter) | Nachtblau | #0D1827 | rgb(13, 24, 39) | `$text-accent` |
| Text | Fast Weiß | #F5F5F5 | rgb(245, 245, 245) | `$text-color` |
| Foto-Kreis Rand | Eisblau | #83A3C3 | rgb(131, 163, 195) | `$photo-border-color` |
| Lichtkugel Blau | Glow Blau | #6C91BF | rgb(108, 145, 191) | `$light-sphere-blue` |
| Lichtkugel Sand | Glow Sand | #D2C6B5 | rgb(210, 198, 181) | `$light-sphere-sand` |
| Skill-Reihe Hintergrund | Schwarz 40 % | rgba(0, 0, 0, 0.4) | | `$skill-row-bg-color` |
| Skill nicht gelernt (ausgegraut) | Grau 16 % | #54545428 | | `$skill-grayed-out-color` |
| Fehler | Korallrot hell | #FF8A8A | rgb(255, 138, 138) | `$failed-color` |
| Erfolg | Mintgrün | #8FD9A8 | rgb(143, 217, 168) | `$succesful-color` |

**Regeln:**

- Der Blau-Akzent ist für alles reserviert, was klickbar oder wichtig ist: Buttons, aktiver Sprach-Schalter, das zweite Wort der Überschriften, der Review-Titel, Projekt-Titel und Projekt-Buttons. Sand ist Deko und Detail: Icons, der Outline-Button "More about me", Lichtkugeln.
- Skill-Icons wechseln sich ab: ungerade Positionen in Sand, gerade in Blau (`:nth-child(even)`). Skills, die noch nicht gelernt sind, sind ausgegraut.
- Alle Texte sind hell auf dunkel. Nie Blau-Text auf Sand oder Sand-Text auf Blau.
- Kontraste (berechnet): Text auf Basis 16,4:1, Akzent Blau auf Basis 9,6:1, Nachtblau auf Blau-Button 9,6:1, Sand auf Basis 10,5:1, Text auf Fläche 11,0:1, Blau auf Fläche 6,4:1, Fehlerfarbe auf Feld 8,0:1. Alles über dem Mindestwert 4,5:1.
- Ausnahme Formularfelder: Der Feld-Rand #395572 hat nur 2,4:1 zum Feld-Hintergrund. Für Bedienelemente werden 3:1 verlangt. Das ist offen, siehe Kapitel 10.

## 3. Schriften

Zwei Familien, beide lokal eingebunden (keine Verbindung zu Google-Servern, so steht es auch in der Datenschutzerklärung):

- **EB Garamond** für alle Überschriften (`h1` bis `h6`)
- **Playfair Display** für alle anderen Texte: Logo-Schriftzug, Rolle, Fließtext, Navigation, Buttons, Labels, Formular, Footer

Die Dateien liegen in `public/assets/fonts/` als Variable-Fonts (`EBGaramond-VariableFont_wght.ttf`, `PlayfairDisplay-VariableFont_wght.ttf`), eingebunden per `@font-face` in `src/styles/base/_typography.scss`. Gewichte laut Code: 700 (Überschriften, Logo), 600 (Kartentitel, Buttons, Review-Autor), 400 (Fließtext).

```scss
@font-face {
  font-family: 'EB Garamond';
  src: url('/assets/fonts/EBGaramond-VariableFont_wght.ttf') format('truetype');
  font-weight: 400 800;
  font-display: swap;
}
@font-face {
  font-family: 'Playfair Display';
  src: url('/assets/fonts/PlayfairDisplay-VariableFont_wght.ttf') format('truetype');
  font-weight: 400 900;
  font-display: swap;
}
body { font-family: 'Playfair Display', serif; }
h1, h2, h3, h4, h5, h6 { font-family: 'EB Garamond', serif; }
```

**Hinweis zur Lesbarkeit:** Playfair Display hat einen starken Kontrast zwischen dicken und dünnen Strichen. Auf dunklem Grund wird sie unter etwa 16 px schnell anstrengend. Im Code gibt es mobil kleinere Größen (13 bis 14 px bei Chips und Skill-Namen), siehe Kapitel 10.

Größenskala (aus dem Code, Desktop bei 1440 px, mobil bei 320 px; `fluid(a, b)` skaliert linear zwischen 320 und 1440 px):

| Element | Desktop | Mobil | Gewicht |
|---|---|---|---|
| Logo-Schriftzug (Header) | 34 px (`fluid(18, 34)`) | 18 px | 700 |
| Logo-Schriftzug (Footer) | 32 px | 28 px | 700 |
| H1 Name im Hero | 83 px (`fluid(36, 83)`) | 36 px | 700 |
| Rolle "FULLSTACK DEVELOPER" | 21 px (`fluid(16, 21)`), Großbuchstaben, Buchstabenabstand 10 px | 16 px | 400 |
| Hero-Satz | 28 px (`fluid(16, 28)`) | 16 px | 400 |
| Hero-Button | 24 px | 24 px | nicht gesetzt |
| H2 Projekte, Kontakt | 53 px | 32 px bzw. 36 px (`fluid(32, 53)`, `fluid(36, 53)`) | 700 |
| H2 About me, Skill set | 64 px | 36 px (`fluid(36, 64)`) | nicht gesetzt |
| About-Text und Skills-Untertitel | 27 px | 16 px bzw. 12 px (Untertitel in Großbuchstaben) | 400 |
| Review-Titel (H2) | 36 px | 24 px (`fluid(24, 36)`) | 700 |
| Kontakt-Satz | 28 px | 18 px (`fluid(18, 28)`) | 400 |
| Projekt-Titel (H3) | 32 px | 18 px | 600 |
| Projekt-Beschreibung | 21 px, Zeilenhöhe 1,35 | 14 px | 400 |
| Projekt-Buttons | 21 px | (im Popup) | 600 |
| Nav | 20 px (`fluid(16, 20)`) | 20 px im Menü | 400 |
| About-Button | 24 px | 20 px | nicht gesetzt |
| Review-Text | 18,4 px, Zeilenhöhe 1,5 | 16 px | 400 |
| Chips (Technologien) | nicht gesetzt (erbt) | 13 px | 600 |
| Formularfelder, Erfolgsmeldung | 18 px | 18 px | 400 |
| Datenschutz-Checkbox | 16 px | 16 px | 400 |
| Fehlermeldung im Formular | 14 px | 14 px | 400 |
| Senden-Button | 24 px | 24 px | 600 |
| Footer-Copyright | 18 px | 16 px | 400 |
| Hover-Label | 16 px | 14 px (Hero-Bild), 16 px sonst | 400 |
| "SCROLL DOWN" | 16 px, Buchstabenabstand 4 px | | 400 |

## 4. Layout und Abstände

- **Container:** `.main-content` ist maximal 1440 px breit, zentriert, Sektionen sind durch eine 2 px Linie in #2C4054 getrennt. Der Hero ist bis 2100 px breit, sein Inhalt bis 1440 px. Bei Projekten und Kontakt 2 rem Seitenabstand ab 1440 px abwärts, mobil 1,5 rem.
- **Navigation:** Sticky, 6 rem hoch (mobil 5 rem), Logo links, vier Links (About me, Skills, Projects, Contact), rechts der Sprach-Schalter. Mobil wird daraus ein Burger-Menü.
- **Sprach-Schalter:** 9,125 × 2,875 rem (mobil 7,5 × 2,5 rem), 2 px Rand in Akzent Blau, 0,5 rem Rundung, ein gleitender Slider unter der aktiven Sprache.
- **Rundungen:** Projekt-Info-Karte und Projekt-Bild 2 rem, Review-Karten 1,5 rem, Sprach-Schalter, Felder, Projekt-Buttons 0,5 rem bis 1 rem, About- und Senden-Button sowie Tooltips 0,375 rem, Chips 1 rem (Pille), Foto-Kreis und Icon-Kreise 50 %. **Schatten:** keine. Tiefe kommt nur aus Lichtkugeln und Rändern.
- **Randstärke:** Sektionstrenner, Karten, Felder, Foto-Kreis, Sprach-Schalter 2 px.
- **Abstände:** Projekte untereinander 3 rem, im Projekt zwischen Bild und Info 4 rem, Innenabstand Sektion 3 rem (mobil 2,5 bis 3 rem, Seiten 1,5 rem), Abstände mobil halbiert.
- **Sektionshöhen (Desktop):** Hero 89 % der Fensterhöhe, About 30 rem, Skills 40 rem, jedes Projekt 35 rem, Review und Kontakt wachsen mit dem Inhalt. Footer mindestens 8 rem.

**Sektionsreihenfolge und Layout-Idee:**

1. **Navbar:** Logo links (Logo-Bild auf Platine plus Schriftzug "Chris" in Text und "tian" in Akzent Blau), vier Links, rechts DE/EN. Verlinkt per Anker auf `#about-me`, `#skills`, `#projects`, `#contact`.
2. **Hero:** Zwei Spalten. Links: Linie plus "I AM", darunter "Christian" in Text und "Scherlipp" in Akzent Blau, Rolle, Satz, Button "Let's talk!" (springt zum Kontakt) und drei Social-Icons (GitHub, Mail, LinkedIn). Rechts: großer Foto-Kreis (graustufig, 2 px Rand), dahinter Lichtkugeln und ein feiner Kreisbogen, daneben ein senkrechter Scroll-Hinweis. Mobil: Foto oben, Text darunter, Social-Icons ausgeblendet.
3. **About me:** Zwei Spalten. Links Titel, ein Absatz Text, Button "More about me" (Sand-Rand), der ein Lebenslauf-PDF herunterlädt. Rechts drei Info-Zeilen (Offen für Neues, Immer am Lernen, Teamplayer), je Icon-Kreis plus zwei Textzeilen. Mobil einspaltig.
4. **Skill set:** Titel links, Label "Technologies I Work With". Darunter zwei Laufband-Reihen mit je 8 Skills (Icon in Filmstreifen-Rahmen, Name darunter), gegenläufig, pausieren beim Hover. Ein Skill ist entweder gelernt oder ausgegraut.
5. **My Projects:** Titel, darunter Join, Sharkie und Pokedex als große Reihen. Bild (4:3, 2 rem Rundung) und Info-Karte (Titel in Blau, Technologie-Chips, Beschreibung, Buttons Github und Live Demo) wechseln die Seite: 1 und 3 Bild links, 2 Info links. Mobil: eine Karte pro Projekt, Tippen öffnet ein Popup mit beiden Buttons.
6. **Review:** Titel "What my colleagues say about me" in Akzent Blau, Karussell mit aktiver Karte in der Mitte und zwei abgeblendeten Nachbarn, darunter Pfeile und Punkte. Mobil nur die aktive Karte.
7. **Contact:** Zwei Spalten. Links Titel, Einladungssatz, Lichtkugel unten links. Rechts Formular: Name, E-Mail, Nachricht, Pflicht-Checkbox Datenschutz mit Link, Button "Send message".
8. **Footer:** Links Logo-Schriftzug mit "Legal Notice" und "Privacy Policy", Mitte Copyright "© Christian Scherlipp" mit Jahr, rechts GitHub und LinkedIn. Mobil untereinander.

Zusätzlich gibt es Unterseiten für Impressum (`/imprint`), Datenschutz (`/privacy-policy`) und "Coming soon" (`/coming-soon`, Ziel der Buttons des Projekts Join, bis es veröffentlicht ist). Sie öffnen im selben Fenster, Navbar und Footer bleiben sichtbar.

Die Skizzen sind nur eine Guideline: Sie zeigen dir, was wo sitzt, nicht wie es am Ende aussehen muss.

**Wireframe Hero:**

![Wireframe Hero](wireframe-hero.png)

**Wireframe About:**

![Wireframe About](wireframe-about.png)

**Wireframe Projekte:**

![Wireframe Projekte](wireframe-projects.png)

**Wireframe Kontakt:**

![Wireframe Kontakt](wireframe-contact.png)

(Die Wireframes sind der ursprüngliche Entwurf. Projekte und Review weichen davon ab, siehe oben.)

**Mobil (unter 900 px):**

- Alle Zweispalter (Hero, About, Kontakt) werden einspaltig. Im Hero steht das Foto über dem Text.
- Die Navigation wird zum Burger-Menü, der Sprach-Schalter bleibt sichtbar.
- Skills: nur die Größen werden angepasst, das Laufband bleibt.
- Projekte: eine gemeinsame Karte aus Bild (5:2) und Info, Github- und Live-Demo-Buttons erscheinen erst im Popup.
- Review: nur die aktive Karte, ohne Randverlauf.
- Die Seite ist von 320 bis 1440 px ausgelegt.

## 5. Bewegung und Animationen

- **Hero beim Laden:** Eyebrow, Name, Rolle, Satz und Button blenden nacheinander ein (`hero-fade-up`, ca. 0,6 s, 16 px von unten, 0,1 s Versatz).
- **Lichtkugeln:** driften sehr langsam (22 s pro Runde, 10 bis 14 px), nur `transform`.
- **Skills:** zwei Laufband-Reihen (28 s), die zweite läuft rückwärts. Beim Hover auf eine Reihe pausiert sie. Das Icon und der Name eines Skills heben sich um 0,5 rem, der Rahmen bleibt stehen, darüber erscheint das Label ("Learned" oder "I have a special interest in learning this").
- **Hover allgemein:** Buttons heben sich um ca. 2 px, Farbwechsel in 0,25 s. Review-Pfeile und Punkte reagieren mit Farbe.
- **Sprach-Schalter:** Die Füllung gleitet zur gewählten Seite.
- **Review:** Karten wechseln per `transform` und `opacity` (0,3 s).
- **Kontaktformular:** Erfolgs- und Fehlermeldung verschwinden nach 5 Sekunden wieder.

Grundregeln: Hover ca. 0,25 s, nur `transform` und `opacity` animieren, `prefers-reduced-motion` respektieren (dann keine Bewegung, nur Farbwechsel; im Hero ist das umgesetzt).

## 6. Zustände und Bedienbarkeit

- **Hover-Labels:** Ein einheitlicher Tooltip (Fläche #0D1827, 1 px Rand #395572, 0,375 rem Rundung, Text 16 px, Einblenden in 0,25 s und 4 px nach oben). Er erscheint an drei Stellen:
  - **Skills:** über dem Icon, "Learned" bzw. "I have a special interest in learning this".
  - **About me:** über dem Button, "Download CV" (DE: "Download Lebenslauf").
  - **Hero-Foto:** im unteren Bereich des Bildes, "Image contains AI-generated content" (DE: "Bild enthält KI-generierten Inhalt").
  Labels sind für Screenreader versteckt (`aria-hidden`). Auf Touch-Geräten gibt es keinen Hover, dort erscheinen sie nicht.
- **Formular:** Der Senden-Button ist deaktiviert, bis alle Felder gültig sind. Prüfungen: Name mindestens 3 Zeichen, E-Mail gültig und endet auf .de, .com oder .at, Nachricht mindestens 20 Zeichen, Datenschutz-Haken Pflicht. Fehlermeldungen stehen unter dem Feld in #FF8A8A, sobald das Feld berührt wurde.
- **Formular-Erfolg und Fehler:** Unter dem Button erscheint eine Meldung in #8FD9A8 ("Thanks! Your message has been sent.") oder in #FF8A8A ("Your message could not be sent. Please try again later."). Beide verschwinden nach 5 Sekunden. Die Felder werden nach dem Senden geleert.
- **Fokus im Formular:** Der Rand der Felder wird Akzent Blau (`:focus`), die Standard-Umrandung ist ausgeschaltet.
- **Alt-Texte:** Das Hero-Foto und die Projektbilder haben Alt-Texte. Lichtkugeln, Bögen und Deko-Kreise sind rein dekorativ und werden vor Screenreadern versteckt.
- **Sprache:** Deutsch und Englisch über ngx-translate (JSON-Dateien in `public/i18n`), Standardsprache ist Englisch. Der Sprach-Schalter ist per Tastatur erreichbar.

## 7. Bilder und Performance

- **Projektbilder:** `public/assets/img/projects/` (join.webp, sharkie.webp, pokedex.webp), Seitenverhältnis 4:3 am Desktop, mobil 5:2 zugeschnitten (`object-fit: cover`).
- **Foto:** `public/assets/img/chris.webp`, rund zugeschnitten, graustufig (`filter: grayscale(100%)`) mit 2 px Rand in Akzent Blau. Das Foto ist KI-generiert, darauf weist das Hover-Label hin.
- **Dateigröße:** Bilder als WebP, jedes unter ca. 100 KB. Weitere Bilder unterhalb des Hero mit `loading="lazy"`.
- **Lichtkugeln:** als CSS umgesetzt (runde Flächen mit `filter: blur(40px)` und Deckkraft 0,45), keine großen Bilddateien.
- **Build-Budget:** `hero.scss` liegt mit ca. 5,8 kB über der Warnschwelle von 4 kB pro Komponente, unter der Fehlergrenze von 8 kB.

## 8. Dein Signature-Element

Die Lichtkugeln mit Kreisbögen. Sie tauchen an drei Stellen auf: im Hero rechts hinter und neben dem Foto-Kreis (Blau und ein kleiner Sand-Punkt, dazu ein großer, feiner Kreisbogen), in der About-Sektion unten rechts und im Kontakt unten links. Umsetzung: absolut positionierte Elemente (`.light-sphere`, Mixin `light-sphere`) in Glow Blau und Glow Sand, mit Weichzeichner, an der Sektion abgeschnitten, sodass nur ein Teil der Kugel sichtbar ist.

## 9. Do's und Don'ts

**Do:**

- Blau nur für Klickbares und Wichtiges einsetzen, Sand nur für Details.
- Lichtkugeln immer am Rand anschneiden, nie komplett mitten im Bild.
- Zwei Schriften, klare Rollen: EB Garamond nur für `h1` bis `h6`, Playfair Display für alles andere.
- Genug dunkle Fläche lassen: Die Ruhe macht das Design aus.
- Neue Texte immer in beide JSON-Dateien (de und en) eintragen.

**Don't:**

- Keine Schatten und keine zusätzlichen Farben (außer Fehler und Erfolg).
- Kein Text auf den hellen Lichtkugeln.
- Keine Schrift unter 14 px, solange es sich vermeiden lässt.
- Keine hellen Sektionshintergründe, die Seite bleibt durchgehend dunkel.
- Keine externen Schriften oder Dienste einbinden, die Datenschutzerklärung sagt, es gibt keine.

## 10. Abweichungen und offene Punkte (Stand Code)

Hier steht, was im Code vom ursprünglichen Entwurf abweicht oder noch fehlt.

- [ ] **Feld-Rand:** Der Code nutzt #395572 (2,4:1). Für Bedienelemente sind 3:1 nötig, #6A8AAE hat 5,1:1.
- [ ] **Tastatur-Fokus:** Nur die Formularfelder zeigen einen Fokus (blauer Rand). Für Links, Buttons und den Sprach-Schalter ist kein eigener Fokus-Stil festgelegt. Empfehlung: 2 px Rahmen in Akzent Blau mit 3 px Abstand (`:focus-visible`).
- [ ] **Uneinheitliche Titelgrößen:** About me und Skill set haben 64 px, Projekte und Kontakt 53 px. Wenn das Absicht ist, bleibt es; sonst auf einen Wert vereinheitlichen.
- [ ] **Kleine Schrift mobil:** Chips und Skill-Namen haben mobil 13 px, die Vorgabe war mindestens 14 px.
- [ ] **Ausgegraute Skills:** `#54545428` ist fast unsichtbar. Das ist Absicht (Name und Label bleiben lesbar), der Kontrast zum Hintergrund ist aber sehr gering.
- [ ] **Hover-Labels auf Touch:** Das Label am Hero-Foto ist mobil nicht sichtbar. Wenn der KI-Hinweis auch mobil erscheinen soll, braucht er eine dauerhaft sichtbare Variante.
- [ ] **Testimonials:** Die drei Zitate im Review sind noch Platzhalter ("PLACEHOLDER quote ...") und müssen durch echte Texte ersetzt werden.
- [ ] **Join:** Github- und Live-Demo-Button führen bis zur Veröffentlichung auf die Coming-soon-Seite.
- [ ] **Seitentitel und Sprache:** `index.html` hat noch `lang="en"` und den Titel "Portfolio". Vorschlag für den Titel: "Christian Scherlipp · Fullstack Developer".
- [ ] **Lebenslauf-PDF:** liegt in `public/assets/documents/` und muss beim Deploy mit hochgeladen werden.
- [ ] **nginx:** Für Direktaufrufe von `/imprint` und `/privacy-policy` braucht der Server `try_files $uri /index.html;`.
- [ ] **Logo-Schriftzug:** Er ist ein `p`-Element und damit in Playfair Display. Soll er wie eine Überschrift in EB Garamond stehen, braucht er eine eigene Regel.
- [ ] **Kontaktskript:** `contact_form_mail.php` erlaubt jede Herkunft (`Access-Control-Allow-Origin: *`). Nach der Abgabe auf die eigene Domain einschränken.

## 11. Checkliste: Mindestanforderungen

- [x] Hero: voller Name und Rolle sichtbar
- [x] Navigation klar erreichbar (sticky, Burger-Menü mobil)
- [x] Sprachumschalter DE/EN
- [x] About me: Text, Info-Zeilen, Hinweis auf Offenheit für Remote oder vor Ort (Wohnort steht im Impressum)
- [x] Skills-Sektion mit gelernten und gewünschten Skills
- [x] Jedes Projekt: Beschreibung, Technologien, Github-Link, Live-Demo-Link (Join: Coming soon)
- [ ] Testimonials mit echten Zitaten (derzeit Platzhalter)
- [x] Kontaktformular mit Pflicht-Checkbox Datenschutz
- [x] Footer: Impressum und Datenschutzerklärung, ein Klick entfernt
- [x] LinkedIn- und GitHub-Links (Hero und Footer)
- [x] Foto im Kreis, mit Hinweis auf KI-Inhalt
- [ ] Sichtbarer Tastatur-Fokus auf Links, Buttons und dem Sprach-Schalter
- [x] Alt-Texte für Foto und Projektbilder
- [x] Bilder als WebP
- [ ] Kernfakten (Technologie-Chips) mindestens 14 px (mobil derzeit 13 px)
- [ ] Seitentitel gesetzt ("Christian Scherlipp · Fullstack Developer") und Favicon eingebunden (Favicon ist eingebunden, Titel offen)

## 12. Nächste Schritte

1. Lebenslauf-PDF und Testimonials fertigstellen.
2. `index.html`: Titel, `lang` und Meta-Description setzen.
3. nginx-Rewrite einrichten und den Build auf dem Server testen (Direktaufruf von `/imprint`, Formular, PDF-Download).
4. Danach die Punkte aus Kapitel 10 abarbeiten, zuerst Tastatur-Fokus und Feld-Rand.

> **Gut zu wissen**
>
> Dieser Styleguide ist mit KI-Unterstützung entstanden und an den Code des Portfolios angepasst. Er ist ein Arbeitsstand, keine geprüfte Vorgabe der Developer Akademie. Beim Design-Check deines fertigen Portfolios kann das Feedback der Designer an einzelnen Stellen abweichen. Dann gilt: Ihr Feedback hat Vorrang.
