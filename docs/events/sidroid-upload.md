---
sidebar_position: 5
---

# Upload from SI-Droid
Short manual how to upload results to the OResults service using just mobile device conected to the internet (WiFi/hotspot or mobile data). Make your event even more atractive sharing the online reults.

## SI Droid app
Very popular mobile app for Android OS that is used for handling orienteering events with SPORTident units. You have to setup automatic export of results in xml format to the folder with interval e.g. 30s (the shortest possible).

## Automate app
Powerful mobile app that can automate almost all processes in your device. After the instalation all premissions have to be granted.

## Setup step by step 
1. Create new event at [OResults.eu](https://oresults.eu/) and copy api key (figure 1)
2. Setup regular export every e.g. 30s and switch to Running status (figure 2)
3. Download and import [flow](../../static/attachments/oresults-upload.flo) to the Automate app - three dots in the upper right corner.
4. Start flow and follow the instructions - insert apiKey and select file (the file have to exist)
5. Share the event link using QR Code
6. Check the [OResults.eu](https://oresults.eu/) page scanning qr code and follow your buddies, rivals, clubmates or family.

### Know issues
- **Expired write permission in SI Droid**
  - You have to reselect exported directory everytime you want to use regular export in SI Droid app. Just starting the exporting is not enough. It results in not overwriting the exported file. Export folder then contains files like results.xml, results(1).xml, results(2).xml, ... Reselecting the directory means regranting the write premission which expired to the folder.

### Support
In case of issues do not hesitate to contact oficial oresults support tech@oresults.eu in czech or english.