import { NextRequest, NextResponse } from "next/server";

export function GET(req:NextRequest,arg:any){
    console.log(arg.params.authRoutes)
    return NextResponse.json({
        message:arg.params.authRoutes
    })
}