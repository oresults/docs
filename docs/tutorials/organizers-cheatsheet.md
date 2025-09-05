---
sidebar_position: 1
---

# Organizers Cheatsheet

A streamlined checklist to help organizers ensure nothing is overlooked when preparing and running an OResults-powered event.

:::tip
If you don't have online controls, check out the [**How to get Blueboxes**](how-to-get-blueboxes) first.
:::

## Before the Event

1. **🆕 Create a new event**
   - Go to **My Events → Create event**.
   - Fill in required details: event name, organizer, date/time, timezone, location, and visibility (public or private).
   - Copy the event link or QR code for promotion. (see [**How to manage events**](setup))
2. **📝 Startlists & Integration**
   - **Check your software for event management first**
     - Supported integrations: MeOS (via MOP), QuickEvent (QE), OE12.
     - If your software is supported, simply **turn on the integration inside the software** — it will automatically upload startlists, results, and updates to OResults.
     - In this case, there is usually **no need to manually upload XML files**.
   - **Manual upload (only if integration is not available)**
     - If your software does not support direct integration, upload startlists and results manually in the event settings.
     - Upload files in the correct XML format, including `<ControlCard>` tags for SI card numbers.
   - **⚠️ Important: Upload one way only**
     - Use **either integration or manual upload**, not both.
     - Mixing methods can lead to formatting conflicts and inconsistent results being shown online.
   - See [**Integrations**](../category/integrations)
3. **🔋 Charge and prepare Blueboxes**
   - In the **Admin → Devices** tab, check that your rented Blueboxes are listed (contact us if not)
   - Confirm all Blueboxes are charged by turning them on and checking in the admin section
   - In your **Event Settings**, assign the Blueboxes to this event (see [**Devices**](../blueboxes/devices))
4. **⚙️ Check SPORTident station configuration**
   - Verify that online control stations are configured exactly as described in the [**Setup Radio Control guide**](radio-control).
   - Required settings:
     - ✅ "Auto Send" enabled on SI-SRR stations
     - ✅ "Send last record" enabled for SIAC support
   - ⚠️ If not set, Blueboxes will **not** receive punches.

## Day of the Event

1. **🚀 Turn on and deploy Blueboxes**
   - Power up the Blueboxes, attach the SPORTident station and place it at the control.
   - See [**Blueboxes**](../blueboxes/bluebox-units) for best placement practices.

:::tip
**Switch on the Bluebox before handing it to the person delivering it to the control point.** The Bluebox may lose signal during transport, but don't worry — it should reconnect automatically within a few minutes.
:::

2. **🔗 Turn on integration in your software**
   - In MeOS, QuickEvent, or OE12, make sure the OResults integration is enabled and running.
3. **📊 Monitor Bluebox status**
   - In the event settings, confirm Blueboxes show as **online** and that punches are flowing.
   - If a Bluebox shows **overdue**, this usually means the last status was delayed due to weaker signal or a temporary spike in punch data traffic.
     - In most cases, the status will return to **online** within a short time.

## After the Event

1. **📦 Return Blueboxes**
   - Collect all Blueboxes from the forrest.
   - Pack the rented material back to the box you've received it in
   - Check the [**Online Controls Guide**](how-to-get-blueboxes) on how to return the rented material
2. **💬 Submit Organizer Feedback**
   - Provide feedback, suggestions, or note issues encountered.

:::tip
Print this cheatsheet or keep it open on a tablet/phone  for quick reference.
:::
