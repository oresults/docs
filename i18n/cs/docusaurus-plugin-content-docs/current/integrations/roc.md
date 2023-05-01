---
sidebar_position: 3
---

# ROC protokol

Protokol ROC je implementací jednoduchého textového formátu záznamů ražení, který používá většina orientačních softwarů pro příjem živých záznamů ražení.

Každý orientační software má vlastní název pro službu podporující protokol ROC, například **Online vstup** nebo **Vzdálený vstup**. Další informace naleznete v dokumentaci k orientačnímu softwaru.

:::tip

The ROC protocol is used to download live punches to your orienteering software in case you want to comment on an event directly from the speaker module of your orienteering software. Setting the frequency at which the punches are downloaded will always cause a delay for the commentator, so we recommend using our **[Live feed](../tutorials/speaker.md)** feature directly on OResults.
:::


## ROC v OResults

**Dotaz:** `https://api.oresults.eu/roc`

**Parametry:**
- `unitId`: ID události v OResults (naleznete v URL vaší události)
- `lastId`: ID posledního záznamu ražení (většinou automaticky vyplňuje váš orientační software)

**Příklad odpovědi:**
```
1;1;2067971;2022-05-21 08:45:19
2;1;2144039;2022-05-21 09:53:40
3;1;8636192;2022-05-21 09:53:47
4;1;2144039;2022-05-21 09:59:17
```

Každý řádek obsahuje jeden záznam o děrování. Hodnoty jsou odděleny středníkem a představují **ID záznamu o ražení**, **kontrolní kód**, **karta SI** a **časové razítko ražení**.


## Použití ROC v orientačních softwarech

This information is based on our best knowledge of the software and it is possible that the latest versions have made some changes. In case of unexpected events, please do not hesitate to **[contact us](https://oresults.eu/contact)**.

### MeOS

Ražení z OResults můžete do systému MeOS stáhnout pomocí funkce **Online vstup** na stránce Služby.

- Zaškrtněte **Použít protokol ROC**
- Zaškrtněte **PoužíPoužij ID zařízení místo ID závodu**.
- Nastavte **URL**, jak je uvedeno výše.
- **ID číslo závodu** je `unitId`, jak je uvedeno výše.

Další informace naleznete v **[dokumentaci systému MeOS](https://www.melin.nu/meos/en/show.php)**.

### OE12

Ražení z OResults můžete do OE12 stahovat pomocí funkce **Online monitor - Client Web**.

- Vyberte možnost **ROC olresultat**.
- Nastavte **URL** na `https://api.oresults.eu`.
- Nastavte **Query** na `/roc`.
- **Event ID** je `unitId`, jak je uvedeno výše.

Další informace naleznete v příručce **[OE12 handbook](https://sportsoftware.de/downloads)**.
