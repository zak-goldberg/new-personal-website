# Infrastructure Setup Overview

This outline covers the final three infrastructure steps in P0. It is deliberately high level; account access, credentials, provider settings, and exact DNS records remain to be decided during setup.

## 1. Deploy the static site to Vercel

### Prerequisites

- The Next.js site can build successfully.
- A Vercel account and a source-control connection or other chosen deployment path are available.

### Main steps

1. Create a Vercel project for the Next.js site.
2. Configure the selected source and production deployment workflow.
3. Enable preview deployments for changes while the site is being iterated.
4. Add only the environment configuration required for the static site.

### Validation

- A production deployment loads at its Vercel-provided address.
- A non-production change receives a preview deployment.
- The deployed homepage renders correctly.

### Decisions left open

- Vercel account ownership and project access.
- Source-control hosting and connection method.
- Production branch and release workflow.
- Required environment configuration.

## 2. Connect and cut over `zak-goldberg.dev` through Cloudflare DNS

### Prerequisites

- The Vercel production deployment is verified.
- Administrative access to the existing Cloudflare-managed zone for `zak-goldberg.dev` is available.
- The existing website is understood well enough to plan a full replacement.

### Main steps

1. Add `zak-goldberg.dev` to the Vercel project as the production domain.
2. Obtain the DNS requirements from Vercel.
3. Update the corresponding Cloudflare DNS configuration for the domain.
4. Allow DNS and certificate provisioning to complete.
5. Verify the replacement site and preserve or intentionally replace any existing domain behavior.

### Validation

- `zak-goldberg.dev` serves the Vercel deployment over HTTPS.
- The expected site is reachable with the intended domain variants.
- No required non-website DNS records were unintentionally changed.

### Decisions left open

- Exact DNS records and Cloudflare proxy settings.
- Whether both apex and `www` addresses will be used and which is canonical.
- Redirect behavior for legacy URLs and alternate domain variants.
- Timing and rollback plan for the public cutover.

## 3. Set up Cloudflare R2 for public media

### Prerequisites

- Cloudflare account access with permission to create and manage R2 resources.
- At least one approved public test asset.
- A decision that the initial asset is public; private family media remains deferred to P2.

### Main steps

1. Create an R2 bucket for website media.
2. Establish the chosen public delivery method and media subdomain, if one is used.
3. Create limited access credentials for the selected upload or deployment workflow; keep them out of source control.
4. Upload a public test asset.
5. Reference the test asset from the deployed frontend.

### Validation

- The test asset loads from the intended public media address in the deployed site.
- The asset is delivered without relying on the application filesystem.
- Credentials are stored in the selected secure configuration location and are not committed.

### Decisions left open

- Bucket name, media subdomain, and public delivery mechanism.
- Media upload workflow and credential ownership.
- Caching, retention, and asset replacement policy.
- Image/video transformation approach.
- Private-media access and delivery design, deferred to P2.
