# Glamorgan Heating & Cooling static site

This is a 12-page, locally runnable HTML/CSS/vanilla JavaScript site. The approved Direction A homepage and all eleven inner pages share Glamorgan's navy, teal, gold, and ivory design system. Headlines use Libre Baskerville; body and controls use DM Sans.

The homepage is available at `/` and `/direction-a/`; the earlier B and C directions remain at their own routes for comparison. See `DIRECTIONS.md` and `direction-screenshots/` for the original client comparison.

## Run locally

With Node.js 20 or newer, run `node server.mjs` in this folder, then open `http://127.0.0.1:4173/`. Set the `PORT` environment variable if that port is occupied. No build step is required. The server maps the eleven internal routes to the shared `index.html`; `app.js` renders content from `site-data.json`. The homepage lives in `home.js`/`home.css`, and inner pages use `inner-pages.js`/`inner-pages.css`.

## Pages

Home, Air Conditioning, Heating, Indoor Air Quality, Ductless, Plumbing, Other Services, Promotions & Options, Blog, Reviews, Service Areas, and Contact / Request Service. All internal navigation uses local routes. The Promotions route presents permanent service and financing pathways. The blog presents four evergreen guides. The local request form validates fields and points visitors to the phone number or live request page; it does not submit data or show a success claim.

## Visual assets and review

See `assets/README.md` for the active image and font inventory. Original live-page captures remain in `reference-screenshots/` as historical comparison material. New homepage captures are in `final-screenshots/` at 1440 × 900, 768 × 1024, and 390 × 844 CSS pixels. `PRODUCT.md` and `HOMEPAGE-DIRECTION.md` record the Impeccable context and design direction; `DESIGN.md` records the implemented homepage design system. See `CHECKLIST.md` for verification results.

The homepage header displays an enlarged sailboat crest. The top banner and footer link to Glamorgan's Facebook and Instagram profiles. Header, footer, and contact phone links use click-to-call; displayed business addresses open Glamorgan's Google Maps listing.

## Current limitations

The contact form needs a real WordPress or service endpoint before publication. Service-page copy was adapted from the captured live content and needs a final client editorial review. The generated technicians should receive a human identity check against the four reference sheets before publication. This static build is a design and implementation reference for later editable Elementor reconstruction, not a WordPress installation.
# glamorgan-mock-up
