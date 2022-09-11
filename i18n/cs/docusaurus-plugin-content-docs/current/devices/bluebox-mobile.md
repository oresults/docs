---
sidebar_position: 3
---

# Jak používat Bluebox Mobile

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

### Připojte USB dongle

Připojte SPORTident USB dongle k zařízení pomocí adaptéru USB na micro USB / USB-C podle vlastního výběru.

<img src="/img/IMG_20220820_220146_-_Copy.png" width="85%" alt="Phone with dongle" />

### Spustťe aplikaci

Chcete-li spustit aplikaci, **zvolte připojený USB dongle**, který se zobrazí na hlavní obrazovce aplikace. Tím se **otevře Status obrazovka** vybraného USB donglu.

>Po správném spuštění aplikace se na Status obrazovce zobrazí nápis **Conneted**. **Aplikace čte záznamy ražení** z USB donglu a **odesílá** je **na server** pouze tehdy, pokud jste **na obrazovce Status**. Přijaté záznamy o ražení se rovněž zobrazují na Status obrazovce.

Lze použít battery save mode pomocí ikony zámku v záhlaví. Tím se obrazovka ztmaví na minimum.

:::note Pozn.
**Pro správné fungování aplikace byste ji neměli zavřít**.

U některých verzí Androidu aplikace funguje i při zamčení telefonu, ale pouze do jeho opětovného odemčení. Poté je třeba odejít ze stránky statusu a opět zvolit připojený dongle. Po zvolení vám opět aplikace napíše status **Connected**.
:::

<img src="/img/Screenshot_20220820-215619_Bluebox_Mobile.jpg" width="40%" style={{marginRight: "10px"}} />
<img src="/img/Screenshot_20220820-215729_Bluebox_Mobile.jpg" width="40%" />

### Zajistěte internetové připojení

Ujistěte se, že je vaše zařízení připojeno k internetu v místě radio kontroly.

## V den závodu

### Umístění zařízení

:::caution Pozor
Připojený USB dongle musí být umístěn přibližně **ve stejné výšce jako SI krabička** ve **vzdálenosti maximálně 2 metrů**, aby byla zajištěna spolehlivá detekce razících záznamů.
:::

### Monitoring

>Viz [Monitoring zařízení](./device-monitoring)