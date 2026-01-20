---
sidebar_position: 1
---

# Tahák pro organizátory

Zjednodušený kontrolní seznam, který pomáhá organizátorům zajistit, aby při přípravě a průběhu události s OResults na nic nezapomněli.

:::tip Tip
Pokud nemáte online kontroly, podívejte se nejprve na [**Jak zajistit Blueboxy**](how-to-get-blueboxes).
:::

## Před událostí

1. **🆕 Vytvořit novou událost**
   - Přejděte na **My Events → Create event**.
   - Vyplňte požadované údaje: název události, organizátor, datum/čas, časové pásmo, místo a viditelnost (veřejná nebo soukromá).
   - Zkopírujte odkaz na událost nebo QR kód pro propagaci. (viz [**Jak spravovat události**](setup))
2. **📝 Startovní listiny a integrace**
   - **Nejprve zkontrolujte váš software pro správu události**
     - Podporované integrace: MeOS (přes MOP), QuickEvent (QE), OE12.
     - Pokud je váš software podporován, jednoduše **zapněte integraci přímo v softwaru** — automaticky nahraje startovní listiny, výsledky a posílá aktualizace do OResults.
     - V tomto případě obvykle **není potřeba ručně nahrávat XML soubory**.
   - **Ruční nahrání (pouze pokud integrace není dostupná)**
     - Pokud váš software nepodporuje přímou integraci, nahrajte startovní listiny a výsledky ručně v nastavení události.
     - Nahrávajte soubory ve správném XML formátu, včetně značek `<ControlCard>` pro čísla SI čipů.
   - **⚠️ Důležité: Nahrávejte pouze jedním způsobem**
     - Používejte **buď integraci, nebo ruční nahrání**, ne oboje.
     - Míchání metod může vést ke konfliktu formátů a nekonzistentním výsledkům zobrazeným online.
   - Viz [**Integrace**](../category/integrations)
3. **🔋 Nabít a připravit Blueboxy**
   - Na záložce **Admin → Devices** zkontrolujte, že vaše pronajmuté Blueboxy jsou v seznamu (pokud ne, kontaktujte nás)
   - Potvrďte, že všechny Blueboxy jsou nabité jejich zapnutím a kontrolou v admin sekci
   - V **Nastavení události** přiřaďte Blueboxy k této události (viz [**Devices**](../blueboxes/devices))
4. **⚙️ Zkontrolovat konfiguraci SPORTident krabiček**
   - Ověřte, že SI krabičky pro online kontrol jsou nakonfigurovány přesně podle popisu v [**Průvodci nastavení radiokontroly**](radio-control).
   - Požadované nastavení:
     - ✅ "Auto Send" povoleno na SI-SRR stanicích
     - ✅ "Send last record" povoleno pro podporu SIAC
   - ⚠️ Pokud není nastaveno, Blueboxy **nebudou** přijímat ražení.

## V den události

1. **🚀 Zapnout a rozmístit Blueboxy**
   - Zapněte Blueboxy, připojte SPORTident stanici a umístěte na kontrolu.
   - Podívejte se na [**Blueboxy**](../blueboxes/bluebox-units), kde najdete rady, jak nejlépe Blueboxy umístit.

2. **🔗 Zapnout integraci ve vašem softwaru**
   - V MeOS, QuickEvent nebo OE12 se ujistěte, že je integrace OResults povolena a běží.
3. **📊 Monitorovat stav Blueboxů**
   - V nastavení události potvrďte, že Blueboxy ukazují **online** a že posílají ražení.
   - Pokud Bluebox ukazuje **overdue**, obvykle to znamená, že poslední stav byl zpožděn kvůli slabšímu signálu nebo dočasnému velkému počtu posílaných ražení.
     - Ve většině případů se stav vrátí na **online** během chvilky.

## Po události

1. **📦 Vrátit Blueboxy**
   - Stáhněte všechny Blueboxy z lesa.
   - Zabalte pronajmutý materiál zpět do krabice, ve které jste ho obdrželi
   - Zkontrolujte [**Jak zajistit Blueboxy**](how-to-get-blueboxes), kde je info jak vše vrátit
2. **💬 Pošlete nám zpětnou vazbu**
   - Poskytněte zpětnou vazbu, návrhy nebo poznamenejte problémy, se kterými jste se setkali.

:::tip Tip
Vytiskněte si tento tahák nebo jej mějte otevřený na tabletu/telefonu pro rychlou referenci.
:::
