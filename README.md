# Associazione Pensionati Migros Ticino

Questa guida spiega come aggiornare i testi, pubblicare notizie e aggiungere fotografie al sito.

## Cambiare i testi

I testi si trovano in file Markdown con estensione `.md`. Apri il file indicato, modifica il testo e salva.

- **Home page:** `content/_index.md`
- **Associazione e informazioni:** cartella `content/associazione/`
- **Scopo:** `content/scopo.md`
- **Notizie:** cartella `content/notizie/`

Di norma è sufficiente modificare il testo nel file senza cambiare il codice o il layout del sito.

## Aggiungere una notizia

1. Crea una cartella per la notizia dentro `content/notizie/`, usando un nome breve senza spazi, per esempio `gita-autunnale`.
2. Crea al suo interno un file chiamato `index.md`.
3. Inserisci titolo, data e testo. Esempio:

   ```yaml
   ---
   title: "Gita autunnale"
   date: 2026-10-18
   draft: false
   ---
   ```

   Scrivi il testo della notizia sotto la seconda riga di tre trattini.

4. Salva la modifica. La notizia apparirà sul sito dopo la pubblicazione delle modifiche.

## Aggiungere fotografie

Ogni album fotografico ha una cartella dentro `content/foto/`.

1. Crea una cartella per l'evento, per esempio `content/foto/gita-autunnale/`.
2. Copia nella cartella le fotografie dell'evento. Per mantenere l'ordine, usa nomi come `001.jpg`, `002.jpg`, `003.jpg`.
3. Nella stessa cartella crea un file `index.md` con le informazioni dell'album:

   ```yaml
   ---
   title: "Gita autunnale"
   date: 2026-10-18
   location: "Ticino"
   ---
   ```

4. Salva la modifica. L'album e le fotografie appariranno nella galleria dopo la pubblicazione.

Prima di caricare le fotografie, ridimensionale se sono molto grandi. Verifica di avere il diritto di pubblicarle e, quando necessario, il consenso delle persone ritratte.

## Pubblicazione

Il sito viene pubblicato tramite GitHub Pages. **Prima di fare un commit e un push che pubblicano modifiche al sito, l'AI deve sempre spiegare le modifiche proposte e chiedere una conferma esplicita all'utente.** Senza conferma, le modifiche non devono essere pubblicate.
