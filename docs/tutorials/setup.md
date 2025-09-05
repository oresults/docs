---
sidebar_position: 3
---

# How to manage events

Let's take a look on how to easily create and manage events in OResults.

:::note
If you don't have one yet, create a free OResults account for organizers (see **[registration](https://oresults.eu/register)**). Your account will allow you to log in to the OResults admin section where you find My events section.
:::

## Event settings

You find all your events in My events section where you can also create new ones and access event settings.

### Event info

Here you set basic information about your event such as:

- Event name
- Organizer
- Date and start time
- Timezone
- Place
- GPS coordinates

### Visibility

In this section you set the event as **private** or **public**. The **public** events are visible on the OResults event page.

### Tools

**API key** allows you to connect your orienteering software to OResults and automatically upload startlists, results and more. See **[Integrations](../category/integrations/)** for more info about how to connect your orienteering software with OResults.

**Event link** provides you with a link to your event in the form of text and a QR code, which you can then embed in your promotional materials.

<img src="/img/event-main-setup.png" width="100%" />

### Runners & Courses

Here you can upload startlists, courses and results in supported formats.

:::caution
**Start list** and **Results** must contain card numbers in `<ControlCard>` tags. Runners without a card number are ignored.
:::

:::tip
- SI station with codes **1-28** are automatically selected as **finish control.**
- SI station with code **29** is selected as a **start control** (in case there is punch start).
:::

The list of controls will be displayed after uploading the courses. Check all the controls wich you want have as online controls.

<img src="/img/event-runners-courses.png" width="100%" />

:::tip
The current information on supported formats is displayed by hovering over the individual labels.
:::

### Blueboxes

Here you will find Blueboxes assigned to the event and can assign others.

You can also monitor the status of your Blueboxes during your event, including signal strength, battery charge and the last recorded punch on the device.

**Bluebox status can be:**

- **`OFFLINE`**: device is not connected to the Internet
- **`ONLINE`**: device is connected to the Internet and ready to send any received punch records
- **`OVERDUE`**: the device status is delayed and if it is not received within 30 seconds, the device will be marked as offline. Status delay can be caused by an increased punch record traffic at a radio control with a low signal because punch records take precedence over statuses.

<img src="/img/event-blueboxes.png" width="100%" />

### Troubleshooting & Danger zone

These sections contain a variety of information and tools for dealing with some of the issues that may arise during your event. All the information you need is described on the Event Settings page.