---
sidebar_position: 4
---

# Monitoring zařízení

Monitoring zařízení umožňuje uživateli kontrolovat status Bluebox zařízení a sledovat příchozí razící záznamy během událostí.

Monitoring zařízení je k dispozici pouze pro přihlášené uživatele v admin sekci OResults. Existují dvě možnosti, kde lze monitorovat Bluebox zařízení:

- **Karta Devices**
- **Nastavení události**

## Status zařízení

Každé Bluebox zařízení může být ve třech různých stavech:

- `OFFLINE`: zařízení není připojeno k internetu
- `ONLINE`: zařízení je připojeno k internetu a připraveno odeslat všechny přijaté razící záznamy.
- `OVERDUE`: status zařízení je zpožděn a pokud není přijat do 30 sekund, bude zařízení označeno jako offline. Zpoždění statusu může být způsobeno zvýšeným příjmem razících záznamů u radio kontroly, kde je slabý signál, protože odesílání razících záznamů má přednost před statusem.

:::tip
Pokud chcete zjistit přesný stav nabití baterie, najeďte kurzorem na ikonu baterie.
:::

## Karta Devices

Karta Devices obsahuje dvě tabulky:

- `Rented Bluebox units`: obsahuje všechny Bluebox jednotky, které jste si od nás pronajali pro svou událost. Bluebox jendotky přiřadí k vašemu účtu správce OResults.
- `Phone apps`: obsahuje všechna Bluebox Mobile zařízení, která jste vytvořili ve svém účtu. Najdete zde také `API tokeny` svých zařízení. 

:::tip
Klikněte na název Bluebox Mobile zařízení pro změnu jeho názvu.
:::

<img src="/img/devices-monitor.png" width="100%" />

## Nastavení události

Vaše zařízení můžete také monitorovat v sekci **Radio devices** v nastavení události, ke které jste je přiřadili (viz [Jak spravovat událost](../events/setup.md)).

:::tip
Sekce **Radio devices** obsahuje druhou tabulku **Recent punches**, ve které vidíte **posledních 7 razících záznamů** vaší události. Pomocí této tabulky můžete zkontrolovat, zda jsou vaše zařízení schopna odesílat razící záznamy před zahájením události.
:::

<img src="/img/event-devices-monitor.png" width="100%" />