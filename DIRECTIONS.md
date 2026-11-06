# Glamorgan homepage directions for client selection

Open [A](http://127.0.0.1:4173/direction-a/), [B](http://127.0.0.1:4173/direction-b/), or [C](http://127.0.0.1:4173/direction-c/) while `node server.mjs` is running. The root route currently mirrors A. The slim selector bar is only for this design review; remove it when one direction is approved. The other eleven pages retain their prior layouts.

| Direction | Visual idea | Conversion advantage | Brand advantage | Motion | Elementor rebuild |
| --- | --- | --- | --- | --- | --- |
| **A · Harbor Editorial** | Ivory editorial canvas, a large local-service headline, framed technician photo, teal edge, and navy service-area panel. | Immediate geographic proof beside request and call actions. | Makes the crest's navy, teal, and gold feel like a distinctive local publication. | Gentle rule and image reveal can be added without changing content order. | Two-column hero, image, service-area panel, service rows, and standard section containers. |
| **B · Coastal Service Motion** | Full-width four-person team photograph under a deep navy veil, with a horizontal service selector. | Heating, cooling, plumbing, and air-quality paths are available in the first viewport. | Most energetic expression of the uniform stripe colors and full crew. | Slow bounded photo drift on wide screens; stops under reduced motion and on mobile. | Hero background/image overlay plus four service links; motion is optional. |
| **C · Crafted Local Trust** | Human consultation photo beside a plainspoken headline and visible review path. | A homeowner sees the conversation and next step before scrolling. | The approachable technician portrait carries the brand more than decoration does. | Minimal control feedback; no moving background. | Conventional split hero, photo, trust row, and native buttons; easiest to reproduce faithfully. |

**Client preference: A.** Harbor Editorial is the direction being refined. Its sections now use a navy, teal, ivory, and gold background rhythm with subtle ship-crest watermarks and restrained sail-inspired geometry. B and C remain available for comparison.

Direction A now leads with a newly generated four-technician photograph outside a home. The earlier studio group image appears in a dedicated team section between the service process and customer reviews. Quiet wave and sail-seam linework gives the longer sections a stronger Glamorgan signature without placing decoration over text.

## Shared content and safeguards

All three use the supplied logo and favicon, the approved palette and fonts, the existing verified review text, local service coverage, service and process sections, phone and request links, map address, and social links. The consultation image is generated from the first supplied character reference. Existing generated photos cover the team, HVAC equipment, furnace diagnostics, and plumbing. Reference sheets are not served by the website. The photo likenesses still need a human approval pass before publication.

The pages use semantic HTML, ordinary images and links, CSS variables from the existing home system, and vanilla JavaScript for the shared navigation and review controls. The local request form remains a preview without a submission endpoint. Each direction is a static design reference for a future editable Elementor rebuild through NovaMira.

## Review evidence

Nine full-page captures live in `direction-screenshots/`, named `direction-{a,b,c}-{desktop,tablet,mobile}.png`. Direction A's three captures were refreshed after its section-background polish on 2026-11-06. Browser checks at 1440 × 900, 768 × 1024, and 390 × 844 found no horizontal overflow or failed image loads. The mobile drawer opened and closed, a review advanced, and persistent mobile call access was present. Impeccable desktop and mobile URL scans reported zero findings for all three routes. Browser device scaling made the physical screenshot widths larger than the specified CSS viewports.

## Strategic references

Direction A's service-area section now places the branded map directly on the split background (no white card), enlarges it to 520px on desktop, and displays the complete 25-community coverage list responsively.

The internal concept selector is removed from the public Direction A page. Hero, service-area, consultation, and footer whitespace now carries low-contrast crest, wave, and sail-seam artwork with section-specific brand gradients.

The consultation image was regenerated with the technician explaining an HVAC diagram on a tablet instead of presenting a blank checklist. The footer uses the supplied sailboat logo at a larger display size, with crest artwork removed from the footer background so the linework stays clear.

The consultation section now uses a clearly colored Sea Teal gradient with ivory text and gold link accents. A transparent-background PNG copy of the sailboat logo is used for the header and footer so no black rectangle appears around the mark.

Direction A also has home-only scroll choreography: sections and repeated service/work/list items reveal gently as they enter the viewport, image cards lift slightly on hover, and all motion is disabled under `prefers-reduced-motion`.

Current contractor sites such as [Peterman Brothers](https://petermanhvac.com/location/lexington/) and [One Hour Heating & Air Conditioning](https://www.onehourheatandair.com/) place service categories, location relevance, and call or booking actions near the top. These are conversion patterns only; the three designs retain Glamorgan's own content, photography, and visual identity.
