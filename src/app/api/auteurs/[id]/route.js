import { HttpStatusCode } from 'axios';

import Auteur from '@/models/Auteur';
import {  NextResponse } from 'next/server';
import connectDB from '@/lib/connectDB';
export async function GET(_, { params }) {
    try {
        await connectDB();
        const auteur = await Auteur.findById(params.id);
        if (auteur) {
            return NextResponse.json(auteur);
        }
        return NextResponse.json({ message: `Auteur ${params.id} not found` }, { status: HttpStatusCode.NotFound });
    } catch (error) {
        return NextResponse.json({ message: error }, { status: HttpStatusCode.BadRequest });
    }
}

export async function PUT(req, { params }) {
    try { 
        //await connectDB();
            const body= await req.json();
            const auteur = await Auteur.findByIdAndUpdate(
                params.id,
                { $set: body },
              { new: true }
            );
        
            return NextResponse.json({ auteur });
        } catch (error) {
        return NextResponse.json({ message: error }, { status: HttpStatusCode.BadRequest });
    }
}

export async function DELETE(_, { params }) {
    try {
        await Auteur.findByIdAndDelete(params.id);
        return NextResponse.json({ message: `Auteur ${params.id} has been deleted` });
   } catch (error) {
        return NextResponse.json({ message: error }, { status: HttpStatusCode.BadRequest });
    }
}