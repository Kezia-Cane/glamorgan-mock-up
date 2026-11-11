# Build and review checklist

## Inner-page photo pass, 2026-11-12

- [x] Replaced the generic Indoor Air Quality and Ductless hero technician with distinct generated photos based on the supplied character reference sheets.
- [x] Replaced every rendered service-story gradient panel with a relevant technician or equipment photo and added photos to related-service cards.
- [x] Removed the superseded generic `technician-*` files and their HTML, CSS, JavaScript, and data references.
- [x] Checked the new photos and page layout in a browser at desktop and mobile sizes; no horizontal overflow was observed.
- [x] Verified all referenced inner-page image files exist and both edited JavaScript files pass syntax checks.

## Three-direction review, 2026-11-06

- [x] Direction A's new four-technician hero uses all four supplied identity sheets as references. The earlier studio group photo now appears in a separate team section. Extra wave and sail-seam background graphics are scoped to A, and its three responsive screenshots were refreshed.

- [x] Direction A received a second visual pass with coordinated ivory, navy, teal, and gold section surfaces, subtle ship-crest watermarks, and improved background contrast; desktop, tablet, and mobile captures were refreshed. Impeccable desktop and mobile scans remained clear.

- [x] Three selectable homepage routes: A Harbor Editorial, B Coastal Service Motion, C Crafted Local Trust. `/` mirrors A; the other eleven pages were not rebuilt.
- [x] Shared official logo, favicon, phone, map, social links, service content, verified review text, and local service coverage.
- [x] New consultation photograph generated from the supplied technician reference; reference sheet not displayed.
- [x] Nine full-page screenshots saved in `direction-screenshots/` at desktop, tablet, and mobile viewports.
- [x] Browser checks: no horizontal overflow, failed image loads, or clipped headings; mobile drawer and review advance work; mobile call control remains available.
- [x] Impeccable URL scans at desktop and mobile found zero issues after contrast and overlap fixes. Existing local Impeccable installation and design hooks were used; the requested `npx impeccable install` could not run because `npx` is not on this machine's command path.
- [ ] Client chooses one direction and approves technician likenesses before Elementor reconstruction.

## Prior homepage review

The homepage was rebuilt and recaptured at 1440 × 900, 768 × 1024, and 390 × 844 CSS pixels. The remaining eleven pages were not rebuilt in this pass. The live captures provide historical content and responsive-structure reference.

| Page | Local route | Three captures | Content and layout checked |
| --- | --- | --- | --- |
| Home | `/` | ✓, rebuilt | ✓, Impeccable scan clean at all three widths |
| Air Conditioning | `/ac-services/` | ✓ | ✓ |
| Heating | `/heating-services/` | ✓ | ✓ |
| Indoor Air Quality | `/indoor-air-quality-services-in-clifton-park/` | ✓ | ✓ |
| Ductless | `/ductless-services/` | ✓ | ✓ |
| Plumbing | `/plumbing-services/` | ✓ | ✓ |
| Other Services | `/other-hvac-services-in-clifton-park/` | ✓ | ✓ |
| Promotions & Options | `/hvac-promotions-in-clifton-park/` | ✓ | ✓ |
| Blog | `/hvac-blog/` | ✓ | ✓ |
| Reviews | `/reviews/` | ✓ | ✓ |
| Service Areas | `/service-areas/` | ✓ | ✓ |
| Contact | `/contact-us/` | ✓ | ✓ |

## Checks

- Impeccable was installed in `.agents/skills/impeccable`, project hooks were enabled, and product/design context was initialized. The baseline scan identified repeated eyebrow labels, weak contrast, and a heavy review border. The final homepage scans found zero issues at desktop, tablet, and mobile widths.
- New homepage group, AC, furnace, and plumbing photos render without broken paths. The official favicon is in use. The four character sheets remain reference-only and are not served by the site.
- Revised AC, furnace, and plumbing photos are active on the homepage. The work photos show technicians looking at the equipment, and the AC photo was regenerated against character 1's identity sheet. Generated likenesses still require client approval.
- The group photo spans the viewport at desktop, tablet, and mobile widths. Its rendered aspect ratio matches the source image at all three sizes, so all four technicians remain fully visible.
- The homepage service-area map uses the user-supplied image with repeated branded sailboats. The previous separate favicon overlay was removed so it does not duplicate a marker.
- Direction A's map now renders without a surrounding white card, at a larger desktop size, and its service-area list includes all 25 requested Capital Region communities in a responsive three-column/two-column layout.
- The public Direction A page no longer exposes the internal concept selector; branded crest and linework backgrounds now fill the hero, map, consultation, and footer whitespace.
- The consultation scene now shows a tablet-based HVAC explanation, and the footer uses the supplied sailboat logo enlarged with non-overlapping linework decoration.
- The consultation background is now a dark Sea Teal gradient rather than pale/white, and the transparent sailboat PNG removes the logo's black background in the header and footer.
- Direction A scroll reveals and image hover motion are scoped to the selected home direction; Direction B/C and inner pages remain static, with reduced-motion fallbacks verified.
- Direction A includes a centered-logo intro curtain that unlocks the page and triggers the hero entrance sequence on completion; the curtain and hero motion are skipped for reduced-motion users.
- The curtain handoff visibly animates the utility bar, navbar, hero title, text, buttons, image, proof line, and location card; all settle to full opacity after the sequence.
- No horizontal overflow was observed on any route at the three target widths.
- No failed image paths or console errors were observed. Active image URLs and fonts serve from local assets.
- Shared navigation points to local routes; the mobile drawer opens, exposes all page links, traps focus while open, and restores focus to its opener when closed. Its closed links are inert. The footer's Facebook and Instagram destinations match links on the current Glamorgan homepage.
- All local phone labels and call links now use (518) 723-0392, matching Glamorgan's current homepage and contact page. An earlier draft number was removed from both markup and page data.
- The homepage logo was enlarged and checked at desktop, tablet, and mobile widths. Facebook and Instagram appear in the top banner and footer; header, footer, and contact phone links dial the business number. Address links open the Google Maps business listing linked from Glamorgan's live website.
- Home review controls change the visible verified review. The desktop More menu and mobile drawer open and close. The previous reviews-page pagination remains in place.
- The contact form validates locally and avoids a false submission confirmation.
- All active site imagery and copy use permanent home-service themes.

## Before publishing

- Connect the request form to a real endpoint.
- Review all service claims, financing terms, customer quotations, and address with the client. Confirm the published phone number remains current before launch.
- Rebuild as editable Elementor content through the agreed WordPress workflow, then repeat browser checks on the live build.
