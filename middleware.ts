import jwtDecode from "jwt-decode";
import { NextRequest, NextResponse } from "next/server";


function withAuth(req: NextRequest) {
    
    let token: any = req.cookies.get("accessToken");
    try {
        if (token) {
            let getUser: any = jwtDecode(token)
           
            
            if(Date.now() > getUser?.exp) return NextResponse.redirect(new URL("/auth/login", req.url));
            if (getUser?.role == "admin") {
                return NextResponse.next();
            }
                return NextResponse.redirect(new URL("/auth/login", req.url));
        }
    

            return NextResponse.redirect(new URL("/auth/login", req.url));
    } catch (error) {
        console.log(error) 
    }

   
}

export const config = {
    matcher: "/dashboard/:path*" 
};

export default withAuth;
