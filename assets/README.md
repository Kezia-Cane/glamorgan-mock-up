# Active asset inventory

| File | Origin and use |
| --- | --- |
| `images/glamorgan-brand-kit.png` | Supplied brand kit, retained intact as design reference. |
| `images/glamorgan-sailboat-logo.jpeg` | Supplied full-size logo, retained intact and displayed on a deliberate near-black field in the header and footer. |
| `images/glamorgan-official-favicon.png` | Official supplied ship-crest favicon, copied intact and used as the site favicon. |
| `images/glamorgan-team-studio.png` | Generated four-person commercial studio group image from the four supplied character references; Direction A team feature and Direction B hero. |
| `images/glamorgan-hero-crew-home.png` | New Direction A hero photograph of four technicians outside a local-style home, generated using the four character sheets as identity references. Prompt: `prompts/hero-crew-home.txt`. |
| `images/glamorgan-home-consultation.png` | Generated technician and homeowner consultation scene for direction C and shared consultation section. Prompt: `prompts/home-consultation.txt`. |
| `images/glamorgan-tech-ac-v2.png` | Revised homepage AC photo using character 1's face and uniform sheet; the technician looks toward the tablet. Prompt: `prompts/ac-v2.txt`. |
| `images/glamorgan-tech-heating-v2.png` | Revised homepage heating photo with character 3 focused on the furnace; prompt: `prompts/heating-v2.txt`. |
| `images/glamorgan-tech-plumbing-v2.png` | Revised homepage plumbing photo with character 5 focused on the sink; prompt: `prompts/plumbing-v2.txt`. |
| `images/glamorgan-tech-{ac,heating,plumbing}.png` | Branded, reference-based technician photos used in service content sections and related-service cards. |
| `images/glamorgan-iaq-filter-reference.png` | New Indoor Air Quality hero photo based on character 1's face and uniform sheet. |
| `images/glamorgan-iaq-filter-install-reference.png` | New filter replacement scene based on character 3's reference sheet. |
| `images/glamorgan-iaq-uv-reference.png` | New ultraviolet air-treatment scene based on character 2's reference sheet. |
| `images/glamorgan-iaq-purifier-reference.png` | New air purifier and humidifier scene based on character 1's reference sheet. |
| `images/glamorgan-ductless-indoor-reference.png` | New Ductless hero photo based on character 4's reference sheet. |
| `images/glamorgan-ductless-outdoor-reference.png` | New outdoor mini-split service scene based on character 3's reference sheet. |
| `images/glamorgan-water-heater-reference.png` | New plumbing water-heater scene based on character 5's reference sheet. |
| `images/service-map-branded.png` | User-supplied Capital Region map with repeated branded sailboats; active homepage service-area image, copied intact. |
| `images/service-map-clean.png` | Earlier marker-free map revision, retained for comparison and rollback; no longer displayed. Prompt: `prompts/service-map-clean.txt`. |
| `images/service-map.webp` | Original local service-area map; still used on the Service Areas page and retained as the source for the edited homepage version. |
| `fonts/dm-sans-{400,500,600,700}.ttf` | Locally hosted DM Sans weights. |
| `fonts/libre-baskerville-{400,700}.ttf` | Locally hosted Libre Baskerville weights. |

The service icons are consistent inline SVG drawings in `app.js`. The new homepage reuses that icon set in a service list. The original character sheets were used only as image-generation references and were not copied into this site. The generic `technician-*` files have been removed; all inner-page service imagery now uses branded photos. No retired campaign graphics are loaded or kept in the active image directory.

`graphics/harbor-wave-lines.svg` and `graphics/sail-seam-lines.svg` are code-native decorative linework used only as Direction A section backgrounds. They contain no text or photo content.
