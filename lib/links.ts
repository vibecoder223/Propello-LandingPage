// The product is Klovered Free — the guest-first RFP tool, served on the SAME
// domain as this marketing site at /app (Caddy path-routes /app -> the tool
// container). Its auth is a modal that a ?auth=signin | ?auth=signup deep link
// opens straight into the right tab (see AuthButton in the klovered-free repo).
// Signing in there uses the shared backend session cookie, so the account is
// the same one the marketing site would use — one account across both.
//
// APP is the tool's base path. Same-origin "/app" in production; override with
// NEXT_PUBLIC_APP_URL for local dev (e.g. http://localhost:3100/app). `|| "/app"`
// so an empty build arg still resolves correctly.
const APP = process.env.NEXT_PUBLIC_APP_URL || "/app";

export const links = {
  // Land on the tool's first screen with the auth modal already open. We target
  // /knowledge directly (not the /app root) because the root redirect would drop
  // the ?auth query param.
  signin: `${APP}/knowledge?auth=signin`,
  signup: `${APP}/knowledge?auth=signup`,
};
