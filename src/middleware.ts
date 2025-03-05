import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const userToken = req.cookies.get("user-token")?.value;

  if (!userToken) {
    return NextResponse.redirect(new URL("/Login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/Dashboard/:path*",
};
