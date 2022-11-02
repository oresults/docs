---
sidebar_position: 1
---

# Vytvoření a správa události

Podívejme se na to, jak snadno vytvářet a spravovat události v OResults.

## Vytvoření účet pro organizátory

If you don't have one yet, create a free OResults account for organizers (see **[registration](https://oresults.eu/register))**. Your account will allow you to log in to the OResults admin section.

The rest of the manual is devoted to the admin section, which can only be accessed by a logged-in OResults user.

## Moje události (My events)

You can see all your events in My events tab from where you can access event settings, [speaker modules](./speaker.md) and create a new event.

:::tip

Result tables of an unpublished event can be accessed by clicking on the event name in My events section.
:::


<img src="/img/my-events.png" width="100%" />

## Nastavení události

### Obecná nastavení

This section is used to set essential information such as:

- Název události
- Organizátor
- Datum a čas startu
- Časové pásmo
- Místo konání
- Souřadnice GPS

V této části se nastavují základní informace jako jsou:

**Musíte nastavit** zda událost **jsou štafety** (is relay) **nebo ne**.

Posledním nastavením je **zveřejnění** události (is published), což má za následek, že se zobrazí na stránce událostí OResults.

In this section you can also find your **event API key** which is used to automatically upload the start list and results. For more information about automatic upload, see **[OResults Connector](./connector.md)**.

:::tip

You can easily create **QR Code with a link to your event** using the QR Code button.
:::


<img src="/img/event-main-setup.png" width="100%" />

### Podporované formáty

**Start list** and **Results** are only supported in **IOF XML 3.0** format.

**Start list** (startovky) a **Results** (výsledky) jsou podporovány pouze ve formátu **IOF XML 3.0**.

:::caution Pozor
* Závodnící bez čísel čipů jsou ignorováni.
* Each card number can only be used once. A second runner with an already used card number is ignored.
:::


**Start list** a **Results** musí obsahovat čísla čipů v tagu `<ControlCard>`.

:::tip

**Courses** are preferred in **OCAD V8 format** which is much smaller and more suitable for uploading than IOF XML 3.0.
:::


### Nastavení radio kontrol

Select all radio controls. The radio controls will automatically appear in their respective classes in the results tables.

:::caution

Finish control is selected automatically whether you have it as a radio control or not. **Finish control must have a code lower than 30.**
:::


<img src="/img/event-radios-setup.png" width="100%" />

### Přiřazení Bluebox zařízení

You can open the table with available Bluebox devices using the switch in the Radio devices section.

<img src="/img/event-assign-devices.png" width="100%" />

### Monitoring Bluebox zařízení

You can monitor assigned Bluebox devices and punch records traffic in the Radio devices section as shown in the picture. For more information about monitoring see **[Device monitoring](../devices/device-monitoring.md)**.

<img src="/img/event-devices-monitor.png" width="100%" />

### Danger zone

:::danger

All actions taken in the Danger zone are irreversible.
:::


If you are struggling with some errors in the results you can always use option to delete runners (which will delete start list and results) and upload them back again.

:::info

**Don't worry.** Delete Runners or Delete Courses do **NOT delete** already **received punch records** from radio controls.
:::


<img src="/img/event-danger-zone.png" width="100%" />