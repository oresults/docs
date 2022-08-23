---
sidebar_position: 1
---

# Jak nastavit radiokontrolu

Tento manuál popisuje, jak nastavit radiokontroly při použití [systému SPORTident](https://www.sportident.com/).

Informace o fungování systému Bluebox naleznete na *link_to_about_page*.

# Potřebné vybavení

Pro každou radiokontrolu potřebujete:

- jednu nebo více SI stanic vybavených vysílačem SRR (**BSF8-SRR** nebo novějším).
  - Na všech radiokontrolách musí být použity pouze SRR stanice (namísto standardních SI stanic).
- Jedno zařízení [Bluebox unit](bluebox-units) nebo [Bluebox Mobile](bluebox-mobile).

:::tip
Některé kluby a pořadatelé vlastní SRR stanice  a USB dongly pro zařízení Bluebox Mobile. Pokud nemáte vlastní, je možné si je pronajmout (viz odkaz Možnost pronájmu).
:::

# Před závodem

## Nastavení SI stanice

SPORTident stanice se nastavují pomocí softwaru [SPORTident Config+](https://www.sportident.com/products.html#software).

SRR stanice musí být nastaveny tak, jak je uvedeno na následujících obrázcích.

### Bezkontaktní mód

`Radio` nastaveno na `Send last record` - SIACy posílají záznamy o ražení směrem k Bluebox zařízením.

`Auto send` musí být zaškrtnuto - SRR stanice posíla záznam ražení směrem k Bluebox zařízením v případě kontaktního ražení.

Ostatní parametry mohou být nastaveny volně podle potřeb závodu.

<img src="/img/Untitled.png" width="100%" />

### Kontaktní mód

`Auto send` musí být zaškrtnuto - SRR stanice posíla záznam ražení směrem k Bluebox zařízením v případě kontaktního ražení.

Ostatní parametry mohou být nastaveny volně podle potřeb závodu.

<img src="/img/Untitled%201.png" width="100%" />

# V den závodu

## Umístění radiokontroly

SRR stanice fungují stejně jako standardní SI stanice a lze je umístit do stojanů, jak jste zvyklí.

**Jedno Bluebox** **zařízení** je schopno přijímat záznamy ražení z **až 8 SRR stanic nebo SIACů** najednou. Pokud tedy máte zdvojenou kontrolu (dvě SRR stanice na jedné kontrole), stále vám stačí jedno Bluebox zařízení pro celou kontrolu.

Bluebox zařízení může být umístěno buď na stejném stojanu jako SRR stanice, nebo na samostatném stojanu. Bluebox zařízení musí být umístěno přibližně ve stejné výšce jako SRR stanice v **maximální vzdálenosti 2 metry**, aby byla zajištěna spolehlivá detekce záznamů děrování.

Další informace o Bluebox zařízeních naleznete v části [Jak používat Bluebox jednotky](bluebox-units) a [Jak používat Bluebox Mobile](bluebox-mobile).

**Nejlepším postupem je umístit Bluebox zařízení ve směru odběhu závodníků, čímž se výrazně zvýší spolehlivost zachycení záznamu ražení, především v případě SIACu**