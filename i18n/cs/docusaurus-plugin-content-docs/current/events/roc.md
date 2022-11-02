---
sidebar_position: 4
---

# ROC protokol

Protokol ROC je implementací jednoduchého textového výstupu záznamů ražení, který používá většina orientačních softwarů pro příjem živých záznamů ražení.

Each orienteering software has its own name for the service supporting the ROC protocol such as **Online input** or **Remote input**. See the documentation of your orienteering software for more information.

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

Each row contains one punch record. The values are separated by semicolons and represent the **punch record ID**, **control code**, **SI card** and **punch timestamp**.


