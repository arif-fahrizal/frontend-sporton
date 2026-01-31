import { NextRequest, NextResponse } from 'next/server';

const DASHBOARD_PUBLIC_PAGE = ['/admin/sign-in'];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get('token')?.value;

  const isPublicPage = DASHBOARD_PUBLIC_PAGE.some(page => pathname.startsWith(page));

  if (token && isPublicPage) return NextResponse.redirect(new URL('/admin/products', request.url));
  if (!token && !isPublicPage) return NextResponse.redirect(new URL('/admin/sign-in', request.url));

  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
};
