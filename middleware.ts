import { NextRequest, NextResponse } from "next/server";


function withAuth (req: NextRequest) {
    let token = req.cookies.get("accessToken");
    
    if (!token) {
        return NextResponse.redirect(new URL("/auth/login", req.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: "/admin/:path*" 
};

export default withAuth;
