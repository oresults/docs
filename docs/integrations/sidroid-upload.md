---
sidebar_position: 5
---

# Upload from SI-Droid Event
Tutorial how to upload results to **[OResults](https://oresults.eu/)** service using only mobile device connected to the internet (via Wifi/hotspot or mobile data). Make the event even more attractive to participants by sharing the results online.

:::caution
It works only on mobile devices with `Android` operating system. 
:::

## SI-Droid Event app

<img src="/img/si-droid-icon.png" alt="SI-droid" />

- **OS**: Android (the only supported)
- **Download link**: **[here](https://play.google.com/store/apps/details?id=se.joja.sidroid.event.full)**

Favorite and very popular mobile app that is used to arrange orienteering events with SPORTident units. The app is paid, but the investment is definitely worth it and it's lifetime. Just buy it if you don't already have it, you won't regret.

## SIDroid OResults Connector

<img src="/img/sidroid-oresults-connector-icon
.jpg" width="150px" alt="SIDroid OResults Connector" /> 

- **OS**: Android (the only supported)
- **Download link**: **[here](https://play.google.com/store/apps/details?id=com.yogevm15.sidroid_oresults_connector)**

Connect between `OResults.eu` and `SI-Droid Event` easily.
Just fill the SI-Droid result service `port` and OResults.eu event `Api Key` and start uploading!

## Step-by-step setup
### 1. Create a new event
- Sign up for free on **[OResults.eu](https://oresults.eu/register)**
- Click on `Create +` in `My events` section and fill in the details
- Leave `Is Published` off for testing purposes and confirm `Save changes`
- Copy the `Api key` in the `Tools` section in the panel on the right

  <img src="/img/oresults-events.jpg" align="top" width="30%" style={{marginRight: "15px"}}  />
  <img src="/img/oresults-event-settings.jpg" align="top" width="30%" style={{marginRight: "15px"}}  />
  <img src="/img/oresults-event-apikey.jpg" align="top" width="30%" />

### 2. Set up SI-Droid result service
- In any tab in `SI-Droid Event` click on the three dots in the upper right corner and tap `Settings`
- In the `Settings menu` scroll down and click on `Result service`
- Tick the `Use the builtin result service` option
- Copy the `Port` in the `Result Service port` section

  <img src="/img/si-droid-01-three-dots.jpg" align="top" width="40%" style={{marginRight: "15px", marginBottom: "15px"}}  />
  <img src="/img/si-droid-02-menu.png" align="top" width="40%" style={{marginRight: "15px", marginBottom: "15px"}}  />

  <img src="/img/si-droid-03-result-service.png" align="top" width="30%" style={{marginRight: "15px"}}  />
  <img src="/img/si-droid-04-tick-and-copy.png" align="top" width="29%" />

### 3. Connect result service to OResults and start uploading
- Open the `SIDroid OResults Connector` app
- Paste both the `Api key` and the `Port` into their respective input fields.
- Choose the `Upload internval` speed
- Click the `Start uploading` button and the uploading will start!

  <img src="/img/sidroid-oresults-connector-01-enter-api-key-and-port.jpg" align="top" width="30%" style={{marginRight: "15px"}} />
  <img src="/img/sidroid-oresults-connector-02-upload-interval-and-events-log.jpg" align="top" width="30%" style={{marginRight: "15px"}} />

:::tip
You can view the upload's log in the bottom of the app (each upload log has a detailed report).
:::

:::tip
`SIDroid OResults Connector` app automatically generates an `External id` to each competitor, so there is not need to enter manually external id's to participants without a card.
:::

### 4. Share event
- use built-in QR Code generator and print the code or share in on event webpage

<img src="/img/oresults-event-apikey.jpg" align="top" width="30%" style={{marginRight: "15px", marginBottom: "15px"}}/>

:::danger Important
Don't forget to switch `Is Published` if you want to publish the event.
:::

### 5. Check out [OResults.eu](https://oresults.eu/)
- scan QR Code and follow how your buddies, rivals, clubmates or family are doing

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

<p align="center" width="100%">
  <img src="/img/si-droid-05-startlist-upload.jpg" align="center" width="40%" />
</p>

### 3. Add radiocontrols
Using **[Mobile App](../byo/bluebox-mobile)** you can even more improve the result service at your event with real radiocontrol.

## Support
In case of any issue do not hesitate to contact official OResults support at tech@oresults.eu in Czech or English.