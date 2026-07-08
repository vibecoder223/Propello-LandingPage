// The product (auth, dashboard) is a separate deployment. In production set
// NEXT_PUBLIC_APP_URL to the app origin (e.g. https://app.propello.io) so the
// marketing CTAs point at the real sign-in / sign-up. Falls back to relative
// paths for local preview.
const APP = process.env.NEXT_PUBLIC_APP_URL ?? "";

export const links = {
  signin: `${APP}/auth/login`,
  signup: `${APP}/auth/signup`,
};
