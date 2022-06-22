import type { NextFetchEvent, NextRequest } from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  // To Fix CORS preflight
  if (req.method === "OPTIONS") return new Response("");
}
