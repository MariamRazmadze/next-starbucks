import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

// export { default } from "next-auth/middleware";

export default withAuth(function middleware(req) {
  if (
    req.nextUrl.pathname.startsWith("/register") &&
    req.nextauth.token &&
    req.nextauth.token.role != "admin"
  ) {
    return NextResponse.rewrite(new URL("/Denied", req.url));
  }
  callbacks: {
    autorized: ({ token }: any) => !!token;
  }
});
// export const config = { matcher: ["/register"] };
export const config = { matcher: ["/order"] };
