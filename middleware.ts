import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const sessionToken = request.cookies.get('next-auth.session-token')?.value;

    if (!sessionToken) {
        return NextResponse.redirect(new URL('/userlogin/login', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/protected/:path*'],
};
