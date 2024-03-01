import { user } from '@/app/utlity/db';
import { NextResponse } from 'next/server';

export const GET = (_req, content) => {
    const specificUser = user.find((item) => item.id === content.params.id);
    console.log(content.params.id, specificUser);
    return NextResponse.json(specificUser ? specificUser : { error: 'User not found' }, { status: specificUser ? 200 : 400 });
};

export const PUT = async (req, content) => {
    const payload = await req.json();
    if (content.params.id && payload.name && payload.age && payload.email) {
        const specificUser = user.find((item) => item.id === content.params.id);
        if (specificUser) {
            return NextResponse.json({ success: true, text: 'User updated' }, { status: 200 });
        } else {
            return NextResponse.json({ success: false, text: 'User not found' }, { status: 400 });
        }
    }
    return NextResponse.json({ success: false, text: 'Please add all require fields' }, { status: 400 });
};

export const DELETE = (_req, content) => {
    const userId = content.params.id;
    if (userId) {
        const specificUser = user.find((item) => item.id === userId);
        if (specificUser) {
            return NextResponse.json({ success: true, text: 'User is deleted' }, { status: 200 });
        } else {
            return NextResponse.json({ success: false, text: 'User not found' }, { status: 400 });
        }
    }
    return NextResponse.json({ success: false, text: 'User not found' }, { status: 400 });
}