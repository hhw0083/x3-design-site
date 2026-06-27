# Design QA

final result: passed

## Scope

- Added `/projects` listing page.
- Added `/projects/[slug]` detail pages for the three studio projects.
- Added `/contact` page based on the provided contact reference image.
- Updated homepage project cards to link to project detail pages.
- Updated header navigation and logo asset.

## Reference

- Contact layout reference: `/var/folders/p0/gfxxc02d1k157nq21vd8tbvm0000gn/T/codex-clipboard-a3d85a61-3790-4dcd-84f0-8bce4e503f04.png`

## Checks

- Desktop `/projects`: passed, three-column layout renders without horizontal overflow.
- Mobile `/projects`: passed, single-column layout renders without horizontal overflow.
- Desktop `/projects/warm-apartment-renewal`: passed, detail layout renders without horizontal overflow.
- Mobile `/projects/warm-apartment-renewal`: passed, `scrollWidth` equals viewport width.
- Desktop `/contact`: passed, left map and right form follow the reference structure and fit the viewport.
- Mobile `/contact`: passed, map and form stack correctly without horizontal overflow.

## Notes

- Contact form is static and submits through `mailto:`. No backend, CMS, API route, or server action was added.
- Google Map is embedded with the requested address: `106台北市大安區忠孝東路三段100號4樓`.
