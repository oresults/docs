---
sidebar_position: 4
---

# ROC protokol

Protokol ROC je implementací jednoduchého textového výstupu záznamů ražení, který používá většina orientačních softwarů pro příjem živých záznamů ražení.

Každý orientační software má svůj vlastní název pro servisu, která protokol ROC podporuje, například **Online input** nebo **Remote input**. Více informací naleznete v dokumentaci k vašemu orientačnímu softwaru.

## ROC v OResults

**Request Query:** `https://api.oresults.eu/roc`

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

Každý řádek obsahuje jeden záznam ražení. Hodnoty jsou odděleny středníkem a představují **ID záznamu ražení**, **číslo kontroly**, **číslo SI čipu** a **čas ražení**.