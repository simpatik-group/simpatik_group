import { NextRequest, NextResponse } from 'next/server';

// for normal usage
// import createMiddleware from 'next-intl/middleware';
// import { routing } from './i18n/i18n.config';
// export default createMiddleware(routing);

// for maintenance mode
export function middleware(request: NextRequest): NextResponse {
  if (request.nextUrl.pathname.startsWith('/uk/maintenance')) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL('/uk/maintenance', request.url));
}

export const config = {
  matcher: ['/', '/((?!api|_next|_vercel|.*\\..*).*)'],
};
