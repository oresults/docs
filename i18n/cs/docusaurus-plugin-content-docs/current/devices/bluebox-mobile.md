---
sidebar_position: 3
---

# Bluebox Mobile

Před použitím Bluebox Mobile aplikace si přečtěte tyto pokyny.

:::caution
Jedná se o beta verzi aplikace, takže se mohou objevit drobné chyby.
:::

## Potřebné vybavení

- 1x Android zařízení s připojením k internetu
- 1x USB na micro USB / USB-C adaptér podle zařízení
- 1x **[SPORTident USB dongle](https://www.sportident.com/documents/si-radio/SRR-Kit/SPORTident_SRR-Dongle.pdf)**

<img src="/img/srr-dongle.png" width="40%" alt="SPORTident USB dongle" />

## Před událostí

### Vytvořte si nové Bluebox Mobile zařízení

Nové Bluebox Mobile zařízení můžete vytvořit v kartě Devices v admin sekci OResults.

:::tip
Klikněte na název zařízení Bluebox Mobile pro změnu jeho názvu.
:::

### Stáhnětě a nainstalujte aplikaci

Nejnovější verzi aplikace Bluebox Mobile najdete pod záložkou Zařízení v admin sekci OResults.

Nainstalujte aplikaci pomocí staženého instalačního souboru. Možná bude nutné povolit instalaci z neznámých zdrojů.

### Nastavení aplikace

Při prvním spuštění aplikace otevřete nastavení aplikace a vyplňte **API token**.<!--Optionally, you can set on which `Channel` your USB dongle is receiving punch records (see \[How to setup a radiocontrol\](./radio-control.md)). -->:::caution  
Nezapomeňte nastavit **API token** na kartě nastavení, kterou najdete v admin sekci OResults v kartě **Devices**.
:::

<img src="/img/bb-mobile-settings.jpg" width="50%" alt="Nastavení Bluebox Mobile" />

### Připojte USB dongle

Připojte SPORTident USB dongle k zařízení pomocí adaptéru USB na micro USB / USB-C podle vlastního výběru.

<img src="/img/mobile-dongle.svg" width="45%" alt="Telefon s klíčem" />

### Poznámky

* Aplikace se ke SPORTident USB donglu připojí automaticky, dávejte však pozor abyste potvrdili žádosti o oprávnění (včetně checkboxu "povolit vždy"), díky tomu se aplikace připojí k donglu i při zamčené obrazovce pokud dojde k narušení kontaktu.
* Pokud nepovolíte aplikaci přístup k poloze, síla signálu nebude posílána do OResults a nezobrazí se vám v administraci závodu.
* Aplikace zabraňuje přechodu telefonu do režimu spánku. Nenechávejte aplikaci spuštěnou na pozadí, pokud ji nepoužíváte, vybíjí to baterii.
* **Na obrazovce zařízení** se zobrazují příchozí údery (zeleně) a zprávy o stavu připojení klíče (žlutě). **Záložka Punches** zobrazuje uložená ražení a jejich stav *send / not send yet*.


### Zajistěte internetové připojení

Ujistěte se, že je vaše zařízení připojeno k internetu v místě radio kontroly.

## V den závodu

### Umístění zařízení

:::danger
Pozor Připojený USB dongle musí být umístěn přibližně ve **stejné výšce jako stanice SI** ve vzdálenosti **maximálně 2 metry**, aby byla zajištěna spolehlivá detekce záznamů ražení.
:::

### Monitorování
> Viz **[Monitoring zařízení](./device-monitoring)**

## Zásady ochrany osobních údajů (Bluebox Mobile)

OResutls (Otakar Hirš a Jan Jurica) vytvořili aplikaci Bluebox Mobile jako bezplatnou aplikaci. Tato služba je poskytována týmem OResutls bezplatně a je určena k použití tak, jak je.

Tato stránka slouží k informování návštěvníků o našich zásadách týkajících se shromažďování, používání a zveřejňování osobních údajů, pokud se někdo rozhodne používat naši službu.

Pokud se rozhodnete používat naši službu, souhlasíte se shromažďováním a používáním informací v souladu s těmito zásadami. Osobní údaje, které shromažďujeme, slouží k poskytování Služby. Vaše údaje nebudeme používat ani sdílet se třetími stranami.


**Shromažďování a používání informací**

Pro lepší zážitek z používání naší služby můžeme požadovat, abyste nám sdělili polohu zařízení. To nám umožňuje získat přístup k síle signálu zařízení, abychom mohli zobrazit stav zařízení na webovém panelu. Sílu signálu přenášíme pouze jako hodnotu v rozmezí 0-5 a přesnou polohu nelze odvodit. Tyto informace se ukládají na dobu neurčitou, ale můžete požádat o jejich vymazání z databáze prostřednictvím našeho kontaktního e-mailu. Můžete se rozhodnout, že aplikaci neposkytnete oprávnění k určování polohy, a v takovém případě nebude síla signálu přenášena a nebude k dispozici na ovládacím panelu.

**Zabezpečení**

Informace mohou být přenášeny pomocí nezabezpečeného připojení a my nemůžeme zaručit jejich soukromí.

**Změny těchto zásad ochrany osobních údajů**

Naše zásady ochrany osobních údajů můžeme čas od času aktualizovat. Proto vám doporučujeme, abyste tuto stránku pravidelně kontrolovali a zjišťovali případné změny. O všech změnách vás budeme informovat zveřejněním nových zásad ochrany osobních údajů na této stránce.

Tato politika je účinná od 2022-10-12

**Kontaktujte nás**

Máte-li jakékoli dotazy nebo připomínky k našim zásadám ochrany osobních údajů, neváhejte nás kontaktovat na adrese info@oresutls.eu.

