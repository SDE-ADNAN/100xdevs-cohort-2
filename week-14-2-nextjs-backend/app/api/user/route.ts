import { NextRequest, NextResponse } from 'next/server';

export function GET(){
    return Response.json({
        name:"Adnan Khan",
        email:"adnansdeofficial@gmail.com"
    })
}

export async function POST(req: NextRequest) {
    const body = await req.json();
    
    return NextResponse.json({ username: body.username, password: body.password })
}