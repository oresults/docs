---
sidebar_position: 2
---

# Jak nastavit radiokontrolu

Tento manuál popisuje, jak nastavit radiokontroly při použití **[systému SPORTident](https://www.sportident.com/)**.

Informace o fungování systému Bluebox jsou na stánce **[OResults](https://oresults.eu/about)**.

## Potřebné vybavení

Pro každou radiokontrolu potřebujete:

- Jeden **[Bluebox](../blueboxes/bluebox-units)** nebo jedno zařízení se systémem Android s aplikací **[Bluebox Mobile](./bluebox-mobile)**
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

<img src="/img/Untitled.png" width="100%" />

### Kontaktní mód

**Auto send** musí být zaškrtnuto - SRR jednotka posíla záznam ražení směrem k Bluebox zařízením v případě kontaktního ražení.

Ostatní parametry mohou být nastaveny volně podle potřeb závodu.

<img src="/img/Untitled%201.png" width="100%" />


## V den závodu

### Umístění radiokontroly

SRR jednotky fungují stejně jako standardní SI jednotky a lze je umístit do stojanů jak jste zvyklí.

**Jedno zařízení Bluebox** je schopno přijímat záznamy ražení **až z 8 jednotek SRR nebo SIAC** současně. Pokud tedy máte zdvojené kontroly (dvě jednotky SRR na jedné kontrole), stále potřebujete pouze jedno zařízení Bluebox pro obsloužení celé kontroly.

:::danger Pozor
Zařízení Bluebox musí být umístěno ve **stejné výšce jako jednotka SI** ve **vzdálenosti maximálně 2 metry**, aby byla zajištěna spolehlivá detekce záznamů ražení.
:::

:::tip
Zařízení Bluebox lze umístit buď na stejný stojan jako jednotka SRR, nebo na samostatný stojan.
:::