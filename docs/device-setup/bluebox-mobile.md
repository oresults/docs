# How to use Bluebox Mobile

Read these instructions before using Bluebox Mobile app.

:::note
This is a beta version of the app so small bugs may appear.
:::

# Required equipment

- 1x device with Android and internet connection
- 1x USB to micro USB / USB-C adapter based on your device
- 1x [SPORTident USB dongle](https://www.sportident.com/documents/si-radio/SRR-Kit/SPORTident_SRR-Dongle.pdf)

![SPORTident USB dongle](/img/dongle_transparent.png){width=20%}

# Before the event

## Download and install the app

The latest version of Bluebox Mobile app can be found under the Devices tab in the OResults admin section.

Install the app using the downloaded installation file. You may need to allow installation from unknown sources.

## Set up the app

The first time you start the app, enter the app settings and fill in the **API token**. You can find your API tokens in the OResults admin section.

Optionally, you can set on which channel your USB dongle is receiving punch records (see [How to setup a radiocontrol](./radio-control.md)).

<img src="/img/Screenshot_20220820-215516_Bluebox_Mobile.jpg" width="40%" />

## Connect the USB dongle

Connect the SI USB dongle to your device using a USB to micro USB / USB-C adapter of your choice.

![IMG_20220820_220146 - Copy.png](/img/IMG_20220820_220146_-_Copy.png)

## Launch the app

To start the app, **select the connected USB dongle** that appears on the main screen of the app. This will **open a Status screen** of the selected dongle. 

The Status screen says **Connected** when the app is launched correctly. **The app reads** **the punch records** from the USB dongle and **sends** them **to the server only** if you are **on the Status screen**. The received punch records are also displayed on the Status screen.

<img src="/img/Screenshot_20220820-215619_Bluebox_Mobile.jpg" width="30%" style={{marginRight: "10px"}} />
<img src="/img/Screenshot_20220820-215729_Bluebox_Mobile.jpg" width="30%" />

You can use battery save mode by using the lock icon in the header. This will darken the screen to the minimum.

**You must not close the app for it to work properly**.

:::note
The app could work if you lock your phone on some Androids but only until you unlock it again. After that, you need to exit the status page and select the connected dongle again. Once selected, the app will again give you a status of **Connected.**
:::

## Ensure the Internet connection

Make sure that your device is connected to the Internet in the place where ****of the radiocontrol.

# On the day of the event

## Placement of the device

Connected USB dongle must be placed at approximately the same height as the SI stations at a **maximum distance of 2 metres** to ensure reliable detection of punch records.

## Monitoring

Unit monitoring is available by logging into your OResults administrator account. Here you can monitor whether units are online, battery levels, signal strength, punch records traffic and more.

See *the event setup (link)* for more information about monitoring of the units.
