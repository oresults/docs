---
sidebar_position: 3
---

# Bluebox Mobile

Read these instructions before using Bluebox Mobile app.

:::caution
This is a beta version of the app so small bugs may appear.
:::

## Required equipment

- 1x device with Android and internet connection
- 1x USB to micro USB / USB-C adapter based on your device
- 1x [SPORTident USB dongle](https://www.sportident.com/documents/si-radio/SRR-Kit/SPORTident_SRR-Dongle.pdf)

<img src="/img/dongle_transparent.png" width="35%" alt="SPORTident USB dongle"/>

## Before the event

### Create a new Bluebox Mobile device

You can create a new Bluebox Mobile device in the Devices tab in the OResults admin section.

:::tip
Click on the name of your Bluebox Mobile device to change its name.
:::

### Download and install the app

The latest version of Bluebox Mobile app can be found under the Devices tab in the OResults admin section.

Install the app using the downloaded installation file. You may need to allow installation from unknown sources.

### Set up the app

The first time you start the app, enter the app settings and fill in the `API key`. 

Optionally, you can set on which `Channel` your USB dongle is receiving punch records (see [How to setup a radiocontrol](./radio-control.md)).

<img src="/img/Screenshot_20220820-215516_Bluebox_Mobile.jpg" width="40%" alt="Bluebox Mobile Settings"/>

:::caution
Do not forget to set the **API key** in the settings tab, found in the OResults dashboard under *Devices*
:::


### Connect the USB dongle

Connect the SPORTident USB dongle to your device using a USB to micro USB / USB-C adapter of your choice.

<img src="/img/IMG_20220820_220146_-_Copy.png" width="85%" alt="Phone with dongle" />

### Notes

* The app will connect to the SPORTident USB dongle automatically, but make sure you accept needed permissions (and check the "always" button), so the dongle can auto re-connect when the contact is loose.
* If you denny the app the location permissions, signal strength will not be sent to the OResults service and will be missing in the dashboard.
* The app prevents the phone entering sleep mode. Do not leave the app running in the background if you are not using it, it will drain your battery. 
* **Device** screen shows incoming punches (green) and dongle connection status messages (yellow). **Punches** tab displays saved punches and their *send / not send yet* status.


### Ensure the Internet connection

Make sure that your device is connected to the Internet in the place of your radio control.

## On the day of the event

### Placement of the device

:::danger
Connected USB dongle must be placed at approximately **the same height as the SI stations** at a **maximum distance of 2 metres** to ensure reliable detection of punch records.
:::

### Monitoring

>See [Device monitoring](./device-monitoring).
