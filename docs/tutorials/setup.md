---
sidebar_position: 1
---

# Create and manage an event

Let's take a look on how to easily create and manage events in OResults.

## Create an account for organizers

If you don't have one yet, create a free OResults account for organizers (see **[registration](https://oresults.eu/register)**). Your account will allow you to log in to the OResults admin section.

The rest of the manual is devoted to the admin section, which can only be accessed by a logged-in OResults user.

## My events

You can see all your events in My events tab from where you can create a new event and access event settings.

:::tip
Result tables of an unpublished event can be accessed by clicking on the event name in My events section.
:::

## Event settings

### General settings

This section is used to set essential information such as:

- Event name
- Organizer
- Date and start time
- Timezone
- Place
- GPS coordinates

You **must set** whether the event **is** a **relay** event **or not**.

The last setting is to set the event as **published** so it will appear on the OResults event page.

You must upload **Start list**, **Courses** and **Results** files in supported formats (more about supported formats **[here](#supported-formats)**) to properly display event results.

In this section you can also find your **event API key** which is used to automatically upload the start list and results. For more information about automatic upload, see **[OResults Connector](../integrations/connector.md)**.

:::tip
You can easily create **QR Code with a link to your event** using the QR Code button.
:::

<img src="/img/event-main-setup.png" width="100%" />

### Supported formats

**Start list** and **Results** are only supported in **IOF XML 3.0** format.

:::caution
**Start list** and **Results** must contain card numbers in `<ControlCard>` tags. 
* Runners without a card number are ignored.
* Each card number can only be used once. A second runner with an already used card number is ignored.
:::

**Courses** are supproted in **OCAD V8 format** text file format and **IOF XML 3.0**.

:::tip
**Courses** are preferred in **OCAD V8 format** which is much smaller and more suitable for uploading than IOF XML 3.0.
:::

### Setup radio controls

Select all radio controls. The radio controls will automatically appear in their respective classes in the results tables.

:::caution
Finish control is selected automatically whether you have it as a radio control or not. **Finish control must have a code lower than 30.**
:::

<img src="/img/event-radios-setup.png" width="100%" />

### Assign Bluebox devices

You can open the table with available Bluebox devices using the switch in the Radio devices section.

<img src="/img/event-assign-devices.png" width="100%" />

### Monitor Bluebox devices

You can monitor assigned Bluebox devices and punch records traffic in the Radio devices section as shown in the picture. For more information about monitoring see **[Device monitoring](../blueboxes/device-monitoring.md)**.

<img src="/img/event-devices-monitor.png" width="100%" />

### Danger zone

:::danger
All actions taken in the Danger zone are irreversible.
:::

If you are struggling with some errors in the results you can always use option to delete runners (which will delete start list and results) and upload them back again.

:::info
**Don't worry.** Delete Runners or Delete Courses do **NOT delete** already **received punch records** from radio controls.
:::

<img src="/img/event-danger-zone.png" width="100%" />