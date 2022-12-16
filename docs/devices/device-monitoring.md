---
sidebar_position: 4
---

# Device monitoring

Device monitoring allows a user to check the status of the Bluebox devices and monitor incoming punch records during events.

Device monitoring is available only for logged in users in the OResults admin section. There are two options where you can monitor Bluebox devices:

- **Devices tab**
- **Event Settings**

## Device status

Any Bluebox device can be in three different states:

- `OFFLINE`: device is not connected to the Internet
- `ONLINE`: device is connected to the Internet and ready to send any received punch records
- `OVERDUE`: the device status is delayed and if it is not received within 30 seconds, the device will be marked as offline. Status delay can be caused by an increased punch record traffic at a radio control with a low signal because punch records take precedence over statuses.

:::tip
Hover cursor over the battery icon if you want to know the exact battery percetage.
:::

## Devices tab

The Devices tab contains two tables:

- `Rented Blueboxes`: contains all Blueboxes which you have rented from us for your event. Blueboxes will be assigned to your account by the OResults administrator.
- `Mobile apps`: contains all mobile devices which you have created in your account. Here you can also find `API tokens` of your devices. 

:::tip
Click on the name of your Bluebox device to change its name.
:::

<img src="/img/devices-monitor.png" width="100%" />

## Event Settings

You can also monitor your devices in **Radio devices** section in the settings of the event to which you assigned them (see **[How to manage an event](../events/setup.md)**).

:::tip
The **Radio devices** section contains second table **Recent punches** where you can see **last 7 punch records** of your event. Use this table to check whether your devices are able to send punch records before the event starts.
:::

<img src="/img/event-devices-monitor.png" width="100%" />