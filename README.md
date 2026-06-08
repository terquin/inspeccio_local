# 🗺️ Inspecció de Camp - PWA

**Inspecció de Camp** és una Aplicació Web Progressiva (PWA) dissenyada per facilitar la recollida de dades geolocalitzades, fotografies i atributs directament sobre el terreny, pensada especialment per treballar en entorns sense connexió a internet (offline) i ser 100% compatible amb programari SIG com **QGIS**.

---

## 🎯 Per què serveix?

Aquesta aplicació soluciona el problema clàssic del treball de camp: la pèrdua de cobertura i la saturació de la memòria del telèfon en fer moltes fotos. 

Serveix per:
* **Inventari de camp:** Registrar elements urbans, forestals, agraris o incidències amb les seves coordenades exactes (GPS).
* **Treball Offline:** Funciona sense necessitat de dades mòbils un cop instal·lada.
* **Georeferenciació de Fotos:** Incrusta les coordenades (EXIF) directament als metadades de la imatge de forma automàtica.
* **Integració directa amb QGIS:** Exporta tota la teva feina (punts, atributs i fotos) en un únic arxiu `.zip` que conté un GeoJSON estàndard i la carpeta d'imatges perfectament vinculada.

---

## ✨ Característiques Principals

* **Camps Dinàmics:** Crea els teus propis formularis des de la mateixa app (Text, Números, Desplegables, etc.) sense tocar codi.
* **Rendiment Extrem (Zero-RAM Overhead):** Les fotografies es processen i s'hi injecta el GPS binàriament sense passar per cadenes de text (Base64), evitant que l'app es pengi en dispositius Android antics o amb poca memòria RAM.
* **Dictat per veu:** Permet omplir els camps de text llargs utilitzant el reconeixement de veu del dispositiu.
* **Gestió d'Estat Local (IndexedDB):** Les dades i les imatges es desen de forma segura a la memòria interna del navegador.
* **Importació/Exportació Completa:** Pots exportar la teva feina, enviar-la per correu i importar-la a un altre dispositiu mòbil (o al mateix) per continuar on ho vas deixar.

---

## 🚀 Com instal·lar-ho (Pas a pas)

Com que és una PWA, no es descarrega des de Google Play ni l'App Store, sinó directament des de la web. L'únic requisit és que estigui allotjada en un servidor segur (`https`).

### 1. Preparar l'allotjament (Via GitHub Pages)
1. Crea un repositori a [GitHub](https://github.com/).
2. Puja-hi els 3 arxius essencials d'aquest projecte:
   * `index.html` (L'aplicació principal)
   * `manifest.json` (Configuració de l'App)
   * `sw.js` (Service Worker pel funcionament Offline)
3. Ves a **Settings** > **Pages**. A "Source", selecciona la branca `main` o `master` i guarda. 
4. En pocs minuts, GitHub et proporcionarà un enllaç (ex: `https://el-teu-usuari.github.io/inspeccio-camp/`).

### 2. Instal·lació al Mòbil (Android / iOS)
1. Obre el navegador (Chrome a Android, Safari a iOS).
2. Introdueix l'enllaç de la teva GitHub Page.
3. Al menú del navegador (els 3 puntets a dalt a la dreta), selecciona **"Afegeix a la pantalla d'inici"** o **"Instal·la l'aplicació"**.
4. S'afegirà una icona a les teves aplicacions. A partir d'ara, obre-la des d'allà. L'app ocuparà tota la pantalla i ja no necessitaràs internet per fer-la servir.

---

## 🛠️ Com funciona? (Guia d'ús)

1. **Configuració Inicial:**
   * Obre l'aplicació i clica a la roda dentada (⚙️).
   * Defineix el **Nom de la capa**. Això servirà de prefix per a tots els arxius i carpetes que s'exportin.
   * A "Camps del Formulari", afegeix tots els atributs que necessitis per a la teva feina (ex: *Alçada, Espècie, Diàmetre, Estat de conservació*).

2. **Recollir Dades:**
   * Al mapa, clica a l'objectiu de localització (creueta) per centrar el teu GPS.
   * Clica el botó **[ + ]** blau per crear un nou punt.
   * Omple el formulari dinàmic, pren les fotografies (pots triar la qualitat de compressió) i clica a "Guardar Punt".

3. **Exportar a QGIS:**
   * En acabar la jornada, obre les opcions (⚙️).
   * Clica a **Exportar ZIP (GeoJSON + Fotos)**.
   * Es descarregarà un arxiu comprimit. Extreu-lo al teu ordinador i arrossega l'arxiu `.geojson` directament dins de QGIS. Si configures les rutes d'imatge a les propietats de la capa a QGIS, podràs veure les teves fotos amb un clic!

4. **Neteja i Manteniment:**
   * Un cop tinguis les dades assegurades al teu ordinador, pots utilitzar el botó **Esborrar totes les dades** per buidar el telèfon i preparar-lo per al següent dia de camp.
   * També disposes d'un botó **Netejar memòria cau** per eliminar residus fotogràfics de punts cancel·lats.

---

## 📂 Estructura d'Arxius

* `index.html`: Conté tota l'estructura visual (Tailwind CSS), el mapa (Leaflet), la lògica de compressió d'imatges i gestió IndexedDB.
* `manifest.json`: Arxiu requerit pels navegadors mòbils per identificar la web com una App, definir els colors, l'orientació i les icones.
* `sw.js`: El "Service Worker". És un script intermediari que s'encarrega d'emmagatzemar a la memòria cau els fitxers necessaris perquè l'app carregui en mode "Mode Avió".
