---
sidebar_position: 5
---

# MeOS Online Protocol (MOP)

MeOS Online Protokol (MOP) umožňuje nahrávat výsledky, mezičasy a startovní listiny z orientačního softwaru MeOS na internet (v našem případě na OResults).

:::tip
Pokud používáte **[MeOS](https://www.melin.nu/meos/en/)**, není třeba nastavovat startlisty, tratě, výsledky a radio kontroly v administrační sekci OResults

**Vše lze nastavit přímo ze systému MeOS.**
:::

Přejděte na kartu Servisy v systému MeOS a otevřete aplikaci Výsledky Online, kde můžete nastavit všechny potřebné informace o závodě, jak je znázorněno na obrázku.

<img src="/img/mop_screenshot.png" width="100%" />

## Důležitá nastavení

- **Odeslat na web**: `https://api.oresults.eu/meos`
- **Heslo**: `Api key` , který naleznete v administrační části události OResults
- ***ID závodu***: lze ponechat prázdné (nepoužívá se)
- **Komprimovat velké soubory (zip)**: `nezaškrtnuto` (zatím není podporováno).
- **Časový interval (sekundy)**: `0` (doporučeno, ale záleží na vašich potřebách).
- **Exportní formát**: `MeOS Online Protocol XML 2.0`

:::caution
Pozor Startovní čas události OResults musí být stejný jako startovní čas v MeOS.
:::

Nakonec **nastavte** všechny **radio kontroly**.

:::tip
Po spuštění služby v systému MeOS můžete zkontrolovat, zda je vše správně nastaveno v administrační sekci OResults.
:::