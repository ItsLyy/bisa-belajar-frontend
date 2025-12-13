import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define public routes that don't require authentication
const publicRoutes = ['/login', '/register'];

// Define API routes that might not need authentication (like registration endpoints)
const publicApiRoutes = ['/api/auth/login', '/api/auth/register'];

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Allow access to public routes
    if (publicRoutes.includes(pathname)) {
        return NextResponse.next();
    }

    // Allow access to public API routes
    if (publicApiRoutes.some(route => pathname.startsWith(route))) {
        return NextResponse.next();
    }

    // Allow access to static files and Next.js internal routes
    if (
        pathname.startsWith('/_next/') ||
        pathname.startsWith('/api/') ||
        pathname.includes('.') ||
        pathname === '/favicon.ico' ||
        pathname === '/manifest.json'
    ) {
        return NextResponse.next();
    }

    // Check for authentication cookie
    const accessToken = request.cookies.get('access-token')?.value;

    // If no access token, redirect to login
    if (!accessToken) {
        const loginUrl = new URL('/login', request.url);
        // Add the current path as a redirect parameter so user can return after login
        loginUrl.searchParams.set('redirect', pathname);
        return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public folder files
         */
        '/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)',
    ],
};