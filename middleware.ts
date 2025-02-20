import { NextRequest, NextResponse } from "next/server";
import { get } from "@vercel/edge-config";

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico|maintenance|api|team).*)",
};

export async function middleware(req: NextRequest) {
  try {
    // Check whether the maintenance page should be shown
    const isInMaintenanceMode = await get<boolean>("isInMaintenanceMode");

    // If is in maintenance mode, point the url pathname to the maintenance page
    if (isInMaintenanceMode) {
      req.nextUrl.pathname = `/maintenance`;

      // Rewrite to the url
      return NextResponse.rewrite(req.nextUrl);
    }
  } catch (error) {
    // show the default page if EDGE_CONFIG env var is missing,
    // but log the error to the console
    console.error(error);
  }
}
