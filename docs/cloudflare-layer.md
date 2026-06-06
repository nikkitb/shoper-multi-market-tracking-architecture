### 2. Cloudflare Layer

Cloudflare was used as an edge layer in front of the storefront.

Main responsibilities:

- injecting controlled GTM and consent scripts,
- removing or blocking unwanted legacy tracking snippets,
- filtering incorrect GA4 requests,
- exposing cleaner feed endpoints,
- supporting market-specific routing and tracking governance.

Product feed separation itself was mainly based on Shoper-side multi-language and market configuration. Cloudflare was used to proxy and expose selected feed endpoints, not to rebuild the full product feed logic from scratch.