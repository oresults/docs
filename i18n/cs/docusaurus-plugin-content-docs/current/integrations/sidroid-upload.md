---
sidebar_position: 4
---

# Nahrání z aplikace SI-Droid Event
Přehledný návod jak aplikaci propojit s online výsledky **[OResults](https://oresults.eu/)** jen pomocí mobilního zařízení připojeného do internetu (přes Wifi/hotspot nebo mobilní data). Poskytni závodníkům jednoduše nově vyčtená data a udělej tak závod atraktivnější.

:::caution Pozor
Funguje pouze na mobilních zařízeních s operačním systémem Android.
:::

## Appka SI-Droid Event

<img src="/img/si-droid-icon.png" alt="SI-droid" />

- **OS**: Android (jediný podporovaný)
- **Odkaz ke stažení**: **[zde](https://play.google.com/store/apps/details?id=se.joja.sidroid.event.full)**

Oblíbená a velmi hojně využívaná mobilní aplikace pro zjednodušení práce při pořádání závodu se SPORTident krabičkami. Jedná se o placenou aplikaci, kterou se vyplatí pořídit. Jestli appku ještě nemáš, tak neváhej a pořiď si ji hned. Nebudeš litovat.

## Appka Automate

<img src="/img/automate-icon.jpg" alt="Automate" />

- **OS**: Android (jediný podporovaný)
- **Odkaz ke stažení**: **[zde](https://play.google.com/store/search?q=automate&c=apps)**

Zdarma dostupná aplikace, která umožňuje automatizovat téměř všechny procesy v mobilních zařízeních. Po instalaci je při prvním spuštění nutné povolit všechna práva pro správné fungování.

## Nastavení krok za krokem
### 1. Vytvoř nový závod
- zaregistruj se zdarma na **[OResults.eu](https://oresults.eu/register)**
- klikni na `Create +` v sekci `My events` a vyplň detaily nového závodu
- přepínač `Is Published` nech pro potřeby testování vypnutý a klikni na `Save changes`
- zkopíruj si `Api key` v sekci `Tools` na pravé straně obrazovky

  <img src="/img/oresults-events.jpg" align="top" width="30%" style={{marginRight: "15px"}}  />
  <img src="/img/oresults-event-settings.jpg" align="top" width="30%" style={{marginRight: "15px"}}  />
  <img src="/img/oresults-event-apikey.jpg" align="top" width="30%" />

### 2. Nastav pravidelný export výsledků
- v záložce `RESULTS` v appce `SI-Droid Event` klikni na tři tečky v pravém horním rohu a zvol `Share Automatic`
- zaklikni formát `Results for Eventor (IOFv3 XML)`
- nastav interval exportu, např. 30 sec (nejkratší možný)
- vyber adresář, do kterého se bude exportovat
- kliknutím na šedivé tlačítko automatický export zapneš (`SHARING RUNNING`)

  <img src="/img/si-droid-01-three-dots.jpg" align="top" width="20%" style={{marginRight: "15px"}}  />
  <img src="/img/si-droid-02-menu.jpg" align="top" width="20%" style={{marginRight: "15px"}}  />
  <img src="/img/si-droid-03-settings.jpg" align="top" width="20%" style={{marginRight: "15px"}}  />
  <img src="/img/si-droid-04-start.jpg" align="top" width="20%" />

### 3. Stáhni a naimportuj Automate flow
- stáhni flow (**[klikni zde](/attachments/oresults-upload.flo)**)
- načti flow do `Automate` appky - tři tečky v pravém horním menu a vyber `Import`

  <img src="/img/automate-flow-01-list.jpg" align="top" width="45%" style={{marginRight: "15px"}} />
  <img src="/img/automate-flow-02-import.jpg" align="top" width="45%" />

### 4. Nastartuj flow a řiď se instrukcemi
- otevři naimportované flow (klikni na `oresults-upload` nebo podobnou položku, která se importem přidala) a zmáčkni tlačítko `START`
- postupně se objeví dvě okna - `Set event Api key` a výběr xml souboru s výsledky
  - vlož zkopírovaný `Api key`, potvrď `OK`
  - vyber xml soubor s výsledky (soubor musí existovat, takže nejdříve spusť automatický export), volbu potvrď `OK`

  <img src="/img/automate-flow-03-start.jpg" align="top" width="30%" style={{marginRight: "15px"}} />
  <img src="/img/automate-flow-04-set-apikey.jpg" align="top" width="30%" style={{marginRight: "15px"}} />
  <img src="/img/automate-flow-05-select-file.jpg" align="top" width="30%" />

:::caution Pozor
zavření vyskakovacích oken je možné vložením jakékoliv hodnoty (klidně fiktivní) a výběrem xml souboru
:::

### 5. Sdílej závod
- využij přímé možnosti tisku QR kódu s odkazem na Tvůj závod nebo kód přidej na web závodu

<img src="/img/oresults-event-apikey.jpg" align="top" width="30%" />

:::danger Pozor
Nezapomeň přepnout `Is Published` až budeš chtít závod zveřejnit.
:::

### 6. Mrkni na [OResults.eu](https://oresults.eu/)
- naskenuj QR kód a sleduj kámoše, kámošky, soupeře, soupeřky, klubové kolegy a kolegyně nebo rodinu jak se jim dařilo

:::tip
Přepínat mezi nastavením závodu a zobrazením dat ze závodu je možné tlačítkem v levém horním rohu (musíš být přihlášený)
:::

## Pokročilejší nastavení
### 1. Více sloupců/radiokontrol
Další sloupce/data je možné přidat (vyplní se až po vyčtení) po importu souboru s tratěmi výběrem konkrétních kódů v sekci `Prepare` v nastavení závodu.

Tohle nastavení:
<img src="/img/oresults-event-select-radiocontrols.png" />

zobrazí (ukázka různých kategorií):
<img src="/img/oresults-event-data-columns01.png" />
<img src="/img/oresults-event-data-columns02.png" />

místo obyčejného:
<img src="/img/oresults-event-data-columns03.png" />

:::caution Pozor
Bez nahraných tratí není možné radiokontroly vybrat.
:::

### 2. Nahrání startovky
Vytvoření startovky "na krabičku" v externím programu (QuickEvent, MeOS, OE12, ...) umožní ruční nahrání na OResults a zobrazení všech přihlášených/startujících závodníků. Je tak vidět kdo ještě nedoběhl, resp kdo si ještě nevyčetl a zobrazení není před startem závodu prázdné.

### 3. Přidání radikontrol
S využitím [Mobilní aplikace](./bluebox-mobile.md) je možné poskytovaná online data ještě vylepšit o skutečnou (jednu a víc) radiokontrolu.

## Známé chyby
### Expirované právo zápisu pro SI-Droid Event
- Při novém spuštění exportu dat je potřeba v appce SI Droid Event znovu vybrat adresář, do kterého se mají výsledky exportovat (část `Location`). Pouze spuštění exportu nestačí! Expirované právo způsobuje, že se soubory nepřepisují. Obsah adresáře s exprtovanými výsledky tak vypadá následovně: `results.xml`, `results(1).xml`, `results(2).xml`, ... Opakovaný výběr adresáře právo pro zápis obnoví.

### Ručně vložení závodníci
- Závodníci, kteří běželi **bez čipu** pouze s průkazkou a razili kleštičkami a byli do appky SI Droid Event **vloženi ručně**, se ve výsledcích na OResults nezobrazí. Číslo čipu se totiž používá jako jednoznačný identifikátor, bez kterého služba nefunguje. Aktuálně číslo čipu nejde (např. na fiktivní) v aplikaci ručně upravit.

## Podpora
V případě potíží s fungováním neváhej a napiš na oficiální podporu OResults na email tech@oresults.eu.