// The product is Klovered Free — a separate Next.js deployment (repo
// klovered-free) whose root redirects to /knowledge. It has no dedicated
// /auth/login or /auth/signup pages; auth is a modal opened from the header.
// The modal supports a ?auth=signin | ?auth=signup deep link (see
// AuthButton.tsx in that repo) so these CTAs land straight in the right tab.
//
// Set NEXT_PUBLIC_APP_URL to that deployment's origin once it's live. Until
// then this falls back to the local dev server so the CTAs work while both
// projects run locally.
const APP = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3100";

export const links = {
  signin: `${APP}/knowledge?auth=signin`,
  signup: `${APP}/knowledge?auth=signup`,
};
