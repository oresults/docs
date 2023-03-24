---
sidebar_position: 5
---

# Nahrání z aplikace SI-Droid Event
Tutorial how to upload results to **[OResults](https://oresults.eu/)** service using only mobile device connected to the internet (via Wifi/hotspot or mobile data). Make the event even more attractive to participants by sharing the results online.

:::caution
It works only on mobile devices with Android operating system.
:::

## Appka SI-Droid Event

<img src="/img/si-droid-icon.png" alt="SI-droid" />

- **OS**: Android (jediný podporovaný)
- **Odkaz ke stažení**: **[zde](https://play.google.com/store/apps/details?id=se.joja.sidroid.event.full)**

Favorite and very popular mobile app that is used to arrange orienteering events with SPORTident units. The app is paid, but the investment is definitely worth it and it's lifetime. Just buy it if you don't already have it, you won't regret.

## Appka Automate

<img src="/img/automate-icon.jpg" alt="Automate" />

- **OS**: Android (jediný podporovaný)
- **Odkaz ke stažení**: **[zde](https://play.google.com/store/search?q=automate&c=apps)**

Free powerful mobile app that allows you to automate almost any process in your device. After installation and the first run you need to grant the right permissions.

## Nastavení krok za krokem
### 1. Create a new event
- zaregistruj se zdarma na **[OResults.eu](https://oresults.eu/register)**
- klikni na `Create +` v sekci `My events` a vyplň detaily nového závodu
- přepínač `Is Published` nech pro potřeby testování vypnutý a klikni na `Save changes`
- zkopíruj si `Api key` v sekci `Tools` na pravé straně obrazovky

  <img src="/img/oresults-events.jpg" align="top" width="30%" style={{marginRight: "15px"}} />
  <img src="/img/oresults-event-settings.jpg" align="top" width="30%" style={{marginRight: "15px"}} />
  <img src="/img/oresults-event-apikey.jpg" align="top" width="30%" />

### 2. Set up regular export of results
- v záložce `RESULTS` v appce `SI-Droid Event` klikni na tři tečky v pravém horním rohu a zvol `Share Automatic`
- zaklikni formát `Results for Eventor (IOFv3 XML)`
- set the interval value, for example, 30 sec (the shortest possible)
- vyber adresář, do kterého se bude exportovat
- kliknutím na šedivé tlačítko automatický export zapneš (`SHARING RUNNING`)

  <img src="/img/si-droid-01-three-dots.jpg" align="top" width="20%" style={{marginRight: "15px"}} />
  <img src="/img/si-droid-02-menu.jpg" align="top" width="20%" style={{marginRight: "15px"}} />
  <img src="/img/si-droid-03-settings.jpg" align="top" width="20%" style={{marginRight: "15px"}} />
  <img src="/img/si-droid-04-start.jpg" align="top" width="20%" />

### 3. Get and import Automate flow
- stáhni flow (**[klikni zde](/attachments/oresults-upload.flo)**)
- načti flow do `Automate` appky - tři tečky v pravém horním menu a vyber `Import`

  <img src="/img/automate-flow-01-list.jpg" align="top" width="45%" style={{marginRight: "15px"}} />
  <img src="/img/automate-flow-02-import.jpg" align="top" width="45%" />

### 4. Start flow and follow the instructions
- otevři naimportované flow (klikni na `oresults-upload` nebo podobnou položku, která se importem přidala) a zmáčkni tlačítko `START`
- postupně se objeví dvě okna - `Set event Api key` a výběr xml souboru s výsledky
  - vlož zkopírovaný `Api key`, potvrď `OK`
  - vyber xml soubor s výsledky (soubor musí existovat, takže nejdříve spusť automatický export), volbu potvrď `OK`

  <img src="/img/automate-flow-03-start.jpg" align="top" width="30%" style={{marginRight: "15px"}} />
  <img src="/img/automate-flow-04-set-apikey.jpg" align="top" width="30%" style={{marginRight: "15px"}} />
  <img src="/img/automate-flow-05-select-file.jpg" align="top" width="30%" />

:::caution
To close the pop-up window, you must enter any value, e.g. an invalid one and select xml file.
:::

### 5. Share event
- využij přímé možnosti tisku QR kódu s odkazem na Tvůj závod nebo kód přidej na web závodu

<img src="/img/oresults-event-apikey.jpg" align="top" width="30%" />

:::danger
Don't forget to switch `Is Published` if you want to publish the event.
:::

### 6. Check out [OResults.eu](https://oresults.eu/)
- naskenuj QR kód a sleduj kámoše, kámošky, soupeře, soupeřky, klubové kolegy a kolegyně nebo rodinu jak se jim dařilo

:::tip
Přepínat mezi nastavením závodu a zobrazením dat ze závodu je možné tlačítkem v levém horním rohu (musíš být přihlášený)
:::

## Pokročilejší nastavení
### 1. More columns/radiocontrols
Další sloupce/data je možné přidat (vyplní se až po vyčtení) po importu souboru s tratěmi výběrem konkrétních kódů v sekci `Prepare` v nastavení závodu.

Tohle nastavení:
<img src="/img/oresults-event-select-radiocontrols.png" />

zobrazí (ukázka různých kategorií):
<img src="/img/oresults-event-data-columns01.png" />
<img src="/img/oresults-event-data-columns02.png" />

místo obyčejného:
<img src="/img/oresults-event-data-columns03.png" />

:::caution
Without imported courses it is not possible to select radio controls.
:::

### 2. Upload start list
Creating a start list with a mass start in an external program (QuickEvent, MeOS, OE12, ...) and then manually uploading it to OResults will allow you to view all the competitors who should start, so you can see who hasn't read-out yet.

### 3. Add radicontrols
S využitím [Mobilní aplikace](./bluebox-mobile.md) je možné poskytovaná online data ještě vylepšit o skutečnou (jednu a víc) radiokontrolu.


## Známé chyby
### Expirované právo zápisu pro SI-Droid Event
- You have to reselect the directory for exporting the xml files from SI-Droid Event app in the export setting (`Location` section). Running the export is not enough! Expired permission results in the exported file not being overwritten. Export directory contains files like `results.xml`, `results(1).xml`, `results(2).xml`, ... Selecting the directory again updates the write permission.

### Ručně vložení závodníci
- Competitors who ran **without a card**, for example, only with a paper card with manual punching and were **manually entered** into the SI Droid Event will not get into the OResults web page. The card number works as a unique identifier without which the service doesn't work. Currently, it is not possible to manually add a card number (e.g. fictitious) in the SI Droid Event app.

## Podpora
V případě potíží s fungováním neváhej a napiš na oficiální podporu OResults na email tech@oresults.eu.