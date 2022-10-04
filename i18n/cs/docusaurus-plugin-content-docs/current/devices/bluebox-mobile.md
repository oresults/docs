---
sidebar_position: 3
---

# Bluebox Mobile

Před použitím Bluebox Mobile aplikace si přečtěte tyto pokyny.

:::caution Poznámka
Jedná se o beta verzi aplikace, takže se mohou objevit drobné chyby.
:::

## Potřebné vybavení

- 1x zařízení s Androidem a připojením k internetu
- 1x USB na micro USB / USB-C adaptér podle zařízení
- 1x [SPORTident USB dongle](https://www.sportident.com/documents/si-radio/SRR-Kit/SPORTident_SRR-Dongle.pdf)

<img src="/img/dongle_transparent.png" width="35%" alt="SPORTident USB dongle"/>

## Před událostí

### Vytvořte si nové Bluebox Mobile zařízení

Nové Bluebox Mobile zařízení můžete vytvořit v kartě Devices v části admin sekci OResults.

:::tip
Klikněte na název Bluebox Mobile zařízení pro změnu jeho názvu.
:::

### Stáhnětě a nainstalujte aplikaci

Nejnovější verzi aplikace Bluebox Mobile najdete pod záložkou Zařízení v admin sekci OResults.

Nainstalujte aplikaci pomocí staženého instalačního souboru. Možná bude potřeba povolit instalaci z neznámých zdrojů.

### Nastavení aplikace

Při prvním spuštění aplikace otevřete nastavení aplikace a vyplňte `API key`.

Volitelně můžete nastavit, na kterém kanálu `Channel` bude váš USB dongle přijímat záznamy o ražení (viz [Jak nastavit radiokontrolu](./radio-control.md)).

<img src="/img/Screenshot_20220820-215516_Bluebox_Mobile.jpg" width="40%" alt="Bluebox Mobile Settings"/>

:::caution Pozor
Nezapomeňte v nastavení aplikace vyplnit **API key**, naleznete jej v administraci OResults účtu v záložce *Devices**.
:::

### Připojte USB dongle

Připojte SPORTident USB dongle k zařízení pomocí adaptéru USB na micro USB / USB-C podle vlastního výběru.

<img src="/img/IMG_20220820_220146_-_Copy.png" width="85%" alt="Phone with dongle" />

### Poznámky

* Aplikace se ke SPORTident USB donglu připojí automaticky, dávejte však pozor abyste potvrdili žádosti o oprávnění (včetně checkboxu "povolit vždy"), díky tomu se aplikace připojí k donglu i při zamčené obrazovce pokud dojde k narušení kontaktu.
* Pokud nepovolíte aplikaci přístup k poloze, síla signálu nebude posílána do OResults a nezobrazí se vám v administraci závodu.
* Aplikace zabraňuje telefonu přejít do režimu spánku. Pokud aplikaci nevyužíváte k pořádání, nenechávejte ji běžet na pozadí, vybíjela by vám baterii.
* Hlavní stránka **Device** zobrazuje příchozí ražení (zeleně) a události ohledně připojení donglu (žlutě). Na stránce **Punches** najdete uložené záznamy a status, zda už byly úspěšně odeslány na server. 

### Zajistěte internetové připojení

Ujistěte se, že je vaše zařízení připojeno k internetu v místě radio kontroly.

## V den závodu

### Umístění zařízení

:::danger Pozor
Připojený USB dongle musí být umístěn přibližně **ve stejné výšce jako SI krabička** ve **vzdálenosti maximálně 2 metrů**, aby byla zajištěna spolehlivá detekce razících záznamů.
:::

### Monitoring

>Viz [Monitoring zařízení](./device-monitoring)