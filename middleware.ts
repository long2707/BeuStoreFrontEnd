import { NextRequest, NextResponse } from "next/server";


function withAuth (req: NextRequest) {
    let token = req.cookies.get("token");
    
    if (!token) {
        return NextResponse.redirect(new URL("/admin/login", req.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: "/admin/dashboard/:path*",
};

export default withAuth;
