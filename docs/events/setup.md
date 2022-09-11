---
sidebar_position: 1
---

# Create and manage an event

Let's take a look on how to easily create and manage events in OResults.

## Create an account for organizers

If you don't have one yet, create a free OResults account for organizers (see [registration](https://oresults.eu/register)). Your account will allow you to log in to the OResults admin section.

:::note
The rest of the manual is devoted to the admin section, which can only be accessed by a logged-in OResults user.
:::

## My events

You can see all your events in My events tab from where you can access event settings, [speaker modules](./speaker.md) and create a new event.

:::tip
If an event is not published, it is only available in My Events. You can access the results tables by clicking on the event name.
:::

<img src="/img/my-events.png" width="100%" />

## Event settings

### General settings

This section is used to set essential information about the event and upload Start list, Courses and Results files. 

:::caution
**All files** must be in the **IOF XML** defined format and **Courses** are also accepted in **OCAD V8 format**.
:::

:::tip
You can also find your `Event API key` which can be be used for automatic upload of the results. For more information about automatic upload of results see [OResults Connector](./connector.md).
:::

<img src="/img/event-main-setup.png" width="100%" />

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

You can monitor assigned Bluebox devices and punch records traffic in the Radio devices section as shown in the picture. For more information about monitoring see [Device monitoring](../devices/device-monitoring.md).

<img src="/img/event-devices-monitor.png" width="100%" />

### Danger zone

:::caution
All actions taken in the Danger zone are irreversible.
:::

If you are struggling with some errors in the results you can always use option to delete runners which will delete start list and results and upload them back again.

:::note
Delete Runners or Delete Courses do **NOT** delete already received punch records from radio controls.
:::

<img src="/img/event-danger-zone.png" width="100%" />