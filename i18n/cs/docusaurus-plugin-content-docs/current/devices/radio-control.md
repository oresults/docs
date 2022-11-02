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
Some clubs and organizers own SRR stations and USB dongles for Bluebox Mobile devices. If you don't have your own, it is possible to rent them (see **[information for organizers](https://oresults.eu/organize)**).
:::

:::tip
In case of an event where **all competitiors have SIACs you can only use classic SPORTident stations** instead of the SRR stations on radio controls. Punch record data is sent by the SIAC itself if a station is correctly set.
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

**One Bluebox device** is capable of receiving punch records from **up to 8 SRR stations or SIACs** at the same time. So if you have doubled control (two SRR station at one control), you still only need one Bluebox device for the whole control.

:::danger
The Bluebox device must be placed at the **same height as the SI stations** at a **maximum distance of 2 metres** to ensure reliable detection of punch records.
:::

:::tip
The Bluebox device can be placed either on the same stand as the SRR station or on a separate stand. The best practice is to place the Bluebox device in the run-off direction of the competitors which will greatly increase the reliability of punch record capture, mainly in case of SIACs.
:::
