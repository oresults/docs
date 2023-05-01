---
sidebar_position: 4
---

# Upload from SI-Droid Event
Tutorial how to upload results to **[OResults](https://oresults.eu/)** service using only mobile device connected to the internet (via Wifi/hotspot or mobile data). Make the event even more attractive to participants by sharing the results online.

:::caution
It works only on mobile devices with Android operating system. 
:::

## SI-Droid Event app

<img src="/img/si-droid-icon.png" alt="SI-droid" />

- **OS**: Android (the only supported)
- **Donwload link**: **[here](https://play.google.com/store/apps/details?id=se.joja.sidroid.event.full)**

Favorite and very popular mobile app that is used to arrange orienteering events with SPORTident units. The app is paid, but the investment is definitely worth it and it's lifetime. Just buy it if you don't already have it, you won't regret.

## Automate app

<img src="/img/automate-icon.jpg" alt="Automate" /> 

- **OS**: Android (the only supported)
- **Donwload link**: **[here](https://play.google.com/store/search?q=automate&c=apps)**

Free powerful mobile app that allows you to automate almost any process in your device. After installation and the first run you need to grant the right permissions.

## Step-by-step setup
### 1. Create a new event
- sign up for free on **[OResults.eu](https://oresults.eu/register)**
- click on `Create +` in `My events` section and fill in the details
- leave `Is Published` off for testing purposes and confirm `Save changes`
- copy the `Api key` in the `Tools` section in the panel on the right

  <img src="/img/oresults-events.jpg" align="top" width="30%" style={{marginRight: "15px"}}  />
  <img src="/img/oresults-event-settings.jpg" align="top" width="30%" style={{marginRight: "15px"}}  />
  <img src="/img/oresults-event-apikey.jpg" align="top" width="30%" />

### 2. Set up regular export of results
- in `RESULTS` tabs in `SI-Droid Event` click three dots in the upper right corner and tap `Share Automatic`
- tick `Results for Eventor (IOFv3 XML)` option
- set the interval value, for example, 30 sec (the shortest possible)
- select a directory for export and allow access
<img src="/img/si-droid-05-write-permission.jpg" align="top" width="60%" />
- press the grey button to start the automatic export (`SHARING RUNNING`)

  <img src="/img/si-droid-01-three-dots.jpg" align="top" width="40%" style={{marginRight: "15px"}}  />
  <img src="/img/si-droid-02-menu.jpg" align="top" width="40%" style={{marginRight: "15px"}}  />

  <img src="/img/si-droid-03-settings.jpg" align="top" width="30%" style={{marginRight: "15px"}}  />
  <img src="/img/si-droid-04-start.jpg" align="top" width="29%" />

### 3. Get and import Automate flow
- download the flow (**[click here](/attachments/oresults-upload.flo)**)
- import the flow to the `Automate` app - the three dots in the upper right corner and click `Import`

  <img src="/img/automate-flow-01-list.jpg" align="top" width="45%" style={{marginRight: "15px"}} />
  <img src="/img/automate-flow-02-import.jpg" align="top" width="45%" />

### 4. Start flow and follow the instructions
- open imported flow (click on `oresults-upload` or similar item which was added after the import) and press `START` button
- two windows will pop up one by one - `Set event Api key` and select xml file with results
  - paste the copied `Api key`, confirm `OK`
  - select the exported xml file (the file must exist, start automatic export first), confirm `OK`

  <img src="/img/automate-flow-03-start.jpg" align="top" width="30%" style={{marginRight: "15px"}} />
  <img src="/img/automate-flow-04-set-apikey.jpg" align="top" width="30%" style={{marginRight: "15px"}} />
  <img src="/img/automate-flow-05-select-file.jpg" align="top" width="30%" />

:::caution
To close the pop-up window, you must enter any value, e.g. an invalid one and select xml file.
:::

### 5. Share event
- use built-in QR Code generator and print the code or share in on event webpage

<img src="/img/oresults-event-apikey.jpg" align="top" width="30%" />

:::danger Important
Don't forget to switch `Is Published` if you want to publish the event.
:::

### 6. Check out [OResults.eu](https://oresults.eu/)
- scann QR Code and follow how your buddies, rivals, clubmates or family are doing

:::tip
You can switch between event data and evets settings using the button in the upper left corner (you have to be logged in)
:::

## Advanced settings
### 1. More columns/radiocontrols
Additional columns/data can be added (will be filled in after the read-out) to the screen after importing courses and selecting radiocontrols (fake ones) in `Prepare` section in the event settings.

This selection:
<img src="/img/oresults-event-select-radiocontrols.png" />

results in (examples of different classes):
<img src="/img/oresults-event-data-columns01.png" />
<img src="/img/oresults-event-data-columns02.png" />

instead of basic:
<img src="/img/oresults-event-data-columns03.png" />

:::caution
Without imported courses it is not possible to select radio controls.
:::

### 2. Upload start list
Creating a start list with a mass start in an external program ([QuickEvent](https://github.com/Quick-Event/quickbox), [MeOS](https://www.melin.nu/meos/en/), [OE12](https://sportsoftware.de/orienteering/oe), ...) and then manually uploading it to OResults will allow you to view all the competitors who should start, so you can see who hasn't read-out yet.

:::danger Important
You have to manually delete `ClassStart/Class/Id` node **for all classes**. Use a text editor such as Notepad++ or Visual Code that highlights the xml syntax to avoid errors..
:::

Example for class `A`:
```xml
<!-- original -->
<ClassStart>
		<Class>
			<Id>1</Id>
			<Name>A</Name>
		</Class>
```
```xml
<!-- edited -->
<ClassStart>
		<Class>
			<Name>A</Name>
		</Class>
```

`<Id>1</Id>` was removed.

### 3. Add radiocontrols
Using **[Mobile App](../tutorials/bluebox-mobile.md)** you can even more improve the result service at your event with real radiocontrol.

### 4. Manually added competitors
Competitors who ran **without a card**, e.g. only with a paper card with manual punching and were **manually entered** into the SI-Droid Event will get into the OResults web page only if you insert **unique** `External id` value in competitor's properties. The value can be a number or text or a combination of both.

<p align="center" width="100%">
  <img src="/img/si-droid-06-edit-runner.jpg" align="center" width="40%" />
</p>

## Know issues
### Expired write permission in SI-Droid Event
- You have to reselect the directory for exporting the xml files from SI-Droid Event app in the export setting (`Location` section). Running the export is not enough! Expired permission results in the exported file not being overwritten. Export directory contains files like `results.xml`, `results(1).xml`, `results(2).xml`, ... Selecting the directory again updates the write permission.

<p align="center" width="100%">
  <img src="/img/si-droid-07-error-renaming.jpg" align="center" width="40%" />
</p>

## Support
In case of any issue do not hesitate to contact official OResults support at tech@oresults.eu in Czech or English.