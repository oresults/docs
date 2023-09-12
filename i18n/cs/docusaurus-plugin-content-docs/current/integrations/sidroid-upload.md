---
sidebar_position: 4
---

# Nahrání z aplikace SI-Droid Event
Přehledný návod jak aplikaci propojit s online výsledky **[OResults](https://oresults.eu/)** jen pomocí mobilního zařízení připojeného do internetu (přes Wifi/hotspot nebo mobilní data). Poskytni závodníkům jednoduše nově vyčtená data a udělej tak závod atraktivnější.

:::caution Upozornění
Funguje pouze na mobilních zařízeních s operačním systémem `Android`.
:::

## Appka SI-Droid Event

<img src="/img/si-droid-icon.png" alt="SI-droid" />

- **OS**: Android (jediný podporovaný)
- **Odkaz ke stažení**: **[zde](https://play.google.com/store/apps/details?id=se.joja.sidroid.event.full)**

Oblíbená a velmi hojně využívaná mobilní aplikace pro zjednodušení práce při pořádání tréninku či dokonce závodu se SPORTident krabičkami. Jedná se o placenou aplikaci. Jestli appku ještě nemáš, tak neváhej a pořiď si ji. Nebudeš litovat.

## SIDroid OResults Connector

<img src="/img/sidroid-oresults-connector-icon
.jpg" width="150px" alt="SIDroid OResults Connector" /> 

- **OS**: Android (jediný podporovaný)
- **Download link**: **[zde](https://play.google.com/store/apps/details?id=com.yogevm15.sidroid_oresults_connector)**

Umožňuje jednoduše propojit `SI-Droid Event` s `OResults.eu`. Stačí jen vyplnit `port` výsledkové služby SI-Droid aplikace a `Api key` z webu OResults získaný v nastavení závodu a spustit nahrávání v požadovaném intervalu.

## Nastavení krok za krokem
### 1. Vytvoř nový závod
- zaregistruj se zdarma na **[OResults.eu](https://oresults.eu/register)**
- klikni na `Create +` v sekci `My events` a vyplň detaily nového závodu
- přepínač `Is Published` nech pro potřeby testování vypnutý a klikni na `Save changes`
- zkopíruj si `Api key` v sekci `Tools` na pravé straně obrazovky

  <img src="/img/oresults-events.jpg" align="top" width="30%" style={{marginRight: "15px"}}  />
  <img src="/img/oresults-event-settings.jpg" align="top" width="30%" style={{marginRight: "15px"}}  />
  <img src="/img/oresults-event-apikey.jpg" align="top" width="30%" />

### 2. Nastav výsledkovou službu v SI-Droidu
- V libovolné záložce `SI-Droid Event` klikni na tři tečky v pravém horním rohu a vyber `Nastavení`
- V `Nastavení` rozlikni detail `Výsledkové služby`
- Zaškrtni `Zapnout výsledkovou službu` pro spuštění služby
- Zkopíruj si číslo `portu` v sekci `Port výsledkové služby`

  <img src="/img/si-droid-01-three-dots.jpg" align="top" width="40%" style={{marginRight: "15px", marginBottom: "15px"}}  />
  <img src="/img/si-droid-02-menu.png" align="top" width="40%" style={{marginRight: "15px", marginBottom: "15px"}}  />

  <img src="/img/si-droid-03-result-service.png" align="top" width="30%" style={{marginRight: "15px"}}  />
  <img src="/img/si-droid-04-tick-and-copy.png" align="top" width="29%" />

### 3. Propoj výsledkovou službu s OResults a spusť nahrávání
- Spusť aplikaci `SIDroid OResults Connector`
- Vyplň `Api key` a číslo `port` výsledkové služby
- Nastav posuvníkem `Upload internval` interval nahrávání v sekundách
- Tlačítkem `Start uploading` zapni nahrávání

  <img src="/img/sidroid-oresults-connector-01-enter-api-key-and-port.jpg" align="top" width="30%" style={{marginRight: "15px"}} />
  <img src="/img/sidroid-oresults-connector-02-upload-interval-and-events-log.jpg" align="top" width="30%" style={{marginRight: "15px"}} />

:::tip
Okno aplikace má ve spodní části log nahrávání (každé nahrání má svůj detailní záznam).
:::

:::tip
Aplikace `SIDroid OResults Connector` automaticky generuje unikátní `reg. číslo` pro každého závodníka, takže ho již není nutné ručně přidávat pro závodníky běžící bez čipu.
:::

### 4. Sdílej závod
- využij přímé možnosti tisku QR kódu s odkazem na Tvůj závod nebo kód přidej na web závodu

<img src="/img/oresults-event-apikey.jpg" align="top" width="30%" />

:::danger Důležité
Nezapomeň přepnout `Is Published` až budeš chtít závod zveřejnit.
:::

### 5. Mrkni na [OResults.eu](https://oresults.eu/)
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
Vytvoření startovky "na krabičku" v externím programu ([QuickEvent](https://github.com/Quick-Event/quickbox), [MeOS](https://www.melin.nu/meos/en/), [OE12](https://sportsoftware.de/orienteering/oe), ...) umožní ruční nahrání na OResults a zobrazení všech přihlášených/startujících závodníků. Je tak vidět kdo ještě nedoběhl, resp kdo si ještě nevyčetl a zobrazení není před startem závodu prázdné.

<p align="center" width="100%">
  <img src="/img/si-droid-08-startlist-upload.jpg" align="center" width="40%" />
</p>

### 3. Přidání radikontrol
S využitím [Mobilní aplikace](../tutorials/bluebox-mobile.md) je možné poskytovaná online data ještě vylepšit o skutečnou (jednu a víc) radiokontrolu.

## Podpora
V případě potíží s fungováním neváhej a napiš na oficiální podporu OResults na email tech@oresults.eu.