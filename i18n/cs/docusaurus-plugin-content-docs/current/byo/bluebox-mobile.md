---
sidebar_position: 1
---

# Aplikace Bluebox Mobile

Před použitím Bluebox Mobile aplikace si přečtěte tyto pokyny.

## Potřebné vybavení

- 1x Android zařízení s připojením k internetu
- 1x USB na micro USB / USB-C adaptér podle zařízení (OTG redukce)
- 1x **[SPORTident USB dongle](https://www.sportident.com/documents/si-radio/SRR-Kit/SPORTident_SRR-Dongle.pdf)**

<img src="/img/srr-dongle.png" width="40%" alt="SPORTident USB dongle" />

## Před událostí

### Vytvořte si nové Bluebox Mobile zařízení

Nové Bluebox Mobile zařízení můžete vytvořit v kartě `Devices` v admin sekci OResults.

:::tip
Klikněte na název zařízení Bluebox Mobile pro změnu jeho názvu.
:::

### Nainstalujte aplikaci

Nejnovější verzi aplikace Bluebox Mobile najdete v obchodě **[Google Play](https://play.google.com/store/apps/details?id=eu.oresults.bluebox)**.

### Nastavení aplikace

Při prvním spuštění aplikace otevřete nastavení aplikace a vyplňte **API token**.

:::caution Pozor
Nezapomeňte nastavit **API token** na kartě nastavení, kterou najdete v admin sekci OResults v kartě **Devices**.
:::

<img src="/img/bb-mobile-settings.jpg" width="50%" alt="Nastavení aplikace Bluebox Mobile" />

### Připojte USB dongle

Připojte SPORTident USB dongle k zařízení pomocí adaptéru USB na micro USB / USB-C podle vlastního výběru.

<img src="/img/mobile-dongle.svg" width="45%" alt="Telefon s klíčem" />

### Poznámky

* Aplikace se ke SPORTident USB donglu připojí automaticky, dávejte však pozor abyste potvrdili žádosti o oprávnění (včetně checkboxu "povolit vždy"), díky tomu se aplikace připojí k donglu i při zamčené obrazovce pokud dojde k narušení kontaktu.
* Pokud nepovolíte aplikaci přístup k poloze, síla signálu nebude posílána do OResults a nezobrazí se vám v administraci závodu.
* Aplikace zabraňuje přechodu telefonu do režimu spánku. Nenechávejte aplikaci spuštěnou na pozadí pokud ji nepoužíváte, vybíjí to baterii.
* **Na obrazovce zařízení** se zobrazují příchozí ražení (zeleně) a zprávy o stavu připojení dongle (žlutě). **Záložka Punches** zobrazuje uložená ražení a jejich stav *send / not send yet*.

:::caution Pozor
**Zajistěte internetové připojení**

Ujistěte se, že je vaše zařízení připojeno k internetu v místě radiokontroly.
:::

## V den závodu

### Umístění zařízení

:::danger Pozor
Připojený USB dongle musí být umístěn přibližně ve **stejné výšce jako jednotka SI** ve vzdálenosti **maximálně 2 metry**, aby byla zajištěna spolehlivá detekce záznamů ražení.
:::

### Monitorování
> Viz **[Zařízení](../blueboxes/devices)**