import { NextResponse } from 'next/server';
import { user } from '@/app/utlity/db';

export const GET = () => {
    return NextResponse.json(user, { status: 200 });
};

export const POST = async (req) => {
    const payload = await req.json();
    console.log(payload);
    if (!payload.name || !payload.email) {
        return NextResponse.json({ success: false, text: 'Required field is not defined' }, { status: 400 });
    }
    return NextResponse.json({ success: true, text: 'New User Create' }, { status: 201 });
};
