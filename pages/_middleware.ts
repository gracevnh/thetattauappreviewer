import { NextResponse } from 'next/server'
import type { NextFetchEvent, NextRequest } from 'next/server'

export async function middleware(req: NextRequest, ev: NextFetchEvent): Promise<NextResponse> {
    const { pathname } = req.nextUrl
    if (pathname == '/') {
        return NextResponse.redirect('/0')
    }
    return NextResponse.next()
}
