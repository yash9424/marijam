import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const p = req.nextUrl.pathname

  // Some IDE previews try to inject Vite HMR client in non-Vite apps.
  // Silences 404s and aborted requests by returning empty response.
  if (p === '/@vite/client' || p.startsWith('/@vite')) {
    return new NextResponse(null, { status: 204 })
  }

  return NextResponse.next()
}

// Apply middleware to all paths; we conditionally handle only the Vite paths above
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}