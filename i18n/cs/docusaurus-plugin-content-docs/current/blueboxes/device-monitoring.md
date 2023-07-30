---
sidebar_position: 2
---

# Monitoring zařízení

Monitoring zařízení umožňuje uživateli kontrolovat status Bluebox zařízení a sledovat příchozí razící záznamy během událostí.

Monitoring zařízení je k dispozici pouze pro přihlášené uživatele v sekci správce OResults. Existují dvě možnosti jak sledovat zařízení Bluebox:

- **Karta Devices**
- **Nastavení události**

## Status zařízení

Každé Bluebox zařízení může být ve třech různých stavech:

- `OFFLINE`: zařízení není připojeno k internetu
- `ONLINE`: zařízení je připojeno k internetu a připraveno odeslat všechny přijaté razící záznamy.
- `OVERDUE`: stav zařízení je zpožděn a pokud není přijat do 30 sekund, zařízení bude označeno jako offline. Zpoždění stavu může být způsobeno zvýšeným provozem záznamů o ražení u radiokontroly se slabým signálem, protože záznamy o ražení mají přednost před stavy.

:::tip
Pokud chcete zjistit přesný stav nabití baterie, najeďte kurzorem na ikonu baterie.
:::

## Karta Devices

Karta Devices obsahuje dvě tabulky:

- `Pronajaté Blueboxy`: obsahuje všechny Blueboxy, které jste si od nás pronajali na svou akci. Blueboxy vašemu účtu přidělí správce služby OResults.
- `Mobilní aplikace`: obsahuje všechna mobilní zařízení, která jste vytvořili ve svém účtu. Zde také najdete `API tokeny` vašich zařízení.

:::tip
Klikněte na název zařízení Bluebox a změňte jeho název.
:::

## Nastavení události

Vaše zařízení můžete také monitorovat v sekci **Radio devices** v nastavení události, ke které jste je přiřadili (viz **[Vytvoření a správa události](../tutorials/setup.md)**).

:::tip
Sekce **Radio devices** obsahuje druhou tabulku **Last punches**, kde můžete vidět **posledních 7 záznamů ražení** vaší události. Pomocí této tabulky můžete zkontrolovat, zda jsou vaše zařízení schopna odeslat záznamy o ražení před zahájením události.
:::

<img src="/img/event-devices-monitor.png" width="100%" />