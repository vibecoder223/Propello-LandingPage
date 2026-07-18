// Thin client for the Klovered backend auth API. The marketing site and the
// backend share the klovered.com origin (Caddy routes /api/* to the api
// container), so calls are origin-relative and the shared httpOnly session
// cookie flows automatically — signing in here sets the SAME cookie the tool at
// /app reads, so it's one account across both. Set NEXT_PUBLIC_API_BASE only for
// local dev against a separately-run backend.
const BASE = process.env.NEXT_PUBLIC_API_BASE ?? "";

export type Session = {
  user_id: string;
  org_id: string;
  deal_id?: string | null;
  email: string | null;
  is_anonymous: boolean;
};

export class ApiError extends Error {
  constructor(
    public status: number,
    msg: string,
  ) {
    super(msg);
    this.name = "ApiError";
  }
}

async function apiJson<T = any>(path: string, init: RequestInit = {}): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    ...init,
    credentials: "include",
    headers: {
      ...(init.body ? { "Content-Type": "application/json" } : {}),
      ...(init.headers ?? {}),
    },
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new ApiError(res.status, (data as { error?: string })?.error || `Request failed (${res.status})`);
  }
  return data as T;
}

export const api = {
  me: () => apiJson<Session>("/api/auth/me"),
  signup: (email: string, password: string) =>
    apiJson<Session>("/api/auth/signup", { method: "POST", body: JSON.stringify({ email, password }) }),
  login: (email: string, password: string) =>
    apiJson<Session>("/api/auth/login", { method: "POST", body: JSON.stringify({ email, password }) }),
  logout: () => apiJson("/api/auth/logout", { method: "POST" }),
  googleStartUrl: () => `${BASE}/api/auth/google/start`,
};
