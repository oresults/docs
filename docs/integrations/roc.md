---
sidebar_position: 3
---

# ROC protocol

The ROC protocol implements a plain text output of punch records which is used by most orienteering software to receive live punch records.

Each orienteering software has its own name for the service supporting the ROC protocol such as **Online input** or **Remote input**. See the documentation of your orienteering software for more information.

:::tip
The ROC protocol is used to download live punches to your orienteering software in case you want to comment on an event directly from the speaker module of your orienteering software. Setting the frequency at which the punches are downloaded will always cause a delay for the commentator, so we recommend using our **[Live feed](../tutorials/speaker.md)** feature directly on OResults.
:::

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


## Using ROC in orienteering software

This information is based on our best knowledge of the software and it is possible that the latest versions have made some changes. In case of unexpected events, please do not hesitate to **[contact us](https://oresults.eu/contact)**.

### MeOS

You can download punches from OResults to MeOS using **Remote Input** on the page Services. 

- Check **Use ROC protocol**
- Check **Use Unit ID instead of Event ID**
- Set up **URL** as mentioned above.
- **Event ID** is the `unitId` as mentioned above.

Further information can be found in the **[MeOS documentation](https://www.melin.nu/meos/en/show.php)**.

### OE12

You can download punches from OResults to OE12 using **Online monitor - Client Web** functionality.

- Choose **ROC olresultat** option.
- Set **URL** to  `api.oresults.eu`
- Set **Query** to `/roc`
- **Event ID** is the `unitId` as mentioned above.

Further information can be found in the **[OE12 handbook](https://sportsoftware.de/downloads)**.
