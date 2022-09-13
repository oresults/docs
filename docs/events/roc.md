---
sidebar_position: 4
---

# ROC protocol

The ROC protocol implements a plain text output of punch records which is used by most orienteering software to receive live punch records.

Each orienteering software has its own name for the service supporting the ROC protocol such as **Online input** or **Remote input**. See the documentation of your orienteering software for more information.

## ROC in OResults

**Request Query:** `https://api.oresults.eu/roc`

**Parameters:**
- `unitId`: OResults event ID (you can find it in the URL of your event) 
- `lastId`: last punch ID (usually automatically filled in by your orientation software)

**Response Example:**
```
1;1;2067971;2022-05-21 08:45:19
2;1;2144039;2022-05-21 09:53:40
3;1;8636192;2022-05-21 09:53:47
4;1;2144039;2022-05-21 09:59:17
```

Each row contains one punch record. The values are separated by semicolons and represent the **punch record ID**, **control code**, **SI card** and **punch timestamp**.


