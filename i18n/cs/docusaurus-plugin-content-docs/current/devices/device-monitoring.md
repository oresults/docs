---
sidebar_position: 4
---

# Monitoring zařízení

Monitoring zařízení umožňuje uživateli kontrolovat status Bluebox zařízení a sledovat příchozí razící záznamy během událostí.

Monitoring zařízení je k dispozici pouze pro přihlášené uživatele v sekci správce OResults. Existují dvě možnosti, jak sledovat zařízení Bluebox:

- **Karta Devices**
- **Nastavení události**

## Status zařízení

Každé Bluebox zařízení může být ve třech různých stavech:

- `OFFLINE`: zařízení není připojeno k internetu
- `ONLINE`: zařízení je připojeno k internetu a připraveno odeslat všechny přijaté razící záznamy.
- `OVERDUE`: stav zařízení je zpožděn a pokud není přijat do 30 sekund, zařízení bude označeno jako offline. Zpoždění stavu může být způsobeno zvýšeným provozem záznamů o děrování u rádiového ovládání se slabým signálem, protože záznamy o děrování mají přednost před stavy.

:::tip
Pokud chcete zjistit přesný stav nabití baterie, najeďte kurzorem na ikonu baterie.
:::

## Karta Devices

Karta Devices obsahuje dvě tabulky:

- `Rented Blueboxes`: contains all Blueboxes which you have rented from us for your event. Blueboxes will be assigned to your account by the OResults administrator.
- `Mobile apps`: contains all mobile devices which you have created in your account. Zde také najdete `API tokeny` vašich zařízení.

:::tip
Click on the name of your Bluebox device to change its name.
:::

<img src="/img/devices-monitor.png" width="100%" />

## Nastavení události

Vaše zařízení můžete také monitorovat v sekci **Radio devices** v nastavení události, ke které jste je přiřadili (viz **[Jak spravovat událost](../events/setup.md)**).

:::tip
Sekce **Radio devices** obsahuje druhou tabulku **Last punches**, kde můžete vidět **posledních 7 záznamů ražení** vaší události. Pomocí této tabulky můžete zkontrolovat, zda jsou vaše zařízení schopna odeslat záznamy o děrování před zahájením události.
:::

<img src="/img/event-devices-monitor.png" width="100%" />