---
sidebar_position: 1
---

# Vytvoření a správa události

Podívejme se na to, jak snadno vytvářet a spravovat události v OResults.

## Vytvoření účtu pro organizátory

Pokud ještě žádný nemáte, vytvořte si bezplatný účet OResults pro organizátory (viz **[registrace](https://oresults.eu/register)**). Váš účet vám umožní přihlásit se do admin sekce OResults.

Zbytek návodu je věnován administrátorské sekci, do které má přístup pouze přihlášený uživatel OResults.

## Moje události (My events)

Všechny své události naleznete na kartě My events, kde můžete vytvořit novou událost a přistupovat k nastavení událostí.

:::tip
Tabulky výsledků nezveřejněné události lze zobrazit kliknutím na název události v sekci Moje události.
:::


## Nastavení události

### Obecná nastavení

V této části se nastavují základní informace, jako jsou:

- Název události
- Organizátor
- Datum a čas startu
- Časové pásmo
- Místo konání
- Souřadnice GPS

**Musíte nastavit** zda se jedná o štafetový závod **(is relay)**.

Posledním nastavením je zveřejnění události **(is published)**, díky čemuž se událost zobrazí na hlavní stránce OResults.

V této sekci najdete také svůj **API token události**, který se používá k automatickému odesílání startovní listiny a výsledků. Další informace o automatickém odesílání naleznete v části **[OResults Connector](../integrations//connector.md)**.

:::tip
Pomocí tlačítka QR Code můžete snadno vytvořit **QR kód s odkazem na vaši událost** .
:::


<img src="/img/event-main-setup.png" width="100%" />

<img src="/img/event-radios-setup.png" width="100%" />

### Podporované formáty

**Startovní listina** (Start list) a **Výsledky** (Results) jsou podporovány pouze ve formátu **IOF XML 3.0**.


:::caution Pozor
* Závodnící bez čísla čipu jsou ignorováni.
:::


**Start list** a **Results** musí obsahovat čísla čipů v tagu `<ControlCard>`.

:::tip
**Tratě** jsou preferovány ve formátu **OCAD V8**, který je mnohem menší a vhodnější pro nahrávání než IOF XML 3.0.
:::


### Nastavení radiokontrol

Zaškrtnutím vyberte požadované radiokontroly. Radiokontroly se automaticky zobrazí v příslušných kategoriích v tabulkách výsledků.

:::caution Pozor
Cílová kontrola je vybrána automaticky bez ohledu na to, zda je nastavena jako radiokontrola, nebo ne. **Cílová kontrola musí mít kód nižší než 30.**
:::


### Přiřazení Bluebox zařízení

Tabulku s dostupnými zařízeními Bluebox můžete otevřít pomocí přepínače v části Rádiová zařízení.

<img src="/img/event-assign-devices.png" width="100%" />

### Monitoring Bluebox zařízení

Přidělená zařízení Bluebox a záznamy ražení můžete sledovat v části Rádiová zařízení, jak je znázorněno na obrázku. Další informace o monitorování naleznete na adrese **[Monitorování zařízení](../blueboxes/device-monitoring.md)**.

<img src="/img/event-devices-monitor.png" width="100%" />