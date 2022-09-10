# Jak používat Bluebox Mobile

Před použitím Bluebox Mobile aplikace si přečtěte tyto pokyny.

:::note
Jedná se o beta verzi aplikace, takže se mohou objevit drobné chyby.
:::

# Potřebné vybavení

- 1x zařízení s Androidem a připojením k internetu
- 1x USB na micro USB / USB-C adaptér podle zařízení
- 1x [SPORTident USB dongle](https://www.sportident.com/documents/si-radio/SRR-Kit/SPORTident_SRR-Dongle.pdf)

![SPORTident USB dongle](/img/dongle_transparent.png){width=20%}

SPORTident USB dongle

# Před událostí

## Stáhnětě a nainstalujte aplikaci

Nejnovější verzi aplikace Bluebox Mobile najdete pod záložkou Zařízení v admin sekci OResults.

Nainstalujte aplikaci pomocí staženého instalačního souboru. Možná bude potřeba povolit instalaci z neznámých zdrojů.

## Nastavení aplikace

Při prvním spuštění aplikace otevřete nastavení aplikace a vyplňte **API token**. API tokeny naleznete v admin sekci OResults.

Volitelně můžete nastavit, na kterém kanálu bude váš USB dongle přijímat záznamy o ražení (viz [Jak nastavit radiokontrolu](./radio-control.md)).

<img src="/img/Screenshot_20220820-215516_Bluebox_Mobile.jpg" width="40%" />

## Připojte USB dongle

Připojte USB dongle k zařízení pomocí adaptéru USB na micro USB / USB-C podle vlastního výběru.

![IMG_20220820_220146 - Copy.png](/img/IMG_20220820_220146_-_Copy.png)

## Spustťe aplikaci

Chcete-li spustit aplikaci, **zvolte připojený USB dongle**, který se zobrazí na hlavní obrazovce aplikace. Tím se **otevře Status obrazovka** vybraného USB donglu.

Po správném spuštění aplikace se na Status obrazovce zobrazí nápis **Conneted**. **Aplikace čte záznamy ražení** z USB donglu a **odesílá** je **na server** pouze tehdy, pokud jste **na obrazovce Status**. Přijaté záznamy o ražení se rovněž zobrazují na Status obrazovce.

<img src="/img/Screenshot_20220820-215619_Bluebox_Mobile.jpg" width="30%" style={{marginRight: "10px"}} />
<img src="/img/Screenshot_20220820-215729_Bluebox_Mobile.jpg" width="30%" />

Lze použít battery save mode pomocí ikony zámku v záhlaví. Tím se obrazovka ztmaví na minimum.

**Pro správné fungování aplikace ji nesmíte zavřít**.

:::note Pozn.
U některých verzí Androidu aplikace funguje i při zamčení telefonu, ale pouze do jeho opětovného odemčení. Poté je třeba odejít ze stránky statusu a opět zvolit připojený dongle. Po zvolení vám opět aplikace napíše status **Connected**.
:::

## Zajistěte internetové připojení

Ujistěte se, že je vaše zařízení připojeno k internetu v místě radiokontroly.

# V den závodu

## Umístění zařízení

Připojený USB dongle musí být umístěn přibližně ve stejné výšce jako SI krabička ve **vzdálenosti maximálně 2 metrů**, aby byla zajištěna spolehlivá detekce razících záznamů.

## Monitoring

Monitoring zařízení je k dispozici po přihlášení do admin účtu OResults. Zde můžete sledovat, zda jsou zařízení online, úroveň baterie, sílu signálu, příchozí záznamy ražení a další údaje.

Další informace o monitorování zařízení naleznete v části *nastavení událostí (odkaz)*.