---
sidebar_position: 1
---

# Jak spravovat události

Podívejme se na to, jak snadno vytvářet a spravovat události v OResults.

:::note Pozn.
Pokud ještě žádný nemáte, vytvořte si bezplatný účet OResults pro organizátory (viz **[registrace](https://oresults.eu/register)**). Váš účet vám umožní přihlásit se do admin sekce OResults, kde naleznete sekci My events.
:::

## Nastavení události

Všechny své události najdete v části Moje události (My events), kde můžete také vytvářet nové a přistupovat k nastavení událostí.

### Event info

Zde si nastavte základní informace o vaší události, jako jsou:

- Název události
- Organizátor
- Datum a čas startu
- Časové pásmo
- Místo konání
- GPS souřadnice

### Visibility

V této části nastavíte událost jako **soukromou (private)** nebo **veřejnou (public)**. **Veřejné (public)** události jsou viditelné na stránce událostí OResults.

### Tools

**API key** umožňuje propojit váš orientační software s OResults a automaticky nahrávat startovní listiny, výsledky a další údaje. Více informací o propojení vašeho orientačního softwaru s OResults najdete v části **[Integrace](../category/integrations/)**.

**Event link** vám poskytne odkaz na vaši událost v podobě textu a QR kódu, který pak můžete vložit do svých propagačních materiálů.

<img src="/img/event-main-setup.png" width="100%" />

### Runners & Courses

Zde můžete nahrát startovní listiny, kurzy a výsledky v podporovaných formátech.

:::tip
Aktuální informace o podporovaných formátech se zobrazí po najetí na jednotlivé štítky.
:::

:::caution Pozor
**Startovní listina** a **Výsledky** musí obsahovat čísla čipů ve tagu `<ControlCard>`. Závodnící bez čísla čipu jsou ignorováni.
:::

Seznam kontrol se zobrazí po nahrání tratí. Zaškrtněte všechny kontroly, které chcete mít jako online kontroly.

Cílová kontrola je vybrána automaticky bez ohledu na to, zda je nastavena jako radiokontrola, nebo ne. **Cílová kontrola musí mít kód nižší než 30.**

<img src="/img/event-runners-courses.png" width="100%" />

### Blueboxes

Zde najdete Blueboxy přiřazené k události a můžete k ní přiřadit další.

Během události můžete také sledovat stav svých Blueboxů, včetně síly signálu, nabití baterie a posledního zaznamenaného ražení na zařízení.

**Status Blueboxů může být:**

- **`OFFLINE`**: zařízení není připojeno k internetu.
- **`ONLINE`**: zařízení je připojeno k internetu a je připraveno odesílat všechna přijatá ražení.
- **`OVERDUE`**: status zařízení je zpožděný, a pokud nebude přijat do 30 sekund, bude zařízení označeno jako offline. Zpoždění stavu může být způsobeno velkým množstvím ražení na dané kontrole se slabým signálem, protože přenos ražení má přednost před statusem.

<img src="/img/event-blueboxes.png" width="100%" />

### Troubleshooting & Danger zone

Tyto sekce obsahují řadu informací a nástrojů pro řešení některých problémů, které mohou během vaší událost nastat. Všechny potřebné informace jsou popsány na stránce Nastavení události.