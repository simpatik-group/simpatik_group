import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

import { routing } from './i18n/i18n.config';

const intlMiddleware = createMiddleware(routing);

export function middleware(request: NextRequest): NextResponse {
  const { pathname } = request.nextUrl;

  // Дозволити доступ до сторінки /maintenance напряму
  if (pathname.startsWith('/uk/maintenance')) {
    return NextResponse.next();
  }

  // Редірект усіх інших на maintenance
  return NextResponse.redirect(new URL('/uk/maintenance', request.url));
}

export const config = {
  matcher: ['/', '/((?!api|_next|_vercel|.*\\..*).*)'],
};
