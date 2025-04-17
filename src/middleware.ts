import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

import { routing } from './i18n/i18n.config';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/maintenance')) {
    return intlMiddleware(request);
  }

  // Redirect all other requests to /forbidden
  return NextResponse.redirect(new URL('/maintenance', request.url));
}

export const config = {
  matcher: ['/', '/((?!api|_next|_vercel|.*\\..*).*)'],
};
