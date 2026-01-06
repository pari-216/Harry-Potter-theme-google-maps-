# Harry Potter Marauder's Map (Google Maps JS API)

A custom Harry Potter–themed web map built with the Google Maps JavaScript API and cloud-based map styling.  
It uses a parchment-style color palette, custom pixel-art markers for Hogwarts locations, and a styled Map ID from Google Cloud.

---

## Features

- Custom Google Map with cloud-based styling (parchment / Marauder's Map theme).
- Map centered on the Hogwarts region with custom zoom level.
- Harry Potter locations like Hogwarts, Hogsmeade, and the Forbidden Forest.
- Custom pixel-art marker icons for each location.
- Fully responsive map container styled with CSS.

---

## Tech Stack

- **HTML**: Basic page structure and map container.
- **CSS**: Layout + Harry Potter parchment look.
- **JavaScript**: Google Maps JavaScript API for map, markers, and settings. [web:134]
- **Google Cloud Platform**: Map style, Map ID, and API key management. [web:61]

---

## Getting Started

1. **Create a Google Cloud project**

   - Enable the **Maps JavaScript API** for your project. [web:134]
   - Create an **API key** and restrict it to your domain/localhost and the Maps JavaScript API. [web:127]

2. **Create a styled map and Map ID**

   - Open the Google Maps **Cloud-based map style editor**. [web:61][web:93]
   - Apply the parchment / Harry Potter colors to:
     - Base land, water, roads, forests, crops, sand, ice, etc.
     - Business, commercial, business corridors, road network, trails, pedestrian malls.
   - Save the style and create a **Map ID** attached to this style.

3. **Clone or download this project**

   ```bash
   git clone <your-repo-url>
   cd <your-repo-folder>

