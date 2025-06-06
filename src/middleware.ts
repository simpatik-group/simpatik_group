import createMiddleware from 'next-intl/middleware';

import { routing } from './i18n/i18n.config';

// for normal usage
export default createMiddleware(routing);

// for maintenance mode
// export function middleware(request: NextRequest): NextResponse {
//   if (request.nextUrl.pathname.startsWith('/uk/maintenance')) {
//     return NextResponse.next();
//   }
//   return NextResponse.redirect(new URL('/uk/maintenance', request.url));
// }

export const config = {
  matcher: ['/', '/((?!api|_next|_vercel|.*\\..*).*)'],
};
