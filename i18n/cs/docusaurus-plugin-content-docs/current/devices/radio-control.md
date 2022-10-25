---
sidebar_position: 1
---

# Jak nastavit radio kontrolu

Tento manuál popisuje, jak nastavit radiokontroly při použití **[systému SPORTident](https://www.sportident.com/)**.

Informace o fungování systému Bluebox jsou na stánce **[OResults](https://oresults.eu/about)**.

## Potřebné vybavení

Pro každou radiokontrolu potřebujete:

- Jedno zařízení **[Bluebox unit](bluebox-units)** nebo **[Bluebox Mobile](bluebox-mobile)**.
- jednu nebo více SI stanic vybavených vysílačem SRR (**BSF8-SRR** nebo novějším).

:::info
Některé kluby a pořadatelé vlastní SRR stanice  a USB dongly pro zařízení Bluebox Mobile. Pokud nemáte vlastní, je možné si je pronajmout (viz **[informace pro organizátory](https://oresults.eu/organize)**).
:::

:::tip
V případě závodu, kde **všichni závodnící mají SIAC, můžete** na radio kontrolách **použít klasické SPORTident stanice** namísto SRR stanic. Data záznamů ražení jsou posílána samotným SIACem pokud je stanice správně nastavena.
:::

## Před závodem

### Nastavení SI stanice

SPORTident stanice se nastavují pomocí softwaru **[SPORTident Config+](https://www.sportident.com/products.html#software)**.

SRR stanice musí být nastaveny tak, jak je uvedeno na následujících obrázcích.

### Bezkontaktní mód

**Radio** nastaveno na **Send last record** - SIACy posílají záznamy o ražení směrem k Bluebox zařízením.

**Auto send** musí být zaškrtnuto - SRR stanice posíla záznam ražení směrem k Bluebox zařízením v případě kontaktního ražení.

Ostatní parametry mohou být nastaveny volně podle potřeb závodu.

<img src="/img/Untitled.png" width="100%" />

### Kontaktní mód

**Auto send** musí být zaškrtnuto - SRR stanice posíla záznam ražení směrem k Bluebox zařízením v případě kontaktního ražení.

Ostatní parametry mohou být nastaveny volně podle potřeb závodu.

<img src="/img/Untitled%201.png" width="100%" />

## V den závodu

### Umístění radiokontroly

SRR stanice fungují stejně jako standardní SI stanice a lze je umístit do stojanů, jak jste zvyklí.

**Jedno Bluebox** **zařízení** je schopno přijímat záznamy ražení z **až 8 SRR stanic nebo SIACů** najednou. Pokud tedy máte zdvojenou kontrolu (dvě SRR stanice na jedné kontrole), stále vám stačí jedno Bluebox zařízení pro celou kontrolu.

:::danger Pozor
Bluebox zařízení musí být umístěno **ve stejné výšce jako SRR stanice** v **maximální vzdálenosti 2 metry**, aby byla zajištěna spolehlivá detekce záznamů děrování.
:::

:::tip
Bluebox zařízení může být umístěno buď na stejném stojanu jako SRR stanice, nebo na samostatném stojanu. Nejlepším postupem je umístit Bluebox zařízení ve směru odběhu závodníků, čímž se výrazně zvýší spolehlivost zachycení záznamu ražení, především v případě SIACu.
:::