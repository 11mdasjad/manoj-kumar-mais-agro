# Inspection and content migration

Inspected on 25 November 2026.

## Initial repository state

`/Users/asjadmac/Desktop/maisagro` was empty: no package manifest, Next.js application, Git repository, routes, assets, API code, database settings, or environment/deployment files. The user was asked for an alternative source path; no alternative was provided during implementation. This is a Next.js implementation in the supplied workspace, not an in-place migration of unavailable backend code.

The live website served server-rendered HTML with Bootstrap styles, CSRF-protected forms, and legacy content labels referring to unrelated commodity-trading services. Exact server framework/version and database integrations cannot be determined from the public HTML alone.

## Source inventory

All content sources use `https://manish01-1.onrender.com`:

| Existing source                               | New route / use                                                                       |
| --------------------------------------------- | ------------------------------------------------------------------------------------- |
| `/`                                           | Homepage project names, contact details, published project status                     |
| `/products` and four `/products/[slug]` pages | `/properties` and matching `/properties/[slug]` routes                                |
| `/projects` and four `/projects/[slug]` pages | `/projects` and existing project slugs                                                |
| `/services` and four `/services/[slug]` pages | Four existing service detail slugs preserved                                          |
| `/blog` and two `/blog/[slug]` pages          | `/insights`; original article body, title, author, and date preserved                 |
| `/about-us`                                   | `/about`; company focus retained without unsupported history/certification claims     |
| `/contact-us`                                 | `/contact`; both phone numbers, email, office address and hours                       |
| `/images/...`                                 | Local `public/images` assets                                                          |
| `/privacy-policy`, `/terms-and-conditions`    | Linked as existing business policies; new pages describe the actual website interface |

Project names, descriptions, locations, published handover dates and completion status are retained. Published apartment price ranges, plot prices per square foot, and farmland prices per acre are retained. Commercial pricing remains on request. Exact parcel/unit availability is not asserted.

The homepage hero is an original AI-generated architectural inspiration image, not a specific property. Listing/project images retain their original associations. The site notes where images may be illustrative. Current photographs and project-specific documentation should be confirmed with the company.

## Updated amenity photographs

The Mais Commercial Gateway card and project gallery now use a real black-and-white exterior photograph of a retail plaza by Dextar Studio: https://www.pexels.com/photo/shopping-modern-district-16140812/. It is stored at `public/images/projects-commercial-plaza-real.webp` under the Pexels license and labelled representative, not an actual photo of Mais Commercial Gateway. The unrelated secondary tower image was removed from this project's gallery. The homepage autoplay architecture video is unchanged. No tests were run, per the user's preference.

The Mais Green Acres project card and project gallery use a real aerial farmland photograph by Jeswin Thomas, taken in Thrikkadeeri, Kerala, India: https://www.pexels.com/photo/areal-view-of-green-fields-16970055/. The image is licensed under the Pexels license and stored at `public/images/projects-green-acres-farmland.webp`. It is explicitly labelled representative on the card and project page, not an actual photograph of Mais Green Acres or Bhubaneswar. No tests were run for this image replacement, per the user's preference.

At the user's request, the homepage amenity cards now use relevant real stock photographs instead of the previous generic tree, book-spine, and laptop images. They are explicitly labelled as representative, not photographs of Mais Royal Heights. The original project/listing photos remain unchanged.

| Local asset | Photographer | Source |
| --- | --- | --- |
| `public/images/amenities-jogging-path.webp` | Markus Winkler | https://www.pexels.com/photo/photograph-of-a-park-with-trees-and-green-grass-5356817/ |
| `public/images/amenities-reading-room.webp` | cottonbro studio | https://www.pexels.com/photo/wooden-tables-inside-the-library-6333732/ |
| `public/images/amenities-retail-shops.webp` | Jerry Zhang | https://www.pexels.com/photo/modern-shopping-mall-interior-with-escalators-39962496/ |

Source license: https://www.pexels.com/license/. Downloaded photographs were converted to local 1200px WebP assets without AI generation. CSS object positioning preserves the subjects in the existing cards. No tests were run, per the user's preference.

## Content deliberately excluded

The land due-diligence journal article's unrelated portrait has been replaced with a real close-up photograph of document signing by Kindel Media: https://www.pexels.com/photo/a-person-writing-on-a-paper-7054510/, under the Pexels license. The local asset is `public/images/journal-property-document-signing.webp`. Shared article data supplies the same image to homepage cards, the insights listing, the article cover, and its social metadata. Alt text identifies it as representative photography; it is not presented as an actual Mais Agro House transaction. No tests were run for this image replacement, per the user's preference.

- Testimonials and customer portraits: the existing site uses stock portraits; customer approval/authenticity could not be established. `TestimonialsSection` accepts explicitly approved testimonials and renders nothing by default.
- Unverified achievements, buyer counts, guaranteed returns, certifications, approval badges, and unconditional title guarantees.
- Team portraits: stock-photo associations could not be verified.
- Unrelated grain-export, port-logistics, commodity/RFQ, and construction-EPC copy.
- Generic social destinations such as a bare YouTube homepage.

The original journal articles are preserved verbatim, with an accompanying general-information notice; their legal/market assertions were not independently verified or rewritten. Project-specific title documents and approvals were unavailable for independent review.

## Backend integration boundary

Observed forms:

- `POST /contact-us`: `_token`, `website_hp`, `name`, `email`, `phone`, `company`, `subject`, `message`.
- `POST /enquiry`: `_token`, `type`, `item_id`, `item_name`, `website_hp`, `name`, `email`, `phone`, `company`, `quantity_requirement`, `message`.

These are server form actions, not a documented public API. Session cookies, CSRF tokens, item IDs, authentication rules, data models, rate limits, and success/error response contracts were not available in source. No form was submitted to the old production server. No live inquiry or site-visit message was sent.

Current frontend delivery is an explicit WhatsApp handoff to +91 80080 07062. To integrate a direct backend later:

1. Obtain the original source/API contract and decide the authenticated server-to-server submission flow.
2. Implement a Next.js route handler that validates the typed `Inquiry` payload, rate-limits requests, and calls the approved backend with server-only credentials.
3. Preserve anti-spam and consent requirements; never embed copied CSRF tokens or secrets in the client.
4. Replace the WhatsApp preparation step with the adapter, showing success only after the backend acknowledges receipt. Retain the WhatsApp alternative.
5. For site visits, distinguish a request acknowledgement from an actually confirmed appointment.

No deployment or original backend was changed.

## Architectural inspiration film

The featured commercial-project panel separately uses the user-supplied `https://pin.it/6FvOXA9Km`, resolving to pin `589619776263714482`. Its complete approximately 60-second portrait film is presented as architectural inspiration, with a source link. Local desktop/mobile silent H.264 exports are stored as `public/videos/commercial-architecture-loop.mp4` and `commercial-architecture-loop-mobile.mp4`, with a local poster. As explicitly requested, this panel uses muted inline autoplay, continuous looping, and no playback controls or click-to-pause behavior. Browser autoplay and background-tab policies still apply. Its portrait composition is preserved over a soft poster backdrop. No tests were run for this change, per the user's instruction.

The homepage now includes the video explicitly supplied by the user at `https://pin.it/7JI2YakOl`, resolving to Pinterest pin `618611698867111273`. The pin identifies the creator as MONTANI3D STUDIO. Creator credit and a link to the original film are displayed beneath the player.

This is presented as architectural inspiration, not attached to a Mais Agro House listing. The complete approximately 27-second vertical composition is preserved. Local H.264 MP4 exports provide 720px desktop and 480px mobile versions at 30 fps, with fast-start metadata. They are silent visual exports; the Pinterest audio is omitted. The original remote source is unchanged.

The player loads video only when requested (`preload="none"`), uses a first-frame poster, and includes native play/pause, seek, and fullscreen controls. It never autoplays and pauses when the page is hidden or the video leaves view. The hero links directly to this section.

## Reference-led visual redesign

### Pinterest logo adaptation

The user supplied `https://pin.it/wsU9V2wBz` (pin `867013365780842291`) as the new logo. Its original artwork says “Triangle Trading Group”. Built-in ImageGen adapted the architectural emblem into a transparent, text-free asset; the shared Brand component supplies the correct “MAIS AGRO HOUSE” name as accessible HTML. This is an adapted rendering, not the unchanged original artwork.

Saved assets: `public/images/mais-brand-emblem.webp` (384 × 256, transparency preserved) and `src/app/icon.png` (64 × 64). The emblem appears in the shared navbar and footer on a light ivory surface for contrast. The PNG replaces the previous browser icon using Next.js file-based metadata.

Final built-in ImageGen edit prompt:

> Use case: background-extraction. Edit the supplied logo image for a real estate website. Preserve closely the original emblem: three metallic gold skyscrapers, gold construction crane on left, small green tree, dark bronze/slate house roof and four-pane window in front. Remove all of the bottom text 'TRIANGLE TRADING GROUP' completely; no letters or text anywhere. Remove the white background and surrounding cast shadows to create a genuinely transparent RGBA cutout. Keep the 3D metallic material, same proportions, same arrangement and recognizable silhouettes. Center only the architecture emblem in the frame with a small even transparent margin, filling 90 percent of the available width, no giant blank lower area. Crisp clean edges, suitable for a website logo rendered small. Do not add objects, border, plaque, badge, watermark or new wording. The company name will be rendered separately in HTML.

Production build and TypeScript compilation passed. The browser tab icon was visually verified; the Chrome page capture was blank, so final navbar/footer visual verification remains outstanding.

The supplied UI reference, `https://pin.it/5jBCPnUcn`, resolves to Pinterest pin `998673286146280820`. The implementation adapts its blue-sky villa composition, oversized lettering behind the roof, rounded navigation, and open layout to Mais Agro House. The reference screenshot is not embedded in the site. The new image is illustrative; existing listing photographs and content remain associated with their original properties.

The existing Next.js routes and interactive components are retained. Search now sits below the hero, and the architectural film follows the featured property collection. Inner pages share the new blue-gray palette, rounded panels, and Manrope typography, with Playfair Display accents.

### Generated hero asset

- Tool: built-in ImageGen (not the CLI).
- Final project asset: `public/images/mais-villa-hero.webp`, compressed from the generated 1672 × 941 image.
- The two Next.js Image layers share the same optimized image URL; the foreground layer lets live HTML branding appear behind the villa roof.
- Final generation prompt:

> Use case: photorealistic-natural. Asset type: original luxury real-estate website hero background, architectural inspiration (not an actual listing). Create a photorealistic high-end tropical modern villa, wide horizontal 16:9, straight-on architectural elevation with slight cinematic low perspective, pale ivory concrete two-story rectangular cantilevered villa, warm teak soffits, large glass walls, lush palms at the far left and right edges, long turquoise reflecting pool and pale stone terrace across the bottom. Bright clear cyan-blue sky fills the TOP 48 PERCENT, empty and uniform with almost no clouds so live HTML oversized typography can sit there. Roof line of the main villa sits around 48 percent from top. Entire facade visible, not cut off, main house centered occupying width 75 percent. Slim palms at the edges can extend upward into sky. Quiet luxury, immaculate crisp sunlight, physically plausible materials and proportions, editorial architecture photography. No people, no cars, no lettering, no logo, no watermark, no UI, no borders, no montage. Important: generous clear SKY above the roof and full pool terrace below, balanced symmetric composition. Render as a polished website photographic asset.
