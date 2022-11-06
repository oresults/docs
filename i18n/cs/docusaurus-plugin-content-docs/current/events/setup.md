---
sidebar_position: 1
---

# Vytvoření a správa události

Podívejme se na to, jak snadno vytvářet a spravovat události v OResults.

## Vytvoření účtu pro organizátory

Pokud ještě žádný nemáte, vytvořte si bezplatný účet OResults pro organizátory (viz **[registrace](https://oresults.eu/register))**. Váš účet vám umožní přihlásit se do admin sekce OResults.

Zbytek návodu je věnován administrátorské sekci, do které má přístup pouze přihlášený uživatel OResults.

## Moje události

Všechny své události naleznete na kartě Moje události, odkud můžete přistupovat k nastavení události, **[speaker modulu](./speaker.md)** a vytvářet nové události.

:::tip

Tabulky výsledků nezveřejněné události lze zobrazit kliknutím na název události v sekci Moje události.
:::


<img src="/img/my-events.png" width="100%" />

## Nastavení události

### Obecná nastavení

V této části se nastavují základní informace, jako jsou:

- Název události
- Organizátor
- Datum a čas startu
- Časové pásmo
- Místo konání
- Souřadnice GPS

V této části se nastavují základní informace jako jsou:

**Musíte nastavit** zda událost **jsou štafety** (is relay) **nebo ne**.

Posledním nastavením je **zveřejnění** události (is published), což má za následek, že se zobrazí na stránce událostí OResults.

V této sekci najdete také svůj **API token události**, který se používá k automatickému odesílání startovní listiny a výsledků. Další informace o automatickém odesílání naleznete v části **[OResults Connector](./connector.md)**.

:::tip

Pomocí tlačítka QR Code můžete snadno vytvořit **QR kód s odkazem na vaši událost** .
:::


<img src="/img/event-main-setup.png" width="100%" />

### Podporované formáty

**Startovní listina** a **Výsledky** jsou podporovány pouze ve formátu **IOF XML 3.0**.

:::caution Pozor
* Závodnící bez čísel čipů jsou ignorováni.
* Každé číslo karty lze použít pouze jednou. Druhý běžec s již použitým číslem karty je ignorován.
:::

**Startovní listina** a **Výsledky** musí obsahovat čísla čipů v tagu `<ControlCard>`.

:::tip
**Tratě** jsou preferovány ve formátu **OCAD V8**, který je mnohem menší a vhodnější pro nahrávání než IOF XML 3.0.
:::


### Nastavení radio kontrol

Vyberte všechny radio kontroly. Rádiové ovládací prvky se automaticky zobrazí v příslušných kategoriích v tabulkách výsledků.

:::caution Pozor
Cílová kontrola je vybrána automaticky bez ohledu na to, zda ji máte jako radio kontrolu nebo ne. **Cílová kontrola musí mít kód nižší než 30.**
:::


<img src="/img/event-radios-setup.png" width="100%" />

### Přiřazení Bluebox zařízení

Tabulku s dostupnými Bluebox zařízeními můžete otevřít pomocí přepínače v části Radio zařízení.

<img src="/img/event-assign-devices.png" width="100%" />

### Monitoring Bluebox zařízení

Přidělená zařízení Bluebox a záznamy ražení můžete sledovat v části Rádiová zařízení, jak je znázorněno na obrázku. Další informace o monitorování naleznete na **[Monitoring zařízení](../devices/device-monitoring.md)**.

<img src="/img/event-devices-monitor.png" width="100%" />

### Danger zone

:::danger Pozor
Všechny akce provedené v nebezpečné zóně jsou nevratné.
:::


Pokud se potýkáte s chybami ve výsledcích, můžete vždy použít možnost odstranit běžce (čímž se odstraní startovní listina a výsledky) a nahrát je znovu.

:::info

**Nebojte se.** **Funkce Odstranit běžce nebo Odstranit tratě NEODSTRANÍ** již **přijaté záznamy ražení** z rádiových ovládacích prvků.
:::


<img src="/img/event-danger-zone.png" width="100%" />