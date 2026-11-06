---
name: Glamorgan Heating & Cooling homepage
description: A practical, editorial service design for Capital Region homeowners.
colors:
  harbor-navy: "#092b4c"
  deep-navy: "#061d32"
  sea-teal: "#236d72"
  antique-gold: "#e5b84f"
  signal-red: "#c93635"
  warm-ivory: "#fff8e8"
  white: "#ffffff"
  ink: "#153348"
  body: "#425565"
  line: "#cbd7d9"
typography:
  display:
    fontFamily: "Libre Baskerville, Georgia, serif"
    fontSize: "clamp(2.65rem, 4.05vw, 4.65rem)"
    fontWeight: 700
    lineHeight: 1.14
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Libre Baskerville, Georgia, serif"
    fontSize: "clamp(2rem, 3vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.14
    letterSpacing: "-0.03em"
  title:
    fontFamily: "DM Sans, Arial, sans-serif"
    fontSize: "1.16rem"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "DM Sans, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.58
  label:
    fontFamily: "DM Sans, Arial, sans-serif"
    fontSize: "0.91rem"
    fontWeight: 700
    lineHeight: 1.2
rounded:
  button: "2px"
spacing:
  button-y: "13px"
  button-x: "22px"
  section: "104px"
components:
  button-primary:
    backgroundColor: "{colors.antique-gold}"
    textColor: "{colors.deep-navy}"
    rounded: "{rounded.button}"
    padding: "13px 22px"
    height: "52px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.harbor-navy}"
    rounded: "{rounded.button}"
    padding: "13px 22px"
    height: "52px"
---

# Design System: Glamorgan Heating & Cooling Homepage

## Overview

**Creative North Star: "The Local Service Editorial"**

The current homepage pairs clear, service-led information with commercial photographs of Glamorgan's technicians. The official sailboat logo sits on an intentional black field. White and ivory space, fine rules, and legible type give the page a calm, capable character.

This is the homepage's implemented design system. The other eleven static pages have not been rebuilt into it; future WordPress work should use this as the visual reference only after the homepage direction is approved.

**Key Characteristics:**

- A four-person team image leads; supporting photographs show real home-service work.
- Editorial serif headings and direct sans-serif service copy establish hierarchy.
- Broad sections and thin dividers organize information without repetitive card tiles.
- The request action is gold; urgent mobile service access uses red.

## Colors

### Primary

- **Harbor Navy:** Navigation utility bar, trust strip, dark content section, and key text.
- **Deep Navy:** Mobile drawer and dark interface surfaces.

### Secondary

- **Sea Teal:** Section accents, text links, service iconography, and the closing action band.

### Tertiary

- **Antique Gold:** Primary request buttons, focus outline, and restrained dark-surface accents.
- **Signal Red:** Urgent service action in the mobile bottom bar only.

### Neutral

- **Warm Ivory:** Hero and service-area grounds.
- **White:** Main reading surfaces and light text on dark grounds.
- **Ink and Body:** Headings and supporting copy on light grounds.
- **Line:** Light service-row dividers.

**The Reserved Accent Rule.** Keep gold concentrated on the primary action and small points of emphasis; reserve red for urgent service access.

## Typography

Libre Baskerville is the heading and review-quotation face, with Georgia as fallback. DM Sans serves body copy, navigation, labels, and controls, with Arial as fallback. Both families are hosted locally.

- **Display:** Bold serif with tight tracking and a responsive clamp; used for the hero statement.
- **Headline:** Bold serif at the section scale; balanced line wrapping keeps blocks deliberate.
- **Title:** Bold sans-serif for service names and process steps.
- **Body:** Regular sans-serif with generous line height; supporting copy stays narrow enough to scan.
- **Label:** Bold sans-serif for buttons, utility text, captions, and short data points.

**The Plain Service Rule.** State the service first, then explain it in short, ordinary language.

## Layout

The page uses a centered container capped at 1320px with 32px outer gutters on desktop, 20px at tablet, and 16px at mobile. Major sections have 104px vertical padding on desktop, 77px at tablet, and 64px at mobile. The hero has a two-column copy band on desktop that stacks at 1050px; its team photo spans the full viewport width below at its natural aspect ratio on every screen. Service links form two columns until 600px, then one. The trust strip moves from four columns to two. The process and image grids collapse into readable single-column flows on phones.

**The People First Rule.** Show the entire group portrait without cropping at the supported desktop, tablet, and mobile widths.

## Elevation & Depth

The system is flat by default. Dark and light section grounds, borders, photography, and spacing establish depth. A small menu shadow separates the desktop dropdown; the mobile action bar gets a subtle lift above content. Cards do not use generic floating shadows.

## Shapes

Controls are square or almost square. Main buttons use a 2px corner radius; review arrows and menu controls remain square. Thin horizontal rules divide services, steps, and footer content. Images retain clean rectangular crops.

## Components

### Buttons

The gold request button has a 52px minimum height, 13px by 22px padding, and a two-pixel radius. It lifts by 2px on hover and brightens. The outlined call button shares its size and geometry. All interactive controls use a visible gold focus outline with a 4px offset.

### Navigation

The desktop logo occupies a black header beside service links, phone, and request action. Less frequent routes live in a More menu. Below 1050px, navigation moves to a deep-navy drawer with a scrim. The drawer traps focus while open and restores focus to its opener when closed. A three-action service bar stays fixed at the bottom on phones.

### Service rows

Each row uses a teal line icon, a short service name, supporting sentence, and arrow. Fine dividers separate rows; hover changes the name and nudges the arrow instead of raising a card.

### Review panel

A gold top rule introduces a single verified quotation set in the serif face. Previous and next square controls change the visible review; a position label communicates the current item.

### Service-area map

The existing local map sits on white with a subtle border and modest inset. City names use a ruled two-column list beside it, then stack with the map on phones.

## Do's and Don'ts

### Do:

- **Do** use the official logo against a black header or footer field.
- **Do** show permanent technician, equipment, and local-home imagery.
- **Do** keep service and contact actions clear at every supported width.

### Don't:

- **Don't** introduce seasonal or temporary campaign artwork or copy.
- **Don't** turn service links into a grid of raised, repetitive cards.
- **Don't** use Signal Red as a general decorative accent.
