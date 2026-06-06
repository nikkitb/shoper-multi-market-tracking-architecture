# Shoper Tracking Limitations

Shoper can work as a monolithic e-commerce platform where product data, admin panel, storefront and backend logic are managed inside one system.

This is convenient for launching a store, but creates tracking limitations in multi-market setups.

Main limitations:

- One store instance can serve multiple markets.
- Built-in tracking configuration is not always flexible enough for separated analytics.
- Multi-language and multi-currency support does not automatically mean separate advertising signals.
- Product feeds may require market-specific logic.
- Server-side tracking requires infrastructure outside the platform.

The architecture in this repository shows how Cloudflare Workers, Web GTM and Server-side GTM can be used to work around these limitations.