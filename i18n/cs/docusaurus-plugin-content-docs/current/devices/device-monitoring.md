---
sidebar_position: 4
---

# Monitoring zařízení

Monitoring zařízení umožňuje uživateli kontrolovat status Bluebox zařízení a sledovat příchozí razící záznamy během událostí.

Device monitoring is available only for logged in users in the OResults admin section. There are two options where you can monitor Bluebox devices:

- **Karta Devices**
- **Nastavení události**

## Status zařízení

Každé Bluebox zařízení může být ve třech různých stavech:

- `OFFLINE`: zařízení není připojeno k internetu
- `ONLINE`: zařízení je připojeno k internetu a připraveno odeslat všechny přijaté razící záznamy.
- `OVERDUE`: the device status is delayed and if it is not received within 30 seconds, the device will be marked as offline. Status delay can be caused by an increased punch record traffic at a radio control with a low signal because punch records take precedence over statuses.

:::tip
Hover cursor over the battery icon if you want to know the exact battery percetage.
:::

## Karta Devices

Karta Devices obsahuje dvě tabulky:

- `Rented Bluebox units`: contains all Bluebox units which you have rented from us for your event. Bluebox units will be assigned to your account by the OResults administrator.
- `Phone apps`: contains all Bluebox Mobile devices which you have created in your account. Here you can also find `API tokens` of your devices.

:::tip
Click on the name of your Bluebox Mobile device to change its name.
:::

<img src="/img/devices-monitor.png" width="100%" />

## Nastavení události

Vaše zařízení můžete také monitorovat v sekci **Radio devices** v nastavení události, ke které jste je přiřadili (viz [Jak spravovat událost](../events/setup.md)).

:::tip
The **Radio devices** section contains second table **Recent punches** where you can see **last 7 punch records** of your event. Use this table to check whether your devices are able to send punch records before the event starts.
:::

<img src="/img/event-devices-monitor.png" width="100%" />