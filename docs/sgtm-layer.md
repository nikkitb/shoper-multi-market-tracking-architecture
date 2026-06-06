# Server-side GTM Layer

Server-side GTM was used as a routing layer between Web GTM and server-side destinations.

The container received GA4 ecommerce events through custom tagging domains, read event data from incoming requests and routed events to the correct market-specific destinations.

## Main Responsibilities

- Receive GA4 events from Web GTM
- Read `event_id` from incoming event data
- Preserve `event_id` for Meta CAPI deduplication
- Separate PL and DE tracking flows
- Route events to the correct GA4 and Meta CAPI setup
- Block unwanted or low-value events
- Prevent CAPI forwarding without a valid deduplication ID

## Routing Flow

```text
Web GTM
→ GA4 event with event_id
→ Custom tagging domain
→ Server-side GTM
→ Market-specific GA4 / Meta CAPI destination