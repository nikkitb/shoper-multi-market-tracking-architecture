# Web GTM Layer

Web GTM was responsible for browser-side tracking.

Main responsibilities:

- GA4 ecommerce event mapping
- Meta Pixel browser events
- Event ID generation
- Consent-based tag firing
- User data mapping
- Market-specific tracking setup

The generated event ID is reused across Meta Pixel and GA4 events. This allows the same identifier to be forwarded to Server-side GTM and later used for Meta CAPI deduplication.