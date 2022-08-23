---
sidebar_position: 1
---

# How to setup a radiocontrol

This manual describes how to set up radiocontrols using the [SPORTident system](https://www.sportident.com/).

For information on how the Bluebox system works, see *link_about_page*.

# Required equipment

For each radiocontrol you need:

- One or more SI stations equipped with a SRR transmitter (**BSF8-SRR** or newer)
    - Only SRR stations must be used (instead of standard SI stations) at all radiocontrols.
- One [Bluebox unit](bluebox-units) or one [Bluebox Mobile](bluebox-mobile) device

:::tip
Some clubs and organizers own SRR stations and USB dongles for Bluebox Mobile devices. If you don't have your own, it is possible to rent them (see link Rental option).
:::

# Before the event

## Setup the SI stations

The SPORTident stations are set up using the [SPORTident Config+](https://www.sportident.com/products.html#software) software. 

The SI SRR stations must be set up as shown in the following figures.

### Contactless mode

`Radio` set to `Send last record` - SIACs are sending punch records towards Bluebox devices.

`Auto send` must be checked - the SI SRR station sends the punch record towards Bluebox devices in case of contact punching

Other parameters can be set freely according to the needs of the event.

<img src="/img/Untitled.png" width="100%" />

### Contact mode

`Auto send` must be checked - the SI SRR station sends the punch record towards Bluebox devices in case of contact punching

Other parameters can be set freely according to the needs of the event.

<img src="/img/Untitled%201.png" width="100%" />


# On the day of the event

## Radiocontrol deployment

The SI SRR stations work the same as standard SI stations and can be placed on racks as you are used to.

**One Bluebox device** is capable of receiving punch records from **up to 8 SRR stations or SIACs** at the same time. So if you have doubled control (two SRR station at one control), you still only need one Bluebox device for the whole control.

The Bluebox device can be placed either on the same stand as the SRR station or on a separate stand. The Bluebox device must be placed at approximately the same height as the SI stations at a **maximum distance of 2 metres** to ensure reliable detection of punch records.

For more information about the Bluebox devices see [How to use Bluebox units](bluebox-units) and [How to use Bluebox Mobile](bluebox-mobile).

**The best practice is to place the Bluebox device in the run-off direction of the competitors which will greatly increase the reliability of punch record capture, mainly in case of SIACs.**
