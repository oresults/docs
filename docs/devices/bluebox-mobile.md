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
- 1x **[SPORTident USB dongle](https://www.sportident.com/documents/si-radio/SRR-Kit/SPORTident_SRR-Dongle.pdf)**

<img src="/img/srr-dongle.png" width="40%" alt="SPORTident USB dongle"/>

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

The first time you start the app, enter the app settings and fill in the **API token**. 

<!--Optionally, you can set on which `Channel` your USB dongle is receiving punch records (see [How to setup a radiocontrol](./radio-control.md)). -->

:::caution
Do not forget to set the **API token** in the settings tab, found in the OResults admin section under **Devices**. 
:::

<img src="/img/bb-mobile-settings.jpg" width="50%" alt="Bluebox Mobile Settings"/>

### Connect the USB dongle

Connect the SPORTident USB dongle to your device using a USB to micro USB / USB-C adapter of your choice.

<img src="/img/mobile-dongle.svg" width="45%" alt="Phone with dongle" />

### Notes

* App connects to the SPORTident USB dongle automatically but make sure you accept all needed permissions (and check the "always" button) so the dongle can auto re-connect when the contact is loose.
* If you deny the app the location permissions, signal strength will not be sent to the OResults service and will be missing in the dashboard.
* App prevents the phone entering sleep mode. Do not leave the app running in the background if you are not using it, it will drain your battery. 
* **Device** screen shows incoming punches (green) and dongle connection status messages (yellow). **Punches** tab displays saved punches and their *send / not send yet* status.


### Ensure the Internet connection

Make sure that your device is connected to the Internet in the place of your radio control.

## On the day of the event

### Placement of the device

:::danger
Connected USB dongle must be placed at approximately **the same height as the SI stations** at a **maximum distance of 2 metres** to ensure reliable detection of punch records.
:::

### Monitoring

>See **[Device monitoring](./device-monitoring)**.

## Privacy policy (Bluebox Mobile)

OResutls (Otakar Hirš and Jan Jurica) built the Bluebox Mobile app as a Free app. This SERVICE is provided by OResutls at no cost and is intended for use as is.

This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.

If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing the Service. We will not use or share your information with 3rd party.


**Information Collection and Use**

For a better experience, while using our Service, we may require you to provide us with the device location. This enables us to access the signal strength of the device in order to display the device status it in the web dashboard. We only transmit the signal strength as a value between 0-5 and precise location can not be inferred. This information is stored indefinitely, but you can request the deletion from the database via our contact email. You may choose to not provide location permission to the app, in which case the signal strength will not be transferred and available in the dashboard.

**Security**

The information can be transferred using unsecure connection, and we cannot guarantee its privacy.

**Changes to This Privacy Policy**

We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.

This policy is effective as of 2022-10-12

**Contact Us**

If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at info@oresutls.eu.

