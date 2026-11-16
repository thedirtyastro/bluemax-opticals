// ─────────────────────────────────────────────────────────────
// BLUEMAX OPTICALS — VERIFIED BUSINESS DATA
// Edit this file to update the phone number, address, or rating
// everywhere on the site at once. Every value here is sourced
// from confirmed business details — do not add unverified claims
// (doctor names, certifications, prices, hours) without checking
// with the business owner first.
// ─────────────────────────────────────────────────────────────

export const business = {
  name: "Bluemax Opticals",
  tagline: "Optical Care · Eyewear · Sunglasses · Contact Lenses",
  area: "Whitefield, Bengaluru",

  phone: "+91 96631 55222",
  phoneHref: "tel:+919663155222",
  whatsappNumber: "919663155222", // international format, no symbols
  whatsappHref:
    "https://wa.me/919663155222?text=" +
    encodeURIComponent(
      "Hi Bluemax Opticals, I'd like to know more about your eyewear and services."
    ),

  address: {
    line1: "Shop 2, 56/1, Borewell Road",
    line2: "Near Victorian View, Palm Meadows",
    line3: "Nallurahalli, Whitefield",
    line4: "Bengaluru, Karnataka 560066",
    full: "Shop 2, 56/1, Borewell Road, Near Victorian View, Palm Meadows, Nallurahalli, Whitefield, Bengaluru, Karnataka 560066",
  },

  mapsDirectionsHref:
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent(
      "Bluemax Opticals, Shop 2, 56/1, Borewell Road, Near Victorian View, Palm Meadows, Nallurahalli, Whitefield, Bengaluru, Karnataka 560066"
    ),
  mapsReviewsHref:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Bluemax Opticals Whitefield Bengaluru"),
  mapsEmbedSrc:
    "https://maps.google.com/maps?q=" +
    encodeURIComponent(
      "Bluemax Opticals, Shop 2, 56/1, Borewell Road, Nallurahalli, Whitefield, Bengaluru 560066"
    ) +
    "&output=embed",

  rating: {
    value: 4.6,
    count: "30+",
    label: "Public reviews",
  },

  serviceArea: [
    "Whitefield",
    "Nallurahalli",
    "Palm Meadows",
    "ITPL surroundings",
    "Hoodi",
  ],

  // Set to null until the owner confirms — never fabricate hours.
  hours: null as string | null,

  // Set to a verified handle when confirmed — omitted from the UI until then.
  instagramHandle: null as string | null,
};

export const siteUrl = "https://www.bluemaxopticals.com"; // placeholder — replace with the live domain before launch
