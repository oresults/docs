---
sidebar_position: 1
---

# Vytvoření a správa události

Podívejme se na to, jak snadno vytvářet a spravovat události v OResults.

## Vytvoření účet pro organizátory

Pokud ještě nemáte účet, vytvořte si bezplatný OResults účet pro organizátory (viz **[registrace](https://oresults.eu/register))**. Díky vašemu účtu se budete moci přihlásit do admin sekce OResults.

:::info
Zbytek manuálu se věnuje admin sekci, do které má přístup pouze přihlášený uživatel OResults.
:::

## Moje události (My events)

Všechny své události vidíte v kartě My events, odkud máte přístup k nastavení události, [speaker modulům](./speaker.md) a můžete vytvořit novou událost.

:::tip
Tabulky výsledků nezveřejněné (unpublished) události jsou přístupné po kliknutí na název události v sekci Moje události.
:::

<img src="/img/my-events.png" width="100%" />

## Nastavení události

### Obecná nastavení

V této části se nastavují základní informace jako jsou:

- Název události
- Organizátor
- Datum a čas startu
- Časové pásmo
- Místo konání
- Souřadnice GPS

**Musíte nastavit** zda událost **jsou štafety** (is relay) **nebo ne**.

Posledním nastavením je **zveřejnění** události (is published), což má za následek, že se zobrazí na stránce událostí OResults.

Pro správné zobrazení výsledků je nutné nahrát soubory **Start list** (startovky), **Courses** (tratě) a **Results** (výsledky) v podporovaných formátech (více o podporovaných formátech **[zde](#podporované-formáty)**).

V této sekci také naleznete také svůj **API key události**, který použijete pro automatické nahrávání startovních listin a výsledků. Více informací o automatickém nahrávání naleznete v **[OResults Connector](./connector.md)**.

:::tip
Můžete snadno vytvořit **QR kód s odkazem na vaši událost** použitím tlačítka QR Code.
:::

<img src="/img/event-main-setup.png" width="100%" />

### Podporované formáty

**Start list** (startovky) a **Results** (výsledky) jsou podporovány pouze ve formátu **IOF XML 3.0**.

:::caution Pozor
**Start list** a **Results** musí obsahovat čísla čipů v tagu `<ControlCard>`.
* Závodnící bez čísel čipů jsou ignorováni.
* Každé číslo čipu může být použito pouze jednou. Druhý závodník s již použitým číslem čipu je ignorován.
:::

**Course** (tratě) jsou podporovány v textovém formátu **OCAD V8** a ve formátu **IOF XML 3.0**.

:::tip
**Course** (tratě) jsou preferovány ve formátu **OCAD V8**, který je mnohem menší a vhodnější pro nahrávání než IOF XML 3.0.
:::

### Nastavení radio kontrol

Vyberte všechny radio kontroly. Radio kontroly se automaticky zobrazí v příslušných kategoriích v tabulkách výsledků.

:::caution Pozor
Cílová kontrola se vybere automaticky bez ohledu na to, zda je to radio kontrola nebo ne. **Cílová kontrola musí mít kód nižší než 30.**
:::

<img src="/img/event-radios-setup.png" width="100%" />

### Přiřazení Bluebox zařízení

Tabulku s dostupnými Bluebox zařízeními můžete otevřít pomocí přepínače v části Radio devices.

<img src="/img/event-assign-devices.png" width="100%" />

### Monitoring Bluebox zařízení

V sekci Radio devices můžete sledovat přiřazená Bluebox zařízení a přicházející razící záznamy, jak je znázorněno na obrázku. Další informace o monitoringu naleznete v části **[Monitoring zařízení](../devices/device-monitoring.md)**.

<img src="/img/event-devices-monitor.png" width="100%" />

### Danger zone

:::danger Pozor
Všechny akce provedené v Danger zone jsou nevratné.
:::

Pokud se potýkáte s chybami ve výsledcích, můžete vždy použít možnost Delete runners (odstraní startovní listinu a výsledky) a můžete je opět nahrát zpět.

:::info
**Nemějte obavy.** Funkce Delete runners a Delete Courses **NEODSTRANÍ** již **přijaté záznamy ražení** z radio kontrol.
:::

<img src="/img/event-danger-zone.png" width="100%" />