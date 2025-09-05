---
sidebar_position: 4
---

# Jak nastavit radiokontrolu

Tento manuál popisuje, jak nastavit radiokontroly při použití **[systému SPORTident](https://www.sportident.com/)**.

Informace o fungování systému Bluebox jsou na stánce **[OResults](https://oresults.eu/about)**.

## Potřebné vybavení

Pro každou radiokontrolu potřebujete:

- Jeden **[Bluebox](../blueboxes/bluebox-units)** nebo jedno zařízení se systémem Android s aplikací **[Bluebox Mobile](../byo/bluebox-mobile)**
- Jednu nebo více SI jednotek vybavených vysílačem SRR (**BSF8-SRR** nebo novějším).

:::info
Některé kluby a organizátoři vlastní SRR jednotky a USB dongly pro zařízení Bluebox Mobile. Pokud nemáte vlastní, je možné si je pronajmout (viz **[informace pro organizátory](https://oresults.eu/organize)**).
:::

:::tip
V případě závodu, kde **mají všichni závodníci SIAC, můžete na radiokontrolách používat pouze klasické stanice SPORTident** namísto jednotek SRR. Pokud je jednotka správně nastavena, údaje o záznamu oražení odesílá sám SIAC.
:::

## Před závodem

### Nastavení SI jednotky

SPORTident jednotky se nastavují pomocí softwaru **[SPORTident Config+](https://www.sportident.com/products.html#software)**.

SRR jednotky musí být nastaveny tak, jak je uvedeno na následujících obrázcích.

### Bezkontaktní mód

**Radio** nastaveno na **Send last record** - SIACy posílají záznamy o ražení směrem k Bluebox zařízením.

**Auto send** musí být zaškrtnuto - SRR jednotka posíla záznam ražení směrem k Bluebox zařízením v případě kontaktního ražení.

Ostatní parametry mohou být nastaveny volně podle potřeb závodu.

<img src="/img/si-config-1.png" width="100%" />

### Kontaktní mód

**Auto send** musí být zaškrtnuto - SRR jednotka posíla záznam ražení směrem k Bluebox zařízením v případě kontaktního ražení.

Ostatní parametry mohou být nastaveny volně podle potřeb závodu.

<img src="/img/si-config-2.png" width="100%" />

## V den závodu

Zapněte Bluebox a jednoduše jej nacvakněte na stojan společně s SI kontrolou nacvaknutou na vrch Blueboxu. Pak už jen zkontrolujte přiřazení Blueboxu k události (viz **[Jak spravovat události](../tutorials/setup.md)**).

<img src="/img/bluebox_in_forrest.jpg" width="100%" />

:::caution Pozor
Pokud se rozhodnete neumístit zařízení Bluebox do stejného stojanu jako kontrolu, ujistěte se, že je Bluebox umístěno přibližně ve stejné výšce jako kontrola ve vzdálenosti **maximálně 2 metry**, aby byla zajištěna spolehlivá detekce záznamů ražení.
:::