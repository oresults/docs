---
sidebar_position: 1
---

# Vytvoření a správa události

Podívejme se na to, jak snadno vytvářet a spravovat události v OResults.

## Vytvoření účet pro organizátory

Pokud ještě nemáte účet, vytvořte si bezplatný OResults účet pro organizátory (viz [registrace](https://oresults.eu/register)). Díky vašemu účtu se budete moci přihlásit do admin sekce OResults.

:::note Pozn.
Zbytek manuálu se věnuje admin sekci, do které má přístup pouze přihlášený uživatel OResults.
:::

## Moje události (My events)

Všechny své události vidíte v kartě My events, odkud máte přístup k nastavení události, [speaker modulům](./speaker.md) a můžete vytvořit novou událost.

:::tip
Pokud událost není zveřejněna, je k dispozici pouze v části My events. Do tabulek výsledků se dostanete kliknutím na název události.
:::

<img src="/img/my-events.png" width="100%" />

## Nastavení události

### Obecná nastavení

Tato sekce slouží k nastavení základních informací o události a k nahrávání souborů startovek (Start list), tratí (Courses) a výsledků (Results). 

:::caution Pozor
**Všechny soubory** musí být v definovaném formátu **IOF XML** a **Courses** jsou akceptované také ve formátu **OCAD V8**.
:::

:::tip
Naleznete zde také svůj `Event API key`, který lze použít pro automatické nahrávání výsledků. Další informace o automatickém nahrávání výsledků naleznete v [OResults Connector](./connector.md).
:::

<img src="/img/event-main-setup.png" width="100%" />

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

V sekci Radio devices můžete sledovat přiřazená Bluebox zařízení a přicházející razící záznamy, jak je znázorněno na obrázku. Další informace o monitoringu naleznete v části [Monitoring zařízení](../devices/device-monitoring.md).

<img src="/img/event-devices-monitor.png" width="100%" />

### Danger zone

:::caution Pozor
Všechny akce provedené v Danger zone jsou nevratné.
:::

Pokud se potýkáte s chybami ve výsledcích, můžete vždy použít možnost Delete runners, která odstraní startovní listinu a výsledky a můžete je opět nahrát zpět.

:::note Pozn.
Funkce Delete runners a Delete Courses **NEODSTRANÍ** již přijaté razící záznamy z radio kontrol.
:::

<img src="/img/event-danger-zone.png" width="100%" />