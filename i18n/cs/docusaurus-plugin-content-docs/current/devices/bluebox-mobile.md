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
- 1x **[SPORTident USB dongle](https://www.sportident.com/documents/si-radio/SRR-Kit/SPORTident_SRR-Dongle.pdf)**

<img src="/img/srr-dongle.png" width="40%" alt="SPORTident USB dongle"/>

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

Při prvním spuštění aplikace otevřete nastavení aplikace a vyplňte **API token**.

<!--Volitelně můžete nastavit, na kterém kanálu `Channel` bude váš USB dongle přijímat záznamy o ražení (viz [Jak nastavit radiokontrolu](./radio-control.md)).-->

:::caution Pozor
Nezapomeňte v nastavení aplikace vyplnit **API token**, naleznete jej v administraci OResults účtu v záložce **Devices**.
:::

<img src="/img/bb-mobile-settings.jpg" width="50%" alt="Bluebox Mobile Settings"/>

### Připojte USB dongle

Připojte SPORTident USB dongle k zařízení pomocí adaptéru USB na micro USB / USB-C podle vlastního výběru.

<img src="/img/mobile-dongle.svg" width="45%" alt="Phone with dongle" />

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

>Viz **[Monitoring zařízení](./device-monitoring)**

## Privacy policy (Bluebox Mobile)

OResutls (Otakar Hirš and Jan Jurica) built the Bluebox Mobile app as a Free app. This SERVICE is provided by OResutls at no cost and is intended for use as is.

This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.

If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing the Service. We will not use or share your information with 3rd party.


**Information Collection and Use**

For a better experience, while using our Service, we may require you to provide us with the device location. This enables us to access the signal strength of the device in order to display the device status it in the web dashboard. We only transmit the signal strength as a value between 0-5 and precise location can not be inferred. This information is stored indefinitely, but you can request the deletion from the database via our contact email. You may choose to not provide location permission to the app, in which case the signal strength will not be transferred and available in the dashboard.

**Security**

The information can be transferred using unsecure connection, and we cannot guarantee its privacy.

**Changes to This Privacy Policy**

We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.

This policy is effective as of 2022-10-12

**Contact Us**

If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at info@oresutls.eu.

