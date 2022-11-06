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
Některé kluby a organizátoři vlastní SRR stanice a USB dongly pro zařízení Bluebox Mobile. Pokud nemáte vlastní, je možné si je pronajmout (viz **[informace pro organizátory](https://oresults.eu/organize)**).
:::

:::tip
V případě závodu, kde **mají všichni závodníci SIAC, můžete na radio kontrolách používat pouze klasické stanice SPORTident** namísto stanic SRR. Pokud je stanice správně nastavena, údaje o záznamu děrování odesílá sám SIAC.
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

**Jedno zařízení Bluebox** je schopno přijímat záznamy ražení **až z 8 stanic SRR nebo SIAC** současně. Pokud tedy máte zdvojené kontroky (dvě stanice SRR na jedné kontrole), stále potřebujete pouze jedno zařízení Bluebox pro celou kontrolu.

:::danger Pozor
Pozor Zařízení Bluebox musí být umístěno ve **stejné výšce jako stanice SI** ve **vzdálenosti maximálně 2 metry**, aby byla zajištěna spolehlivá detekce záznamů ražení.
:::

:::tip
Zařízení Bluebox lze umístit buď na stejný stojan jako stanici SRR, nebo na samostatný stojan. Nejlepším postupem je umístit zařízení Bluebox ve směru odběhu závodníků, čímž se výrazně zvýší spolehlivost zachycení záznamu ražení, zejména v případě SIACu.
:::
