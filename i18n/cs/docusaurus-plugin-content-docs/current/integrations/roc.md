---
sidebar_position: 3
---

# ROC protokol

Protokol ROC je implementací jednoduchého textového formátu záznamů ražení, který používá většina orientačních softwarů pro příjem živých záznamů ražení.

Každý orientační software má vlastní název pro službu podporující protokol ROC, například **Online vstup** nebo **Vzdálený vstup**. Další informace naleznete v dokumentaci k orientačnímu softwaru.

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

Každý řádek obsahuje jeden záznam o ražení. Hodnoty jsou odděleny středníkem a představují **ID záznamu o ražení**, **kontrolní kód**, **karta SI** a **časové razítko ražení**.


