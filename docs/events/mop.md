---
sidebar_position: 5
---

# MeOS Online Protocol (MOP)

MeOS Online Protocol (MOP) allows publishing of results, split times and start lists from MeOS orienteering software to the Internet (in our case to OResults).

:::tip
If you are using **[MeOS](https://www.melin.nu/meos/en/)**, there is no need to setup startlists, courses, results and radio controls in the OResults admin section

**Everything can be done directly from MeOS.**
:::

Go to Service tab in your MeOS and open Results Online where you can set all necessary information of your event as shown in the picture.

<img src="/img/mop_screenshot.png" width="100%" />

## Important Settings

- **Send to the web**: `https://api.oresults.eu/meos`
- **Password**: `Api key` which can be found in the admin section of your OResults event
- ***Competition ID number***: can be left empty (not used)
- **Compress large files (zip)**: `unchecked` (not yet supported)
- **Time interval (seconds)**: `0` (recommended, but it depends on your needs)
- **Export format**: `MeOS Online Protocol XML 2.0`

:::caution
Start time of your OResults event must be the same as the start time in MeOS.
:::

Finally, **set up** all your **radio controls**.

:::tip
Once the service is running on MeOS, you can check that everything is set up correctly in the OResults admin section.
:::