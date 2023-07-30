---
sidebar_position: 2
---

# How to setup a radio control

This manual describes how to set up radio controls using the **[SPORTident system](https://www.sportident.com/)**.

Information on how the Bluebox system works are on **[OResults](https://oresults.eu/about)** page.

## Required equipment

For each radio control you need:

- One **[Bluebox](../blueboxes/bluebox-units)** or one Android device with **[Bluebox Mobile app](./bluebox-mobile)**
- One or more SI stations equipped with a SRR transmitter (**BSF8-SRR** or newer)


:::info
Some clubs and organizers own SRR stations and USB dongles for Bluebox Mobile devices. If you don't have your own, it is possible to rent them (see **[information for organizers](https://oresults.eu/organize)**).
:::

:::tip
In case of an event where **all competitiors have SIACs you can only use classic SPORTident stations** instead of the SRR stations on radio controls. Punch record data is sent by the SIAC itself if a station is correctly set.
:::

## Before the event

### Setup the SI stations

The SPORTident stations are set up using the **[SPORTident Config+](https://www.sportident.com/products.html#software)** software. 

The SI SRR stations must be set up as shown in the following images.

### Contactless mode

**Radio** set to **Send last record** - SIACs are sending punch records towards Bluebox devices.

**Auto send** must be checked - the SI SRR station sends the punch record towards Bluebox devices in case of contact punching

Other parameters can be set freely according to the needs of the event.

<img src="/img/Untitled.png" width="100%" />

### Contact mode

**Auto send** must be checked - the SI SRR station sends the punch record towards Bluebox devices in case of contact punching

Other parameters can be set freely according to the needs of the event.

<img src="/img/Untitled%201.png" width="100%" />


## On the day of the event

### Radio control deployment

The SI SRR stations work the same as standard SI stations and can be placed on racks as you are used to.

**One Bluebox device** is capable of receiving punch records from **up to 8 SRR stations or SIACs** at the same time. So if you have doubled control (two SRR station at one control), you still only need one Bluebox device for the whole control.

:::danger
The Bluebox device must be placed at the **same height as the SI stations** at a **maximum distance of 2 metres** to ensure reliable detection of punch records.
:::

:::tip
The Bluebox device can be placed either on the same stand as the SRR station or on a separate stand.
:::
