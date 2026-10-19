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

Ogni notizia ha una propria cartella dentro `content/notizie/`. Nella cartella si
mettono il testo e **tutti i documenti e le immagini della notizia**:

```
content/notizie/gita-autunnale/
  index.md            il testo della notizia
  invito.pdf          documenti da scaricare (facoltativi)
  programma.jpg       immagini (facoltative)
```

1. Crea una cartella per la notizia dentro `content/notizie/`, usando un nome breve
   senza spazi né accenti, per esempio `gita-autunnale`. Il nome diventa l'indirizzo
   della pagina: `.../notizie/gita-autunnale/`.
2. Crea al suo interno un file chiamato `index.md`.
3. Inserisci titolo, data e testo. Esempio:

   ```yaml
   ---
   title: "Gita autunnale"
   date: 2026-10-18
   author: "Pasquale Branca"
   draft: false
   ---
   ```

   Scrivi il testo della notizia sotto la seconda riga di tre trattini.
   Con `draft: true` la notizia resta una bozza e non compare sul sito.

4. Se la notizia ha documenti o immagini, copiali nella stessa cartella e
   richiamali nel testo:

   - **PDF**, con un pulsante per scaricarlo:

     ```
     {{< pdf file="invito.pdf" title="Invito completo (PDF)" >}}
     ```

     Aggiungi `embed="true"` per mostrare il PDF anche dentro la pagina.
     Se il nome del file è sbagliato, il sito non viene pubblicato e l'errore
     indica la notizia e il file da correggere.

   - **Immagine:** `![Descrizione dell'immagine](programma.jpg)`

5. Salva la modifica. La notizia apparirà sul sito dopo la pubblicazione delle modifiche.

In alternativa, il comando `hugo new content notizie/gita-autunnale/index.md` crea
la cartella e il file `index.md` già pronti (come bozza).

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
