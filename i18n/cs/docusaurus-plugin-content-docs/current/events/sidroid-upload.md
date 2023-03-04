---
sidebar_position: 5
---

# Upload from SI-Droid
Short tutoriaů how to upload results to OResults service using only mobile device conected to the internet (WiFi/hotspot or mobile data). Make the event even more attractive to participants by sharing the results online.

## SI-Droid app
![](../../static/img/si-droid-icon.png)<br /> Favorite and very popular mobile app for Android OS that is used to arrange orienteering events with SPORTident units. You have to setup up automatic export of results in xml format to the directory in an interval e.g. 30s (the shortest possible).

## Automate app
![](../../static/img/automate-icon.jpg)<br /> Powerful mobile app that allows you to automate almost any process in your device. After instalation and the first run you need to grant the right permissions.

## Setup step by step
### **1.** Create a new event on [OResults.eu](https://oresults.eu/) and copy the api key
  <img src="/img/oresults-events.jpg" align="top" width="30%" style={{marginRight: "15px"}} />
  <img src="/img/oresults-event-settings.jpg" align="top" width="30%" style={{marginRight: "15px"}} />
  <img src="/img/oresults-event-apikey.jpg" align="top" width="30%" />

### **2.** Set up a regular export every e.g. 30s in SI-Droid and switch to Running status
  <img src="/img/si-droid-01-three-dots.jpg" align="top" width="20%" style={{marginRight: "15px"}} />
  <img src="/img/si-droid-02-menu.jpg" align="top" width="20%" style={{marginRight: "15px"}} />
  <img src="/img/si-droid-03-settings.jpg" align="top" width="20%" style={{marginRight: "15px"}} />
  <img src="/img/si-droid-04-start.jpg" align="top" width="20%" />

### **3.** Download and import the [flow](../../static/attachments/oresults-upload.flo) to the Automate app - the three dots in the upper right corner.
  <img src="/img/automate-flow-01-list.jpg" align="top" width="45%" style={{marginRight: "15px"}} />
  <img src="/img/automate-flow-02-import.jpg" align="top" width="45%" />

### **4.** Start flow and follow the instructions - paste the copied **api key** and select the exported xml file (the file must exist)
  <img src="/img/automate-flow-03-start.jpg" align="top" width="30%" style={{marginRight: "15px"}} />
  <img src="/img/automate-flow-04-set-apikey.jpg" align="top" width="30%" style={{marginRight: "15px"}} />
  <img src="/img/automate-flow-05-select-file.jpg" align="top" width="30%" />

### **5.** Share event link using QR Code
<img src="/img/oresults-event-apikey.jpg" align="top" width="30%" />

### **6.** Check out [OResults.eu](https://oresults.eu/) by scanning qr code and follow how your buddies, rivals, clubmates or family are doing.

## Know issues
**Expired write permission in SI-Droid**
- You have to reselect the directory for exporting the xml files from SI-Droid app in the export setting (Location section). Running thexport is not enough. Expired permission results in the exported file not being overwritten. Directory with exported files contains files likresults.xml, results(1).xml, results(2).xml, ... Selecting the directory again updates the write permission.

## Support
In case of any issue do not hesitate to contact official oresults support at tech@oresults.eu in Czech or English.