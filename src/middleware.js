import { NextResponse } from "next/server";

export function middleware(request) {
    if (process.env.MAINTENANCE === "1") {
        const { pathname } = request.nextUrl;

        if (
            !pathname.startsWith("/_next") &&
            pathname !== "/maintenence" &&
            !pathname.includes(".")
        ) {
            return NextResponse.redirect(new URL("/maintenence", request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: "/:path*",
};
